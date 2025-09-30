import React, { useState } from 'react'
import Markdown from 'react-markdown';

const CreationItems = ({items}) => {

  const [expanded, setExpanded] = useState(false);

  return (
    //Recent Creations Item
    <div onClick={()=> setExpanded(!expanded)} className='p-4 max-w-5xl text-sm bg-white border border-gray-200 
    rounded-lg cursor-pointer'>
      <div className='flex justify-between items-center gap-4'>
        <div>
            <h2>{items.prompt}</h2>
            <p className='text-gray-500'
            >{items.type} - {new Date(items.created_at).toLocaleDateString()}</p>
        </div>
        <button className='bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF]
        px-4 py-1 rounded-full cursor-pointer'>{items.type}</button>
      </div>
      {/* Content after click to expand */}
      {
        expanded && (
          <div>
            {items.type === 'image' ? (
              <div>
                <img className='mt-3 w-full max-w-md'
                src={items.content} alt="image" />
                </div>
            ) : (
              <div className='mt-3 h-full overflow-y-scroll text-sm
              text-slate-700'>
                  <div>
                    {/* Markdown phải nhận kiểu dữ liệu là string nên phải kiểm tra
                    nếu đúng thì mới render
                    vì items.content có thể là string hoặc là url ảnh */}
                    {typeof items.content === 'string' && (
                      <div className='reset-tw'>
                      <Markdown> 
                        {typeof items.content === 'string' ? items.content : ''}
                      </Markdown>
                      </div>)}
                   </div>
              </div>
            )}
          </div>
        )
      }
    </div>
  )
}

export default CreationItems
