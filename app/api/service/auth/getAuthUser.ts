import { createClient } from '@/utils/supabase/client'
import { useCallback } from 'react'

export const getAuthUser = async () => {
  const supabase = createClient() 
  const { data, error } = await supabase.auth.getSession()
  if (data.session) return data.session?.user
  return null
}
