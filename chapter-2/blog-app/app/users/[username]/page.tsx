import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getUserWithNotes } from '../../services/users'

const UserDetails = async ({ params }: { params: Promise<{ username: string }> }) => {
  const { username } = await params
  const user = await getUserWithNotes(username)

  if (!user) {
    notFound()
  }

  return (
    <>
      <div>
        ID: {user.id}<br />
        username: {user.username}<br />
        name: {user.name}
      </div>
      <div>
        <h2>Blogs</h2>
        {user.blogs?.map((blog) => (
          <span key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link><br />
          </span>
        ))}
      </div>
    </>
  )
}

export default UserDetails