import { eq } from 'drizzle-orm'
import { db } from '../../db'
import { users } from '../../db/schema'

type User = {
  id: number
  username: string
  name: string
}

export const getUsers = async (): Promise<User[]> => {
  return db.query.users.findMany()
}

export const getUserById = async (id: number): Promise<User | undefined> => {
  return db.query.users.findFirst({
    where: eq(users.id, id),
  })
}
