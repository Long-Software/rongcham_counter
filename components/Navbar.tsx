import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

const Navbar = ({title}: {title: string}) => {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl'>{title}</a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link href='#'>
              <ArrowLeftEndOnRectangleIcon width={24} />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
