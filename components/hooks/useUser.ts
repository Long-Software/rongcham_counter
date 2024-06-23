import { getAuthUser } from '@/app/api/service/auth/getAuthUser'
import { AuthUser, User } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

const useUser = () => {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await getAuthUser()
        if (user) setUser(user)
      } catch (error) {
        setError('unauthorize')
      }
    }

    getUser()
  }, [])

  return { user, error }
}

export default useUser
