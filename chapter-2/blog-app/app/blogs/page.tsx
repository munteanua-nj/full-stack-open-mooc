import Link from 'next/link'
import { getBlogs } from '../services/blogs'

const Blogs = () => {
  const sortedByLikes = [...getBlogs()].sort((a, b) => b.likes - a.likes)
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
        {sortedByLikes.map((blog) => (
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
