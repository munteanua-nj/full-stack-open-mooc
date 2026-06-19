import './blogs.css'

const blogs = [
  { id: 1, title: 'The Power Vertical', author: 'Brian Whitmore', url: 'https://brianwhitmore.substack.com/', likes: 0 },
  { id: 2, title: 'The Long Game', author: 'Jake Sullivan & Jon Finer', url: 'https://thelonggame.substack.com/', likes: 0 },
  { id: 3, title: 'Vicky Ward Investigates', author: 'Vicky Ward', url: 'https://www.vickywardinvestigates.com/', likes: 0 },
]

const Blogs = () => {
  return (
    <div>
     <h2>Blogs</h2>
      <table>
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
              <td>{blog.title}</td>
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
