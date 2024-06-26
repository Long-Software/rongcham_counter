import { getQueue } from '@/app/api/service/queues/getQueue'
import Card from '@/components/Card'
import QueueList from '@/components/QueueList'
import { User } from '@supabase/supabase-js'
import React, { useEffect, useState } from 'react'

interface CounterQueueProps {
  user: User | null
  main_category_id: number
  secondary_category_id: number
}
const CounterQueue = ({
  user,
  main_category_id,
  secondary_category_id
}: CounterQueueProps) => {
  // const { user } = useUser()
  const [queues, setQueues] = useState<QueueInfo[]>([])
  useEffect(() => {
    if (user && user.id) getQueue(user.id).then(data => setQueues(data.data))
  }, [user])
  return (
    <Card
      title=''
      className='flex-grow text-white'
      style={{ background: 'linear-gradient(to bottom, #2D0000 50%, #930000)' }}>
      <QueueList
        queues={queues.filter(
          queue =>
            queue.category_id == main_category_id ||
            queue.category_id == secondary_category_id
        )}
      />
    </Card>
  )
}

export default CounterQueue
