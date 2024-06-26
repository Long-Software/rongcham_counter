'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import useUser from '@/components/hooks/useUser'
import CounterInfo from './CounterInfo'
import CounterQueue from './CounterQueue'
import { handleNext } from '@/app/api/service/queues/handleNext'
import toast from 'react-hot-toast'

const CounterPage = () => {
  const { user } = useUser()
  const [pending, setPending] = useState(false)
  const [counterCategory, setCounterCategory] = useState<{
    main_category_id: number
    secondary_category_id: number
  }>({ main_category_id: 0, secondary_category_id: 0 })

  const handleNextButton = async () => {
    if (user) {
      setPending(true)
      await handleNext(user.id)
        .then(data => toast.success(data.message))
        .catch(data => toast.error(data.message))
      setPending(false)
    }
  }
  const handleSkipButton = () => {}
  return (
    <>
      <Navbar title='Access Management' />
      <p className='text-xl'>Counter Page</p>
      <div className='flex w-full'>
        <div className='grid h-20 flex-grow card bg-base-300 rounded-box place-items-center'>
          <button
            onClick={handleNextButton}
            disabled={pending}
            className='btn btn-secondary rounded-3xl px-12 text-white'>
            Next
          </button>
        </div>
        <div className='grid h-20 flex-grow card bg-base-300 rounded-box place-items-center'>
          <button
            disabled={pending}
            className='btn btn-error rounded-3xl px-12 text-white'>
            Skip
          </button>
        </div>
      </div>

      <div className='flex w-full px-3'>
        <CounterQueue {...counterCategory} user={user} />
        <CounterInfo setCounterCategory={setCounterCategory} user={user} />
      </div>
    </>
  )
}

export default CounterPage
