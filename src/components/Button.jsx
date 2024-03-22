import React from 'react'

export default function Button({value,HandleButtonsClick,spBtn}) {
  return (
  <button type="click" className={`bg-gradient-to-br from-indigo-200 ${spBtn&& 'via-slate-100'} to-blue-100 w-[22%] h-[4rem] rounded-md shadow-md text-2xl/[12px] font-semibold text-slate-700 z-10 m-1 hover:text-slate-900`} onClick={()=>HandleButtonsClick(value)}>
  {value}
  </button>
  )
}