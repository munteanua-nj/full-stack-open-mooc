import { pgTable, serial, text, boolean } from 'drizzle-orm/pg-core'

export const notes = pgTable('notes', {
  id: serial('id').primaryKey(),
  content: text('content').notNull(),
  important: boolean('important').notNull().default(false),
  userId: integer('user_id').reference(() => users.id),
})

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  username: text('username').notNull().unique(),
  name: text('name').notNull(),
})
