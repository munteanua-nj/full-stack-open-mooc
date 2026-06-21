import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import likeIcon from '@/assets/icons/like-icon.png'
import { likeBlogAction } from '../../actions/blogs'
import { getBlogById } from '../../services/blogs'

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const blog = await getBlogById(Number(id))

  if (!blog) {
    notFound()
  }

  return (
    <div style={{ border: '2px solid black' }}>
      <h2>{blog.title}</h2>
      <h3>{blog.author}</h3>
      <Link href={blog.url}>{blog.url}</Link>
      <div>Likes: {blog.likes}</div>
      <form action={likeBlogAction}>
        <input type='hidden' name='id' value={id} />
        Like ---&gt;
        <button type='submit'>
          <Image src={likeIcon} alt='LikeIcon' width={20} height={20} />
        </button>
      </form>
    </div>
  )
}

export default BlogPage
