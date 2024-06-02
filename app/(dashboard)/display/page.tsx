import Navbar from '@/components/Navbar'
import React from 'react'

const DisplayPage = () => {
  const counter_queue = [
    ['A53', '01'],
    ['A54', '02'],
    ['A55', '03'],
    ['A56', '04'],
    ['A57', '05'],
    ['A58', '06'],
    ['A59', '07']
  ]
  return (
    <>
    <Navbar title='Display Management'/>
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
            {counter_queue.map((queue, index) => {
              return (
                <tr key={index}>
                  <td>{queue[0]}</td>
                  <td>{queue[1]}</td>
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
