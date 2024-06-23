'use client'
import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import CategorySection from './category-section'
import ListQueue from './list-queue'
import useUser from '@/components/hooks/useUser'
const ShopQueuePage = () => {
  // const { user, setUser } = useUserContext()
  const { user } = useUser()
  const [reload, setReload] = useState(true)
  const [categoryId, setCategoryId] = useState<number | null>(null)

  const toggleReaload = () => {
    setReload(prev => !prev)
  }
  if (user)
    return (
      <>
        <Navbar title='Shop Queue Management' />
        <div className='flex w-full pt-5 px-3'>
          <ListQueue category_id={categoryId} token={user.id} reload={reload} />

          <CategorySection
            setCategoryId={setCategoryId}
            token={user.id}
            setReload={toggleReaload}
          />
        </div>
      </>
    )
}

export default ShopQueuePage
