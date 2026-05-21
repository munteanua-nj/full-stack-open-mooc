import Link from 'next/link'
import { getBlogs } from '../services/blogs'

const Blogs = () => {
  const blogs = getBlogs()
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Author</th>
          <th>URL</th>
          <th>Likes</th>
        </tr>
      </thead>
      <tbody>
        {blogs.map((blog) => (
          <tr key={blog.id}>
            <td><Link href={`/blogs/${blog.id}`}>{blog.id}</Link></td>
            <td><Link href={`/blogs/${blog.id}`}>{blog.title}</Link></td>
            <td>{blog.author}</td>
            <td>{blog.url}</td>
            <td>{blog.likes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Blogs
