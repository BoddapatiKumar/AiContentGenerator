"use client"
import { useState } from 'react'
import SearchSection from './_Components/SearchSection'
import TemplateListSection from './_Components/TemplateListSection'

const page = () => {
  const [userSearchInput,setUserSearchInput]=useState<string>();
  return (
    <div>
      {/* search section */}
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)} />

      {/* template list section */}
      <TemplateListSection userSearchInput={userSearchInput}/>
    </div>
  )
}

export default page
