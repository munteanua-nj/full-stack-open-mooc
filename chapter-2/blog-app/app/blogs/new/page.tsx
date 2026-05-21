import { addBlogAction } from "../../actions/blogs"

const NewBlog = () => {
  return (
    <div>
      <h2>Add a new blog</h2>
      <form action={addBlogAction}>
        <div><label>Title<input type="text" name="title" required/></label></div>
        <div><label>Author<input type="text" name="author" required/></label></div>
        <div><label>URL<input type="text" name="url" required/></label></div>
        <div><label>Likes<input type="text" name="likes" required/></label></div>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default NewBlog
