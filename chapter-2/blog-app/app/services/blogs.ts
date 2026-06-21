const blogs = [
  { id: 1, title: 'The Power Vertical', author: 'Brian Whitmore', url: 'https://brianwhitmore.substack.com/', likes: 0 },
  { id: 2, title: 'The Long Game', author: 'Jake Sullivan & Jon Finer', url: 'https://thelonggame.substack.com/', likes: 0 },
  { id: 3, title: 'Vicky Ward Investigates', author: 'Vicky Ward', url: 'https://www.vickywardinvestigates.com/', likes: 0 },
]

let nextId = 4

export const addBlog = (title: string, author: string, url: string, likes: number) => {
  blogs.push({ id: nextId++, title, author, url, likes })
}

export const getBlogs = () => {
  return blogs
}

export const getBlogById = (id: number) => {
  return blogs.find((blog) => blog.id === id)
}
