'use client'
import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import CategorySection from './category-section'
import ListQueue from './list-queue'
const ShopQueuePage = () => {
  const [reload, setReload] = useState(true)
  const [categoryId, setCategoryId] = useState<number | null>(null)

  const toggleReaload = () => {
    setReload(prev => !prev)
  }

  return (
    <>
      <Navbar title='Shop Queue Management' />
      <div className='flex w-full pt-5 px-3'>
        <ListQueue category_id={categoryId} reload={reload} />

        <CategorySection setCategoryId={setCategoryId} setReload={toggleReaload} />
      </div>
    </>
  )
}

export default ShopQueuePage
