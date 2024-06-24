'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Card from '@/components/Card'
import { counter, attendee } from '@/temp'
import { getQueue } from '@/app/api/service/getQueue'
import QueueList from '@/components/QueueList'
import useUser from '@/components/hooks/useUser'
import CounterInfo from './CounterInfo'
import CounterQueue from './CounterQueue'

const CounterPage = () => {
  const { user } = useUser()
  const [counterCategory, setCounterCategory] = useState<{
    main_category_id: number
    secondary_category_id: number
  }>({ main_category_id: 0, secondary_category_id: 0 })
  // const [queues, setQueues] = useState<QueueInfo[]>([])
  // const [reload, setReload] = useState<boolean>(true)
  // useEffect(() => {
  //   if (user && user.id) {
  //     getQueue(user.id).then(data => setQueues(data))
  //   }
  // }, [user])

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
          {/* <Card
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
          </Card> */}
          <CounterQueue {...counterCategory} />
          <CounterInfo setCounterCategory={setCounterCategory}/>
        </div>
      </>
    )
}

export default CounterPage
