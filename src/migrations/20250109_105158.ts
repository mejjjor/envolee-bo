import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "honeyPage_honeys" CASCADE;
  DROP TABLE "_honeyPage_v_version_honeys" CASCADE;
  ALTER TABLE "honeys" ADD COLUMN "available" boolean DEFAULT false;
  ALTER TABLE "_honeys_v" ADD COLUMN "version_available" boolean DEFAULT false;
  ALTER TABLE "honeys" DROP COLUMN IF EXISTS "slug";
  ALTER TABLE "_honeys_v" DROP COLUMN IF EXISTS "version_slug";`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "honeyPage_honeys" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"available" boolean DEFAULT false,
  	"honey_id" integer
  );
  
  CREATE TABLE IF NOT EXISTS "_honeyPage_v_version_honeys" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"available" boolean DEFAULT false,
  	"honey_id" integer,
  	"_uuid" varchar
  );
  
  ALTER TABLE "honeys" ADD COLUMN "slug" varchar;
  ALTER TABLE "_honeys_v" ADD COLUMN "version_slug" varchar;
  DO $$ BEGIN
   ALTER TABLE "honeyPage_honeys" ADD CONSTRAINT "honeyPage_honeys_honey_id_honeys_id_fk" FOREIGN KEY ("honey_id") REFERENCES "public"."honeys"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "honeyPage_honeys" ADD CONSTRAINT "honeyPage_honeys_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."honeyPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_honeyPage_v_version_honeys" ADD CONSTRAINT "_honeyPage_v_version_honeys_honey_id_honeys_id_fk" FOREIGN KEY ("honey_id") REFERENCES "public"."honeys"("id") ON DELETE set null ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_honeyPage_v_version_honeys" ADD CONSTRAINT "_honeyPage_v_version_honeys_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_honeyPage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "honeyPage_honeys_order_idx" ON "honeyPage_honeys" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "honeyPage_honeys_parent_id_idx" ON "honeyPage_honeys" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "honeyPage_honeys_honey_idx" ON "honeyPage_honeys" USING btree ("honey_id");
  CREATE INDEX IF NOT EXISTS "_honeyPage_v_version_honeys_order_idx" ON "_honeyPage_v_version_honeys" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_honeyPage_v_version_honeys_parent_id_idx" ON "_honeyPage_v_version_honeys" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_honeyPage_v_version_honeys_honey_idx" ON "_honeyPage_v_version_honeys" USING btree ("honey_id");
  ALTER TABLE "honeys" DROP COLUMN IF EXISTS "available";
  ALTER TABLE "_honeys_v" DROP COLUMN IF EXISTS "version_available";`)
}
