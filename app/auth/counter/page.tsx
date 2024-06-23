import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'

const CounterLogin = () => {
  const [pin, setPin] = useState('')
  const [accessCode, setAccessCode] = useState('')
  const [pending, setPending] = useState(false)
  const router = useRouter()
  const handleLogIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setPending(true)

    router.push('/')
  }
  return (
    <div
      className='grid h-[100vh] place-items-center'
      style={{ background: 'linear-gradient(to bottom, #FF0000 50%, #990000)' }}>
      <div className='card w-[795px] bg-white px-20 mt-10'>
        <div className='card-body place-items-center'>
          <div className='avatar placeholder'>
            <div className='bg-neutral text-neutral-content rounded-full w-8'></div>
          </div>
          <p className='text-2xl'>Counter Access Management</p>
          <form onSubmit={handleLogIn} className='w-full my-3'>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text opacity-70'>Access Code</span>
              </div>
              <input
                type='text'
                placeholder='Type here'
                className='input border-black w-full'
              />
            </label>
            <label className='form-control w-full mt-3'>
              <div className='label'>
                <span className='label-text opacity-70'>Pin</span>
              </div>
              <input
                type='text'
                placeholder='Type here'
                className='input border-black w-full'
              />
            </label>
            <button
              type='submit'
              className='btn btn-error w-full rounded-3xl text-white mt-5'>
              Access
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CounterLogin
