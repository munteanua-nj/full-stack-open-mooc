const blogs = [
  {
    id: 1,
    title: "The Power Vertical",
    author: "Brian Whitmore",
    url: "https://brianwhitmore.substack.com",
    likes: 999
  },
  {
    id: 2,
    title: "The Vicky Ward blog",
    author: "Vicky Ward",
    url: "https://vickyward.substack.com",
    likes: 800
  }, {
    id: 3,
    title: "I am smert",
    author: "Rudy Giuliani",
    url: "https://smertblog911.substack.com",
    likes: 1
  }
]

let nextId = 4

export const getBlogs = () => {
  return blogs
}

export const getBlogById = (id: number) => {
  return blogs.find((blog) => blog.id === id)
}

export const addBlog = (title: string, author: string, url: string, likes: number) => {
  blogs.push({ id: nextId++, title, author, url, likes })
}
