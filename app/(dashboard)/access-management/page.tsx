'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import { counter, attendee } from '@/temp'
import { getQueue } from '@/app/api/service/getQueue'
import QueueList from '@/components/QueueList'
import { getBusiness } from '@/app/api/service/business/getBusiness'
import useUser from '@/components/hooks/useUser'

const CounterPage = () => {
  const now = new Date()
  const { user } = useUser()
  const [name, setName] = useState('')
  const [queues, setQueues] = useState<QueueInfo[]>([])
  const [reload, setReload] = useState<boolean>(true)
  // if (!user) getToken().then(data => setUser(data))
  useEffect(() => {
    if (user) {
      console.log(user)
      getQueue(user.id).then(data => setQueues(data))
      getBusiness(user.id).then(data => setName(data.name))
    }
  }, [user])

  const handleNext = () => {}
  const handleSkip = () => {}
  if (user)
    return (
      <>
        <Navbar title='Access Management' />
        <p className='text-xl'>Counter Page</p>
        <div className='flex w-full'>
          <div className='grid h-20 flex-grow card bg-base-300 rounded-box place-items-center'>
            <button className='btn btn-secondary rounded-3xl px-12 text-white'>
              Next
            </button>
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
              <li>Name: {name}</li>
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
