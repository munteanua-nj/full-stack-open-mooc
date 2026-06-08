import Link from 'next/link'
import { filterAction } from '../actions/blogs'
import { getBlogs } from '../services/blogs'

const Blogs = async ({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>
}) => {
  const { filter } = await searchParams
  const blogs = await getBlogs(filter)
  const sortedByLikes = blogs.sort((a, b) => b.likes - a.likes)
  return (
    <div>
      <form action={filterAction}>
        <label>
          Filter by:
          <input type='text' name='filter' />
        </label>
        <button type='submit'>OK</button>
      </form>
      <p>Showing blogs with "{filter}" in the title.</p>
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
    </div>
  )
}

export default Blogs
