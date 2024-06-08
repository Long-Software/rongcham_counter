import React from 'react'

const QueueList = ({ queues }: { queues: QueueInfo[] }) => {
  return (
    <ul className='grid gap-1 my-3'>
      {queues.map((queue, index) => {
        return (
          <li key={queue.id}>
            <p
              className={`font-bold text-xl ${
                index < 3 ? 'text-error opacity-70' : ''
              }`}>{`${queue.name}`}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default QueueList
