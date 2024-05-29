import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl'>Access Management</a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link href='#'>Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
