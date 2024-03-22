import React from 'react'

export default function Message({message}) {
  return (
   <div className="w-5/12 rounded-full bg-blue-300/10 text-sm font-medium text-white p-2 fixed animate-comeup bottom-16 left-[30%] transition-all duration-300">
    {message}
  </div>
  )
}