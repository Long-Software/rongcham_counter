import React from 'react'
import Link from 'next/link'
import { Attendee, Counter, Queue } from '@/types'

const CounterPage = () => {
  const now = new Date()
  const counter: Counter = {
    counter_number: 5,
    access_code: 'abcde',
    attendee_id: 2
  }
  const attendee: Attendee = {
    id: 2,
    name: 'Sammakara Mak',
    pin: '123456'
  }
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
      <p className='text-xl'>Counter Page</p>
      <div className='flex w-full'>
        <div className='grid h-20 flex-grow card bg-base-300 rounded-box place-items-center'>
          <Link href='#' className='btn btn-secondary rounded-3xl px-12 text-white'>
            Next
          </Link>
        </div>
        <div className='grid h-20 flex-grow card bg-base-300 rounded-box place-items-center'>
          <Link href='#' className='btn btn-error rounded-3xl px-12 text-white'>
            Skip
          </Link>
        </div>
      </div>

      <div className='flex w-full px-3'>
        <div
          className='grid flex-grow card rounded-box place-items-center bg-error text-white'
          style={{ background: 'linear-gradient(to bottom, #2D0000 50%, #930000)' }}>
          <ul className='grid gap-1 my-3'>
            {queuees.map((queue, index) => {
              return (
                <li key={queue.id}>
                  <p
                    className={`font-bold text-xl ${
                      index < 3 ? 'text-error' : ''
                    }`}>{`E${queue.number}`}</p>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='grid flex-grow card rounded-box place-items-center font-semibold'>
          <ul className='grid gap-3'>
            <li>Name: ABA Banks</li>
            <li>Counter Number: {counter.counter_number}</li>
            <li>Attendee: {attendee.name}</li>
            <li>Date: {`${now.getDate()}-${now.getMonth()}-${now.getFullYear()}`}</li>
            <li>Queue Finished: 66</li>
            <li>Main Category: 5</li>
            <li>Secondary Category: 3</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default CounterPage
