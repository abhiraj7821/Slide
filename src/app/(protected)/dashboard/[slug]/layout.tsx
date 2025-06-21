import Navbar from '@/components/global/navbar'
import Sidebar from '@/components/global/sidebar'
import React from 'react'
import {dehydrate,HydrationBoundary,QueryClient} from '@tanstack/react-query'
import { PreFetchUserAutomations, PrefetchUserProfile } from '@/react-query/prefetch'

type Props = {
  children: React.ReactNode
  params: { slug: string }
}

const Layout = async ({ children, params }: Props) => {
  // Query
  // WIP: Query client fetch data

  // Pre fetch user profile
  const query = new QueryClient()
  await PrefetchUserProfile(query)

  // Pre fetch user automations
  await PreFetchUserAutomations(query)

  const {slug} = await params

  return (

    <HydrationBoundary state={dehydrate(query)}>
      <div className='p-3 text-white'>
        {/* Sidebar */}
        <Sidebar slug={slug} />

        {/* Navbar */}
        <div className='lg:ml-[250px] lg:pl-10 lg:py-5 flex flex-col overflow-auto'>
          <Navbar slug={slug} />
          {children}
        </div>
      </div>
    </HydrationBoundary>

  );
}

export default Layout