import { notFound } from 'next/navigation'
import { getUserById } from '../../services/users'

const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const user = await getUserById(Number(id))

  if (!user) {
    notFound()
  }

  return (
    <div>
      ID: {user.id}<br />
      username: {user.username}<br />
      name: {user.name}
    </div>
  )
}

export default UserDetails
