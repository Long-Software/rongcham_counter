import Card from '@/components/Card'
import Image from 'next/image'
import React from 'react'

const BusinessLogin = () => {
  return (
    <div className='grid h-[100vh] place-items-center bg-primary'>
      <div className='card w-[795px] bg-white px-20 mt-10'>
        <div className='card-body place-items-center'>
          <div className='avatar placeholder'>
            <div className='bg-neutral text-neutral-content rounded-full w-8'></div>
          </div>
          <p className='text-2xl'>Log in</p>
          <div className='flex flex-col w-full'>
            <div className='grid card rounded-box place-items-center my-3'>
              <button className='w-full rounded-3xl btn'>
                <Image src='/google.jpg' alt='google logo' width={24} height={24}/>
                Continue with Google</button>
            </div>
            <div className='divider divider-primary'>OR</div>
            <div className='grid card rounded-box place-items-center my-3'>
              <p className='font-semibold'>Enter your email address to Log in.</p>
              <form action='' className='w-full my-3'>
                <label className='form-control w-full'>
                  <div className='label'>
                    <span className='label-text opacity-70'>Your email</span>
                  </div>
                  <input
                    type='text'
                    placeholder='Type here'
                    className='input border-black w-full'
                  />
                </label>
                <button type='submit'className='btn btn-secondary w-full rounded-3xl text-white mt-5'>Log In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusinessLogin
