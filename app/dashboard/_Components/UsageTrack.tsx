import { Button } from '@/components/ui/button'
import React from 'react'

const UsageTrack = () => {
  return (
    <div className='m-5'>
      <div className='bg-violet-700 text-white p-3 rounded-lg'>
        <h2 className='font-medium'>Credits</h2>
        <div className='h-2 bg-[#9981f9] w-full mt-3 rounded-full'>
            <div className='h-2 bg-white rounded-full'
                style={{width:'35%'}}>

            </div>
        </div>
        <h2 className='text-sm my-2'>350/10,000 credits used</h2>
      </div>
      <Button className='w-full my-3 bg-violet-700 hover:bg-violet-700'>Upgrade</Button>
    </div>
  )
}

export default UsageTrack
