import Image from 'next/image'

type Props = {
  title: string
  count: number
  Icon: React.ReactNode
}

const CounterCard = ({ Icon, title, count }: Props) => {
  return (
    <div className='max-w-2xl w-64 h-44 rounded overflow-hidden shadow-lg bg-gray-100 pt-5 px-4'>
      <div className='flex flex-col items-start gap-4'>
        <div className='rounded-full bg-blue-900 h-12 w-12 flex items-center justify-center'>
          {Icon}
        </div>
        <div className='space-y-1'>
          <p className='text-gray-500 text-sm'>{title}</p>
          <p className='text-2xl font-bold'>{count}</p>
        </div>
      </div>
    </div>
  )
}

export default CounterCard
