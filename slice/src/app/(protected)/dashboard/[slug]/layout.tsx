import Navbar from '@/components/global/navbar'
import Sidebar from '@/components/global/sidebar'
import React from 'react'

type Props = {
  children: React.ReactNode
  params: { slug: string }
}

const Layout = async ({ children, params }: Props) => {
  const {slug} = await params
  return (
    <div className='p-3 text-white'>
      {/* Sidebar */}
      <Sidebar slug={slug} />

      {/* Navbar */}
      <div className='lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto'>
        <Navbar slug={slug} />
        {children}
      </div>
    </div>
  );
}

export default Layout