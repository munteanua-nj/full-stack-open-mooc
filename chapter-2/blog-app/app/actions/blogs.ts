"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { addBlog, addBlogLike } from "../services/blogs"

export const addBlogAction = async (formData: FormData) => {
  const title = formData.get("title") as string
  const author = formData.get("author") as string
  const url = formData.get("url") as string
  const likes = Number(formData.get("likes") as string)

  await addBlog(title, author, url, likes)

  revalidatePath("/blogs")
  redirect("/blogs")
}

export const addLike = async (formData: FormData) => {
  const id = Number(formData.get('id'))

  await addBlogLike(id)

  revalidatePath(`/blogs/${id}`)
  revalidatePath('/blogs')
}

export const filterAction = async (formData: FormData) => {
  const searchTerm = formData.get('filter')
  revalidatePath('/blogs')
  redirect(`/blogs?filter=${searchTerm}`)
}
