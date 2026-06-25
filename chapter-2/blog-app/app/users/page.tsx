import Link from 'next/link'
import { User, getUsers } from '../services/users'

const UsersPage = async () => {
  const users = await getUsers()

  return (
    <div>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}><Link href={`/users/${user.username}`}>{user.name}</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default UsersPage
