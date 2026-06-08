import { eq, sql } from 'drizzle-orm'
import { db } from '../../db'
import { blogs } from '../../db/schema'

export const getBlogs = async (searchTerm?: string) => {
  if (searchTerm) {
    return db.query.blogs.findMany({
      where: sql`${blogs.title} ilike ${'%' + searchTerm + '%'}`,
    })
  }

  return db.query.blogs.findMany()
}

export const getBlogById = async (id: number) => {
  return db.query.blogs.findFirst({
    where: eq(blogs.id, id),
  })
}

export const addBlog = async (title: string, author: string, url: string, likes: number) => {
  await db.insert(blogs).values({ title, author, url, likes })
}

export const addBlogLike = async (id: number) => {
  await db
    .update(blogs)
    .set({ likes: sql`${blogs.likes} + 1` })
    .where(eq(blogs.id, id))
}
