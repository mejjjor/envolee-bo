import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE IF NOT EXISTS "home_blocks_seo" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT '',
  	"description" varchar DEFAULT '',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_home_v_blocks_seo" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT '',
  	"description" varchar DEFAULT '',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "honeyPage_blocks_seo" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT '',
  	"description" varchar DEFAULT '',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_honeyPage_v_blocks_seo" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT '',
  	"description" varchar DEFAULT '',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "course_blocks_seo" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT '',
  	"description" varchar DEFAULT '',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_course_v_blocks_seo" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT '',
  	"description" varchar DEFAULT '',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "farming_blocks_seo" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT '',
  	"description" varchar DEFAULT '',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_farming_v_blocks_seo" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT '',
  	"description" varchar DEFAULT '',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "contact_blocks_seo" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT '',
  	"description" varchar DEFAULT '',
  	"block_name" varchar
  );
  
  CREATE TABLE IF NOT EXISTS "_contact_v_blocks_seo" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar DEFAULT '',
  	"description" varchar DEFAULT '',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  DO $$ BEGIN
   ALTER TABLE "home_blocks_seo" ADD CONSTRAINT "home_blocks_seo_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_home_v_blocks_seo" ADD CONSTRAINT "_home_v_blocks_seo_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "honeyPage_blocks_seo" ADD CONSTRAINT "honeyPage_blocks_seo_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."honeyPage"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_honeyPage_v_blocks_seo" ADD CONSTRAINT "_honeyPage_v_blocks_seo_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_honeyPage_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "course_blocks_seo" ADD CONSTRAINT "course_blocks_seo_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."course"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_course_v_blocks_seo" ADD CONSTRAINT "_course_v_blocks_seo_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_course_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "farming_blocks_seo" ADD CONSTRAINT "farming_blocks_seo_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."farming"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_farming_v_blocks_seo" ADD CONSTRAINT "_farming_v_blocks_seo_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_farming_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "contact_blocks_seo" ADD CONSTRAINT "contact_blocks_seo_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  DO $$ BEGIN
   ALTER TABLE "_contact_v_blocks_seo" ADD CONSTRAINT "_contact_v_blocks_seo_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_contact_v"("id") ON DELETE cascade ON UPDATE no action;
  EXCEPTION
   WHEN duplicate_object THEN null;
  END $$;
  
  CREATE INDEX IF NOT EXISTS "home_blocks_seo_order_idx" ON "home_blocks_seo" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "home_blocks_seo_parent_id_idx" ON "home_blocks_seo" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "home_blocks_seo_path_idx" ON "home_blocks_seo" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_home_v_blocks_seo_order_idx" ON "_home_v_blocks_seo" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_home_v_blocks_seo_parent_id_idx" ON "_home_v_blocks_seo" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_home_v_blocks_seo_path_idx" ON "_home_v_blocks_seo" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "honeyPage_blocks_seo_order_idx" ON "honeyPage_blocks_seo" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "honeyPage_blocks_seo_parent_id_idx" ON "honeyPage_blocks_seo" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "honeyPage_blocks_seo_path_idx" ON "honeyPage_blocks_seo" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_honeyPage_v_blocks_seo_order_idx" ON "_honeyPage_v_blocks_seo" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_honeyPage_v_blocks_seo_parent_id_idx" ON "_honeyPage_v_blocks_seo" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_honeyPage_v_blocks_seo_path_idx" ON "_honeyPage_v_blocks_seo" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "course_blocks_seo_order_idx" ON "course_blocks_seo" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "course_blocks_seo_parent_id_idx" ON "course_blocks_seo" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "course_blocks_seo_path_idx" ON "course_blocks_seo" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_course_v_blocks_seo_order_idx" ON "_course_v_blocks_seo" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_course_v_blocks_seo_parent_id_idx" ON "_course_v_blocks_seo" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_course_v_blocks_seo_path_idx" ON "_course_v_blocks_seo" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "farming_blocks_seo_order_idx" ON "farming_blocks_seo" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "farming_blocks_seo_parent_id_idx" ON "farming_blocks_seo" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "farming_blocks_seo_path_idx" ON "farming_blocks_seo" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_farming_v_blocks_seo_order_idx" ON "_farming_v_blocks_seo" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_farming_v_blocks_seo_parent_id_idx" ON "_farming_v_blocks_seo" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_farming_v_blocks_seo_path_idx" ON "_farming_v_blocks_seo" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "contact_blocks_seo_order_idx" ON "contact_blocks_seo" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "contact_blocks_seo_parent_id_idx" ON "contact_blocks_seo" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "contact_blocks_seo_path_idx" ON "contact_blocks_seo" USING btree ("_path");
  CREATE INDEX IF NOT EXISTS "_contact_v_blocks_seo_order_idx" ON "_contact_v_blocks_seo" USING btree ("_order");
  CREATE INDEX IF NOT EXISTS "_contact_v_blocks_seo_parent_id_idx" ON "_contact_v_blocks_seo" USING btree ("_parent_id");
  CREATE INDEX IF NOT EXISTS "_contact_v_blocks_seo_path_idx" ON "_contact_v_blocks_seo" USING btree ("_path");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "home_blocks_seo" CASCADE;
  DROP TABLE "_home_v_blocks_seo" CASCADE;
  DROP TABLE "honeyPage_blocks_seo" CASCADE;
  DROP TABLE "_honeyPage_v_blocks_seo" CASCADE;
  DROP TABLE "course_blocks_seo" CASCADE;
  DROP TABLE "_course_v_blocks_seo" CASCADE;
  DROP TABLE "farming_blocks_seo" CASCADE;
  DROP TABLE "_farming_v_blocks_seo" CASCADE;
  DROP TABLE "contact_blocks_seo" CASCADE;
  DROP TABLE "_contact_v_blocks_seo" CASCADE;`)
}
