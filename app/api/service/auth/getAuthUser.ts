import { createClient } from "@/utils/supabase/client"

export  const getAuthUser = async() => {
    const supabase = createClient()
    return await supabase.auth.getSession()
}