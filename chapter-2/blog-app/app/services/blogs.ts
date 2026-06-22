interface Blog {
  id: number;
  title: string;
  author: string;
  url: string;
  likes: number;
}

const blogs = [
  { id: 1, title: 'The Power Vertical', author: 'Brian Whitmore', url: 'https://brianwhitmore.substack.com/', likes: 0 },
  { id: 2, title: 'The Long Game', author: 'Jake Sullivan & Jon Finer', url: 'https://thelonggame.substack.com/', likes: 0 },
  { id: 3, title: 'Vicky Ward Investigates', author: 'Vicky Ward', url: 'https://www.vickywardinvestigates.com/', likes: 0 },
]

let nextId = 4

export const addBlog = (title: string, author: string, url: string, likes: number) => {
  blogs.push({ id: nextId++, title, author, url, likes })
}

export const getBlogs = (searchTerm?: string): Blog[] => {
  var result: Blog[]
  if (searchTerm) {
    result = blogs.filter((blog) => blog.title.indexOf(searchTerm) != -1)
  } else {
    result = [...blogs]
  }
  return result.sort((a, b) => b.likes - a.likes)
}

export const getBlogById = (id: number): Blog | undefined => {
  return blogs.find((blog) => blog.id === id)
}

export const likeBlog = (id: number) => {
  const blog = getBlogById(id)
  if (blog) {
    blog.likes++
  }
}
