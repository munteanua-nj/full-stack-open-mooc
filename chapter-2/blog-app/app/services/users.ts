import { db } from '../../db'

type User = {
  id: number
  username: string
  name: string
}

export const getUsers = async (): Promise<User[]> => {
  return db.query.users.findMany()
}
