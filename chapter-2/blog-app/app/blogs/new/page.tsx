import { createBlog } from '../../actions/blogs'

const NewBlog = () => {
  return (
    <div>
      <h2>Add a new blog</h2>
      <form action={createBlog}>
        <div>
          <label>
            Title
            <input type='text' name='title' required />
          </label>
        </div>
        <div>
          <label>
            Author
            <input type='text' name='author' required />
          </label>
        </div>
        <div>
          <label>
            Url
            <input type='text' name='url' required />
          </label>
        </div>
        <div>
          <label>
            Likes
            <input type='text' name='likes' defaultValue='0' />
          </label>
        </div>
        <button type='submit'>Create</button>
      </form>
    </div>
  )
}

export default NewBlog
