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
  }, {
    id: 4,
    title: "Three Body Problem",
    author: "Foo bar",
    url: "foobar.substack.com",
    likes: 0
  }, {
    id: 5,
    title: "Principles of Software Engineering",
    author: "Eric Ulman",
    url: "www.smartpress.com",
    likes: 1
  }, {
    id: 6,
    title: "War and Peace",
    author: "Leo Tolstoy",
    url: "www.substack.ru",
    likes: 1
  }, {
    id: 7,
    title: "The brothers Kamarazov",
    author: "Fiodor Dostoievsky",
    url: "www.dostoievsky.com",
    likes: 1
  }, {
    id: 8,
    title: "My thoughts",
    author: "God",
    url: "bible.substack.com",
    likes: 1
  }, {
    id: 9,
    title: "On markets",
    author: "Paul Krugman",
    url: "pkrugman.substack.com",
    likes: 1
  }, {
    id: 10,
    title: "China Syndrome",
    author: "Xi Wu Lang",
    url: "chinasyndrome.substack.com",
    likes: 1
  }, {
    id: 11,
    title: "Confucius",
    author: "Old chinese guy",
    url: "confucius.substack.com",
    likes: 1
  }, {
    id: 12,
    title: "Tech dirt",
    author: "John Smith",
    url: "techdirtblog.substack.com",
    likes: 1
  }, {
    id: 13,
    title: "Gardening blog",
    author: "Martha Stewart",
    url: "marthasgardeningblog.substack.com",
    likes: 1
  }, {
    id: 14,
    title: "War on the rocks",
    author: "Peter Alperovichi",
    url: "www.warontherocks.com",
    likes: 1
  }, {
    id: 15,
    title: "Entertainment Tonight",
    author: "Laura Bloom",
    url: "www.et.com",
    likes: 1
  }, {
    id: 16,
    title: "Politico",
    author: "Julia Smart",
    url: "www.politico.com",
    likes: 1
  }
]

let nextId = 17

export const getBlogs = (searchTerm?: string) => {
  if (searchTerm) {
    return blogs.filter((blog) => blog.title.indexOf(searchTerm) != -1)
  }
  return blogs
}

export const getBlogById = (id: number) => {
  return blogs.find((blog) => blog.id === id)
}

export const addBlog = (title: string, author: string, url: string, likes: number) => {
  blogs.push({ id: nextId++, title, author, url, likes })
}
