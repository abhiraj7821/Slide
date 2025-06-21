import { SIDEBAR_MENU } from '@/constants/menu'
import { cn } from '@/lib/utils'
import Link from 'next/link' // ✅ You should import Link from 'next/link' not 'lucide-react'
import React from 'react'

type Props = {
  page: string
  slug: string
}

function Items({ page, slug }: Props) {
  return SIDEBAR_MENU.map((item) => (
    <Link 
      key={item.id} 
      href={`/dashboard/${slug}/${item.label === 'home' ? '/' : item.label }`}
      className={cn(
        "capitalize flex gap-2 rounded-2xl p-1 items-center text-black",
        page === item.label && 'bg-white',
        page === slug && item.label === 'home' ? 'bg-white' : 'text-[#9B9CA0]'
      )}
    > 
      {item.icon}
      {item.label}
    </Link>
  ));
}

export default Items
