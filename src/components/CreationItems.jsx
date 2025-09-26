import React from 'react'

const CreationItems = ({items}) => {
  return (
    <div className='p-4 max-w-5xl text-sm bg-white border border-gray-200 
    rounded-lg curosr-pointer'>
      <div className='flex justify-between items-center gap-4'>
        <div>
            <h2>{items.prompt}</h2>
            <p className='text-gray-500'
            >{items.type} - {new Date(items.createdAt).toLocaleDateString()}</p>
        </div>
        <button className='bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF]
        px-4 py-1 rounded-full'>{items.type}</button>
      </div>
    </div>
  )
}

export default CreationItems
