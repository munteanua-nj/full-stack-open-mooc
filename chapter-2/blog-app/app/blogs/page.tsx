import Link from 'next/link'
import './blogs.css'
import { getBlogs } from '../services/blogs'

const Blogs = async ({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string }>
}) => {
  const { filter } = await searchParams

  const blogs = getBlogs(filter)
  return (
    <div>
      <h2>Blogs</h2>
      <form>
        <label>
          Filter:&nbsp;
         <input type='text' name='filter' />
           &nbsp;
         <button type='submit'>Ok</button>
        </label>
      </form>
      <table style={{marginTop: '20px'}}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Url</th>
            <th>Likes</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map(blog => (
            <tr key={blog.id}>
              <td>{blog.id}</td>
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
