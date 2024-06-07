'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import { Category, Queue } from '@prisma/client'
import { getCategory } from '@/app/api/service/getCategory'
import { business_token } from '@/temp'
import { getQueue } from '@/app/api/service/getQueue'
import { createQueue } from '@/app/api/service/createQueue'
import axios from 'axios'
const ShopQueuePage = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [queues, setQueues] = useState<QueueInfo[]>([])
  const [reload, setReload] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  useEffect(() => {
    getCategory(business_token)
      .then(data => setCategories(data))
      .catch(err => setError(err))

    getQueue(business_token)
      .then(data => setQueues(data))
      .catch(err => setError(err))
  }, [reload])

  return (
    <>
      <Navbar title='Shop Queue Management' />
      <div className='flex w-full pt-5 px-3'>
        <Card
          title='Main Queue'
          className='w-1/2 h-fit text-white'
          style={{ background: 'linear-gradient(to bottom, #00296B 70%, #0050D1)' }}>
          <ul className='grid gap-1 my-3'>
            {queues.map((queue, index) => {
              return (
                <li key={queue.id}>
                  <p
                    className={`font-bold text-xl ${
                      index < 3 ? 'text-error opacity-70' : ''
                    }`}>{`${queue.name}`}</p>
                </li>
              )
            })}
          </ul>
        </Card>

        <div className='grid w-1/2 px-3 h-fit'>
          <Card title='Category Queue' className='bg-primary text-white'>
            <>
              <select className='select text-black my-3'>
                <option disabled selected>
                  Select Queue
                </option>
                <option>Main Queue</option>
                {categories.map(category => (
                  <option key={category.id}>{category.name}</option>
                ))}
              </select>
              <button type='submit' className='btn btn-info w-fit mb-3'>
                Submit
              </button>
            </>
          </Card>

          <Card title='Queue Registration' className='bg-primary text-white mt-3'>
            <ul className='w-full py-3 px-2'>
              {categories.map(category => (
                <li key={category.id}>
                  <button
                    className='btn btn-accent w-full my-1'
                    onClick={() => {
                      createQueue(business_token, category.id).then(() =>
                        setReload(prev => !prev)
                      )
                    }}>
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </>
  )
}

export default ShopQueuePage
