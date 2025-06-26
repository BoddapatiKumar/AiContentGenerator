"use client"
import { FileClock, Home, Settings, WalletCards } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

const menuList=[
    {
        name:'Home',
        icon:Home,
        path:'/dashboard'
    },
    {
        name:'History',
        icon:FileClock,
        path:'/dashboard/history'
    },
    {
        name:'Billing',
        icon:WalletCards,
        path:'/dashboard/billing'
    },
    {
        name:'Setting',
        icon:Settings,
        path:'/dashboard/setting'
    }
]

const SideNav = () => {
  const path=usePathname();
  return (
    <div className="h-screen p-5 shadow-sm border bg-white">
      <div className="flex justify-center">
        <Image src={'/logo.svg'} alt="logo" width={100} height={100} />
      </div>
      <hr className="my-7 border"/>
      <div className="mt-3">
        {
            menuList.map((item,index)=>(
                <div key={index} className={`flex gap-2 mb-2 p-3 hover:bg-violet-700 hover:text-white rounded-lg cursor-pointer items-center ${path==item.path && 'bg-violet-700 text-white'}`}>
                    <item.icon className="h-6 w-6"/>
                    <h2 className="text-lg">{item.name}</h2>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default SideNav
