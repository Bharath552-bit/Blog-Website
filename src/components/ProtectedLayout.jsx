import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedLayout() {

    const isloggedIn=localStorage.getItem("loginCredentials")

    if(!isloggedIn){
        return <Navigate to="/login"/>
    }
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default ProtectedLayout