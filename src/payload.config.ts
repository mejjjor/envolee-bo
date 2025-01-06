import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor, FixedToolbarFeature } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { fr } from '@payloadcms/translations/languages/fr'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Honeys } from './collections/Honeys'
import { Flowers } from './collections/Flowers'
import { Titles } from './collections/Titles'
import { Home } from './collections/Home'
import { Courses } from './collections/Courses'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'

import { Config } from './payload-types'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  globals: [Home, Titles, Courses],
  collections: [Honeys, Flowers, Media, Users],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [...defaultFeatures, FixedToolbarFeature()],
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
    declare: false,
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  i18n: {
    fallbackLanguage: 'fr',
    supportedLanguages: { fr },
  },
  sharp,
  plugins: [
    vercelBlobStorage({
      collections: {
        [Media.slug]: {
          prefix: process.env.NODE_ENV,
        },
      },
      token: process.env.BLOB_READ_WRITE_TOKEN ?? '',
    }),
  ],
})

declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}
