import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import api from '../api'

function Login() {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()

    async function formSubmit(e){
        e.preventDefault()
        
        try{
            const apiData=await axios.post("http://localhost:4000/login",{emailId:email,password})
            console.log(apiData)
            
            if(apiData.data.message=="ok"){
                localStorage.setItem("accessToken",apiData.data.accessToken)
                localStorage.setItem("refreshToken",apiData.data.refreshToken)
                localStorage.setItem("loginCredentials",JSON.stringify(apiData.data.userDetails))
            }
            return navigate("/")

        }catch(err){
            console.log(err)
        }

    }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 flex justify-center items-center px-4'>
        
        <div className='w-full max-w-md bg-slate-900 border border-cyan-800 rounded-3xl shadow-2xl shadow-cyan-500/10 px-8 py-10'>
            
            <div className='mb-8 text-center'>
                <h1 className='text-3xl font-bold text-cyan-300 tracking-wide'>
                    Welcome Back
                </h1>
                <p className='text-gray-400 mt-2 text-sm'>
                    Login to continue to your blog account
                </p>
            </div>

            <form className="space-y-6" onSubmit={formSubmit}>
                
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-cyan-200">
                        Email
                    </label>

                    <input
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        type="email"
                        id="email"
                        className="w-full bg-slate-800 border border-cyan-800 text-white text-sm rounded-xl px-4 py-3 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300 placeholder:text-gray-500"
                        placeholder="Enter your email"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-cyan-200">
                        Password
                    </label>

                    <input
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        type="password"
                        id="password"
                        className="w-full bg-slate-800 border border-cyan-800 text-white text-sm rounded-xl px-4 py-3 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30 transition-all duration-300 placeholder:text-gray-500"
                        placeholder="••••••••"
                        required
                    />
                </div>

                <input
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 rounded-xl cursor-pointer transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-cyan-500/30"
                    value="Login"
                />

                <p className="text-sm text-gray-400 text-center">
                    Don’t have an account yet?{" "}
                    <Link
                        to='/signup'
                        className="text-cyan-300 hover:text-cyan-200 font-medium hover:underline"
                    >
                        Sign up
                    </Link>
                </p>
            </form>
        </div>
    </div>
    
  )
}

export default Login