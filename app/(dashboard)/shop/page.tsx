import React from 'react'
import Link from 'next/link'
import { Attendee, Category, Counter, Queue } from '@/types'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'

const ShopQueuePage = () => {
  const categories: Category[] = [
    { id: 1, name: 'Account Opening' },
    { id: 2, name: 'Account Closure' },
    { id: 3, name: 'General Inquiry' }
  ]
  const queuees: Queue[] = [
    { id: 89, category_id: 3, number: 89 },
    { id: 90, category_id: 3, number: 90 },
    { id: 91, category_id: 3, number: 91 },
    { id: 92, category_id: 3, number: 92 },
    { id: 93, category_id: 3, number: 93 },
    { id: 94, category_id: 3, number: 94 },
    { id: 95, category_id: 3, number: 95 },
    { id: 96, category_id: 3, number: 96 }
  ]
  return (
    <>
      <Navbar title='Shop Queue Management' />
      <div className='flex w-full pt-5 px-3'>
        <Card
          title='Main Queue'
          className='w-1/2 h-fit text-white'
          style={{ background: 'linear-gradient(to bottom, #00296B 70%, #0050D1)' }}>
          <ul className='grid gap-1 my-3'>
            {queuees.map((queue, index) => {
              return (
                <li key={queue.id}>
                  <p
                    className={`font-bold text-xl ${
                      index < 3 ? 'text-error opacity-70' : ''
                    }`}>{`E${queue.number}`}</p>
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
                  <button className='btn btn-accent w-full my-1'>{category.name}</button>
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
