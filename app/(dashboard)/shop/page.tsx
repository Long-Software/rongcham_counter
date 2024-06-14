'use client'
import React, { FormEvent, FormEventHandler, useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import { Category, Queue } from '@prisma/client'
import { getCategory } from '@/app/api/service/getCategory'
import { business_token } from '@/temp'
import { getQueue } from '@/app/api/service/getQueue'
import { createQueue } from '@/app/api/service/createQueue'
import QueueList from '@/components/QueueList'
const ShopQueuePage = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [queues, setQueues] = useState<QueueInfo[]>([])
  const [reload, setReload] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [categoryId, setCategoryId] = useState<number | null>(null)
  useEffect(() => {
    getQueue(business_token)
      .then(data => setQueues(data))
      .catch(err => setError(err))
    getCategory(business_token)
      .then(data => setCategories(data))
      .catch(err => setError(err))
  }, [reload])

  const hanldeSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const category_id =
      formData.get('category_id') == 'all' ? null : Number(formData.get('category_id'))
    setCategoryId(category_id)
  }
  return (
    <>
      <Navbar title='Shop Queue Management' />
      <div className='flex w-full pt-5 px-3'>
        <Card
          title='Main Queue'
          className='w-1/2 h-fit text-white'
          style={{ background: 'linear-gradient(to bottom, #00296B 70%, #0050D1)' }}>
          <QueueList
            queues={queues.filter(
              queue => queue.category_id == categoryId || !categoryId
            )}
          />
        </Card>

        <div className='grid w-1/2 px-3 h-fit'>
          <Card title='Category Queue' className='bg-primary text-white'>
            <form onSubmit={hanldeSubmit}>
              <select className='select text-black my-3' name='category_id'>
                <option disabled selected>
                  Select Queue
                </option>
                <option value='all'>Main Queue</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
              <button type='submit' className='btn btn-info w-fit mb-3'>
                Submit
              </button>
            </form>
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
