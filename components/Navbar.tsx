'use client'
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/outline'
import React, { DialogHTMLAttributes } from 'react'
import Dialog from '@/components/Dialog'

const Navbar = ({ title }: { title: string }) => {
  const showDialog = (id: string) => {
    const dialog = document.getElementById(id) as HTMLDialogElement
    dialog.showModal()
  }
  return (
    <>
      <div className='navbar bg-base-100'>
        <div className='flex-1'>
          <a className='btn btn-ghost text-xl'>{title}</a>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <>
                <button onClick={() => showDialog('logout_modal')}>
                  <ArrowLeftEndOnRectangleIcon width={24} />
                  Logout
                </button>
              </>
            </li>
          </ul>
        </div>
      </div>
      <Dialog id='confirm_modal'>
        <>
          <p className='text-xl font-bold text-center my-2'>Log Out</p>
          <p className='text-center font-medium'>
            Please input your counter PIN code to log out.
          </p>
          <form action='' className='grid gap-3 place-items-center mt-3'>
            <input
              type='text'
              placeholder='Pin'
              className='input input-bordered w-full'
            />
            <button type='submit' className='btn btn-warning'>
              Submit
            </button>
          </form>
        </>
      </Dialog>
      <Dialog id='logout_modal'>
        <>
          <p className='text-xl font-bold text-center my-2'>Log Out</p>
          <button
            className='btn btn-error w-full text-white my-1'
            onClick={() => showDialog('confirm_modal')}>
            Log Out as Counter
          </button>
          <button
            className='btn btn-secondary w-full text-white'
            onClick={() => showDialog('confirm_modal')}>
            Log Out as Business
          </button>
        </>
      </Dialog>
    </>
  )
}

export default Navbar
