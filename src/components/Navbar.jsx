import React from 'react'
import { navItems } from '../data/navData'
import { Link, Navigate } from 'react-router-dom'

function Navbar() {
  return (
    <div className='h-10 bg-cyan-950 flex text-white justify-between items-center px-10'>
        {navItems.map((item)=>{
            return <Link to={item.route}>{item.label}</Link>
        })}
        <button type="button" onClick={()=>{localStorage.clear()
          return <Navigate to="/login"/>
        }} className="text-white bg-red-500 box-border border border-black hover:bg-red-700 focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-base text-sm focus:outline-none h-8 w-16 rounded-lg ">LogOut</button>
    </div>
  )
}

export default Navbar