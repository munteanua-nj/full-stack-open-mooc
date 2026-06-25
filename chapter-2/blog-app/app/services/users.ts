import { eq } from 'drizzle-orm'
import { db } from '../../db'
import { blogs, users } from '../../db/schema'
import { Blog } from './blogs'

export type User = {
  id: number
  username: string
  name: string
  blogs?: Blog[]
}

export const getUsers = async (): Promise<User[]> => {
  return db.query.users.findMany()
}

export const getUserByUsername = async (username: string): Promise<User | undefined> => {
  return db.query.users.findFirst({
    where: eq(users.username, username),
  })
}

export const getUserWithNotes = async (username: string): Promise<User | undefined> => {
  return db.query.users.findFirst({
    where: eq(users.username, username),
    with: { blogs: true },
  })
}

export const getBlogsByUserId = async (userId: number): Promise<Blog[]> => {
  return db.query.blogs.findMany({
    where: eq(blogs.userId, userId),
  })
}
