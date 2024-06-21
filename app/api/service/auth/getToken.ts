import { getAuthUser } from './getAuthUser'

export const getToken = async () => {
  try {
    const { data: {session}, error } = await getAuthUser()
    if (error) throw new Error(error.message)
    if (!session || !session.user) throw new Error('token not found')
    return session.user.id
  } catch (error) {
    const err = error as Error
    return err.message
  }
}
