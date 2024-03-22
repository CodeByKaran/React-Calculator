import React from 'react'

export default function Screen({value,answer}) {

  return (
    <div className="relative">
    <textarea className={`bg-gradient-to-tr from-indigo-100 to-blue-200 w-full h-15 min-h-15 max-h-20 rounded-lg  outline-none border-none placeholder:text-slate-500 font-bold ${value.length>14?'text-md p-3':'text-2xl'} text-right p-2 shadow-lg shadow-slate-900 overflow-scroll`} readOnly placeholder="00" value={value}>
    </textarea>
    <span className="absolute bottom-3 left-0 text-end w-full px-2 z-20  font-extrabold text-3xl pt-2 text-emerald-600">
    {answer}
    </span>
  </div>
  )
} 