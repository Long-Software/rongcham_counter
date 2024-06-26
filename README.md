```tsx
// try catch block
try {
  // code
  if (res.data.status == 'error') throw new Error(res.data.message)
  return res.data
} catch (error) {
  throw error
}

// try catch after service
.then(data => toast.success(data.message))
.catch(error => toast.error(error))

// disable button
disabled={pending}

// headers
{
  headers: { Authorization: `Bearer ${token}` }
}

// auth header
const token = getAuthToken(req)
if (!token) return resWithError(resMessage.token_error)
```

```tsx
'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import type { Database } from '@/lib/database.types'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const supabase = createClientComponentClient<Database>()

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/confirm`
      }
    })
    router.refresh()
  }

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password
    })
    router.refresh()
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <>
      <input name='email' onChange={e => setEmail(e.target.value)} value={email} />
      <input
        type='password'
        name='password'
        onChange={e => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleSignUp}>Sign up</button>
      <button onClick={handleSignIn}>Sign in</button>
      <button onClick={handleSignOut}>Sign out</button>
    </>
  )
}
```

```tsx
const session = '1'
const expires = Date.now() + 24 * 60 * 60 * 1000
cookies().set('session', 'session', { expires })
```

TODO: finalize next funcion for counter
TODO: implemnet update function for queue
TODO: implement function for queuehistory
TODO: implement udpate previous queue status for counter
TODO: update any queue and queue history data for counterj
