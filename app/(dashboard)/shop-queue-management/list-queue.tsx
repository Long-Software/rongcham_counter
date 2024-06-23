import { getQueue } from '@/app/api/service/getQueue'
import Card from '@/components/Card'
import QueueList from '@/components/QueueList'
import React, { useEffect, useState } from 'react'

interface ListQueueProps {
  category_id: number | null
  token: string
  reload: boolean | null
}
const ListQueue = ({ category_id, token, reload }: ListQueueProps) => {
  const [queues, setQueues] = useState<QueueInfo[]>([])
  useEffect(() => {
    getQueue(token).then(data => setQueues(data))
  }, [token, reload])
  return (
    <Card
      title='Main Queue'
      className='w-1/2 h-fit text-white'
      style={{ background: 'linear-gradient(to bottom, #00296B 70%, #0050D1)' }}>
      <QueueList
        queues={queues.filter(queue => queue.category_id == category_id || !category_id)}
      />
    </Card>
  )
}

export default ListQueue
