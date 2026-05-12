import React from 'react'
import { navItems } from '../data/navData'
import { Link, Navigate } from 'react-router-dom'

function Navbar() {
  return (
    <div className='h-16 bg-gradient-to-r from-slate-950 via-cyan-900 to-slate-900 flex text-white justify-between items-center px-12 shadow-2xl border-b border-cyan-700'>
       
        <div className='flex items-center gap-8'>
          {navItems.map((item)=>{
              return (
                <Link
                  to={item.route}
                  className='text-[17px] font-semibold tracking-wide hover:text-cyan-300 transition-all duration-300 hover:scale-110 relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-300 hover:after:w-full after:transition-all after:duration-300'
                >
                  {item.label}
                </Link>
              )
          })}
        </div>

        <button
          type="button"
          onClick={()=>{
            localStorage.clear()
            return <Navigate to="/login"/>
          }}
          className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold h-10 w-24 rounded-xl shadow-lg hover:shadow-red-500/40 transition-all duration-300 hover:scale-105 border border-red-300"
        >
          LogOut
        </button>
    </div>
  )
}

export default Navbar