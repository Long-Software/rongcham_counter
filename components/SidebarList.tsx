import Image from 'next/image'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import {
  BriefcaseIcon,
  QueueListIcon,
  ComputerDesktopIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

interface LinkList {
  href: string
  label: string
  icon: ReactElement
}

const SidebarList = () => {
  const links: LinkList[] = [
    { href: '/counter', label: 'Access Management', icon: <BriefcaseIcon width={24} /> },
    {
      href: '/display',
      label: 'Display Management',
      icon: <ComputerDesktopIcon width={24} />
    },
    { href: '/shop', label: 'Shop Queue Management', icon: <QueueListIcon width={24} /> },
    { href: '/user', label: 'User Queue Management', icon: <ClockIcon width={24} /> }
  ]
  return (
    <ul className='menu min-h-full bg-base-200 text-base-content gap-2'>
      <li>
        <div className='card flex flex-col'>
          <Link href='#'>
            <Image src='/logo.jpg' alt='Logo' width={120} height={120} />
          </Link>
        </div>
      </li>
      {links.map(link => {
        return (
          <li key={link.label} className='text-white'>
            <Link
              href={link.href}
              className='flex items-center rounded-2xl hover:bg-white hover:text-black group'>
              {link.icon}
              <span className='ms-3'>{link.label}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default SidebarList
