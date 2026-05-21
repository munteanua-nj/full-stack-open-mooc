import { notFound } from 'next/navigation'
import { getBlogById } from '../../services/blogs'

const BlogPage = async ({ params } : { params: Promise<{id: string}> }) => {
  const { id } = await params
  const blog = getBlogById(Number(id))
  const borderStyle = {
    border: '1px solid black'
  }

  if (!blog) {
    notFound()
  }

  return (
    <table style={borderStyle}>
      <tbody>
        <tr><td style={borderStyle}>id</td><td style={borderStyle}>{blog.id}</td></tr>
        <tr><td style={borderStyle}>title</td><td style={borderStyle}>{blog.title}</td></tr>
        <tr><td style={borderStyle}>author</td><td style={borderStyle}>{blog.author}</td></tr>
        <tr><td style={borderStyle}>url</td><td style={borderStyle}>{blog.url}</td></tr>
        <tr><td style={borderStyle}>likes</td><td style={borderStyle}>{blog.likes}</td></tr>
      </tbody>
    </table>
  )
}

export default BlogPage
