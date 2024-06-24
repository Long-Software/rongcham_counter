'use client'
import { AuthError, User } from '@supabase/supabase-js'
import { createContext, ReactNode, useContext, useState } from 'react'
import useUser from '../hooks/useUser'
import { createClient } from '@/utils/supabase/client'
import { getAuthUser } from '@/app/api/service/auth/getAuthUser'

interface UserContextType {
  user: User | null
  // error: AuthError | null
  setUser: (user: User | null) => void
  // setError: (error: AuthError) => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider =  ({ children }: { children: ReactNode }) => {
  // const session = useUser()
  const supabase = createClient()
  // const currentUser = await getAuthUser()
  const [user, setUser] = useState<User | null>(null)
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
