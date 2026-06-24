import { User, getUsers } from '../services/users'

const UsersPage = async () => {
  const users = await getUsers()

  return (
    <div>
      <ul>
        {users.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default UsersPage
