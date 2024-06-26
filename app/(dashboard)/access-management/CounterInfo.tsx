import getCounterInfo from '@/app/api/service/counter/getCounterInfo'
import { User } from '@supabase/supabase-js'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface CounterInfoProps {
  user: User | null
  setCounterCategory: ({
    main_category_id,
    secondary_category_id
  }: {
    main_category_id: number
    secondary_category_id: number
  }) => void
}
const CounterInfo = ({ user, setCounterCategory }: CounterInfoProps) => {
  const now = new Date()
  const [counterInfo, setCounterInfo] = useState<CounterInfo | null>(null)

  useEffect(() => {
    if (user)
      getCounterInfo(user.id)
        .then(data => {
          setCounterCategory({
            main_category_id: data.data.main_category_id,
            secondary_category_id: data.data.secondary_category_id
          })
          setCounterInfo(data.data)
        })
        .catch(error => toast.error(error))
  }, [user])
  return (
    <div className='grid flex-grow card rounded-box place-items-center font-semibold'>
      <ul className='grid gap-3'>
        <li>Name: {counterInfo?.name}</li>
        <li>Counter Number: {counterInfo?.counter_number}</li>
        <li>Attendee: {counterInfo?.attendee_name}</li>
        <li>Date: {`${now.getDate()}-${now.getMonth()}-${now.getFullYear()}`}</li>
        <li>Queue Finished: {counterInfo?.finished_queue}</li>
        <li>Main Category: {counterInfo?.main_category_id}</li>
        <li>Secondary Category: {counterInfo?.secondary_category_id}</li>
      </ul>
    </div>
  )
}

export default CounterInfo
