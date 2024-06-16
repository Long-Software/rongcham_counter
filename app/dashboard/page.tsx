// pages/DashboardPage.js
import React from 'react'
import { Key } from 'react'
import CounterCard from './CounterCard'
import { BsClipboardDataFill } from 'react-icons/bs'

type Props = {
  title: string
  count: number
  Icon: React.ReactNode
}

const cardData: Props[] = [
  { title: 'Total Counter', count: 7, Icon: <BsClipboardDataFill /> },
  { title: 'New Counter', count: 14, Icon: <BsClipboardDataFill /> },
  { title: 'Active Counter', count: 3, Icon: <BsClipboardDataFill /> },
  { title: 'Inactive Counter', count: 4, Icon: <BsClipboardDataFill /> }
]

const DashboardPage = () => {
  return (
    <div className='flex gap-12'>
      {cardData.map((card, index: Key) => (
        <CounterCard key={index} title={card.title} count={card.count} Icon={card.Icon} />
      ))}
    </div>
  )
}

export default DashboardPage
