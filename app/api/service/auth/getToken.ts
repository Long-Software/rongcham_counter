import { getAuthUser } from './getAuthUser'

export const getToken = async () => {
  try {
    const user = await getAuthUser()
    if (!user) throw new Error('unauthorize')
    return user.id
  } catch (error) {
    const err = error as Error
    return err.message
  }
}
