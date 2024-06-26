'use client'
import { getAssignQueue } from '@/app/api/service/counter/getCounterQueue'
import useUser from '@/components/hooks/useUser'
import Navbar from '@/components/Navbar'
import React, { useEffect, useState } from 'react'

const DisplayPage = () => {
  const { user } = useUser()
  const [counterQueues, setCounterQueues] = useState<CounterQueueInfo[]>([])
  
  useEffect(() => {
    if (user) getAssignQueue(user.id).then(data => setCounterQueues(data.data))
  }, [user])

  return (
    <>
      <Navbar title='Display Management' />
      <p className='text-xl'>Display Page</p>
      <div className='w-full px-5'>
        <table className='table border-separate text-center text-lg font-bold'>
          <thead className='bg-error text-white'>
            <tr>
              <th className='rounded-tl-xl'>Ticket</th>
              <th className='rounded-tr-xl'>Counter</th>
            </tr>
          </thead>
          <tbody className='bg-black text-white'>
            {counterQueues.map((queue, index) => {
              return (
                <tr key={index}>
                  <td>{queue.queue_name}</td>
                  <td>{queue.counter_number}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default DisplayPage
