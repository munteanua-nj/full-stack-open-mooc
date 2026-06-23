import { eq, sql } from 'drizzle-orm'
import { db } from '../../db'
import { blogs } from '../../db/schema'

interface Blog {
  id: number;
  title: string;
  author: string;
  url: string;
  likes: number;
}

export const addBlog = async (title: string, author: string, url: string, likes: number) => {
  await db.insert(blogs).values({ title, author, url, likes })
}

export const getBlogs = async (searchTerm?: string): Promise<Blog[]> => {
  if (searchTerm) {
    return db.query.blogs.findMany({
      where: sql`${blogs.title} ilike ${'%' + searchTerm + '%'}`,
      orderBy: (blogs, { desc }) => [desc(blogs.likes)],
    })
  }

  return db.query.blogs.findMany({
    orderBy: (blogs, { desc }) => [desc(blogs.likes)],
  })
}

export const getBlogById = async (id: number): Promise<Blog | undefined> => {
  return db.query.blogs.findFirst({
    where: eq(blogs.id, id),
  })
}

export const likeBlog = async (id: number) => {
  const blog = await getBlogById(id)
  if (blog) {
    await db
      .update(blogs)
      .set({ likes: blog.likes + 1 })
      .where(eq(blogs.id, id))
  }
}
