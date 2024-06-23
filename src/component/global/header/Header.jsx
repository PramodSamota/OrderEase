import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../searchbar/Search'
function Header() {
  return (
    <div className='w-full h-[10%] flex space-x-7 m-5 p-3 bg-slate-300 justify-evenly items-center'>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <Search/>
      </div>
      <div className='flex justify-center space-x-3  '>
        Login
      </div>
    </div>
  )
}

export default Header