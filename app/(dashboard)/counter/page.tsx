'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import { counter, attendee, business_token, business } from '@/temp'
import { getQueue } from '@/app/api/service/getQueue'
import QueueList from '@/components/QueueList'

const CounterPage = () => {
  const now = new Date()
  const [queues, setQueues] = useState<QueueInfo[]>([])
  const [reload, setReload] = useState<boolean>(true)
  useEffect(() => {
    getQueue(business_token).then(data => setQueues(data))
  }, [reload])

  const handleNext = () => {}
  const handleSkip = () => {}
  return (
    <>
      <Navbar title='Access Management' />
      <p className='text-xl'>Counter Page</p>
      <div className='flex w-full'>
        <div className='grid h-20 flex-grow card bg-base-300 rounded-box place-items-center'>
          <button className='btn btn-secondary rounded-3xl px-12 text-white'>Next</button>
        </div>
        <div className='grid h-20 flex-grow card bg-base-300 rounded-box place-items-center'>
          <button className='btn btn-error rounded-3xl px-12 text-white'>Skip</button>
        </div>
      </div>

      <div className='flex w-full px-3'>
        <Card
          title=''
          className='flex-grow text-white'
          style={{ background: 'linear-gradient(to bottom, #2D0000 50%, #930000)' }}>
          <QueueList
            queues={queues.filter(
              queue =>
                queue.category_id == counter.main_category_id ||
                queue.category_id == counter.secondary_category_id
            )}
          />
        </Card>

        <div className='grid flex-grow card rounded-box place-items-center font-semibold'>
          <ul className='grid gap-3'>
            <li>Name: {business.name}</li>
            <li>Counter Number: {counter.counter_number}</li>
            <li>Attendee: {attendee.name}</li>
            <li>Date: {`${now.getDate()}-${now.getMonth()}-${now.getFullYear()}`}</li>
            <li>Queue Finished: 66</li>
            <li>Main Category: {counter.main_category_id}</li>
            <li>Secondary Category: {counter.secondary_category_id}</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default CounterPage
