import React from 'react'

const Navigation = () => {
  return (
    <div className='flex flex-col gap-2 items-start mt-14'>
        <button className='font-bold tracking-tighter text-sm'>Home</button>
        <button className='font-bold tracking-tighter text-sm'>About</button>
        <button className='font-bold tracking-tighter text-sm'>Projects</button>
        <button className='font-bold tracking-tighter text-sm'>Contacts</button>
        <button className='font-bold tracking-tighter text-sm'>Hire me</button>
    </div>
  )
}

export default Navigation