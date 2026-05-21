"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { addBlog, getBlogById } from "../services/blogs"

export const addBlogAction = async (formData: FormData) => {
  const title = formData.get("title") as string
  const author = formData.get("author") as string
  const url = formData.get("url") as string
  const likes = Number(formData.get("likes") as string)
  
  addBlog(title, author, url, likes)

  revalidatePath("/blogs")
  redirect("/blogs")
}

export const addLike = async (formData: FormData) => {
  const id = Number(formData.get('id'))
  const blog = getBlogById(id)
  
  if (!blog) {
    return
  }
  blog.likes++

  revalidatePath(`/blogs/${id}`)
  revalidatePath('/blogs')
}

