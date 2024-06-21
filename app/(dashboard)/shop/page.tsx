'use client'
import React, { useCallback, useState } from 'react'
import Navbar from '@/components/Navbar'
import { business_token } from '@/temp'
import CategorySection from './category-section'
import ListQueue from './list-queue'
import { createClient } from '@/utils/supabase/client'
import { getToken } from '@/app/api/service/auth/getToken'
const ShopQueuePage = () => {
  const supabase = createClient()
  const [reload, setReload] = useState(true)
  const [token, setToken] = useState('')
  const [categoryId, setCategoryId] = useState<number | null>(null)
  useCallback(async () => {
    const data = await getToken()
    console.log(data)
    setToken(data)
  }, [supabase])
  const toggleReaload = () => {
    setReload(prev => !prev)
  }
  return (
    <>
      <Navbar title='Shop Queue Management' />
      <div className='flex w-full pt-5 px-3'>
        <ListQueue category_id={categoryId} token={business_token} reload={reload} />

        <CategorySection
          setCategoryId={setCategoryId}
          token={business_token}
          setReload={toggleReaload}
        />
      </div>
    </>
  )
}

export default ShopQueuePage
