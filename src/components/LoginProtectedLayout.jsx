import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function LoginProtectedLayout() {
    const isLoggedIn=localStorage.getItem("loginCredentials")

    if(isLoggedIn){
        return <Navigate to="/"/>
    }
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default LoginProtectedLayout