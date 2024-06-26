import type { Metadata } from 'next'
import SidebarList from '@/components/SidebarList'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'RongCham',
  description: 'Digital Queuing service'
}

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Toaster />
      <div className='flex flex-col ml-[290px] items-center justify-center'>
        {children}
      </div>
      <div className='fixed top-0 left-0 w-[290px] h-screen bg-primary'>
        <SidebarList />
      </div>
    </>
  )
}
