import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

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
                localStorage.setItem("loginCredentials",JSON.stringify(apiData.data.userDetails))
            }
            if(apiData.status==400){
                toast.error(`${}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                });
            }
            return navigate("/")

        }catch(err){
            console.log(err)
        }

    }
  return (
    <div className='flex justify-center items-center h-[90vh]'>
        <div className='h-[50vh] bg-cyan-200 w-[35vw] pt-10 rounded-xl shadow-xl '>
            <form class="max-w-sm mx-auto" onSubmit={formSubmit}>
                <div class="mb-5">
                    <label for="email" className="block mb-2.5 text-sm font-medium text-heading">Email</label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id="email" className="bg-neutral-secondary-medium rounded-lg border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" required />
                </div>
                <div class="mb-5">
                    <label for="password" className="block mb-2.5 text-sm font-medium text-heading">Password</label>
                    <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id="password" className="bg-neutral-secondary-medium rounded-lg border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" required />
                </div>
                <input type="submit" className="text-body text-white rounded-xl bg-gray-700 box-border border border-black hover:bg-gray-900 cursor-pointer hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" value="Submit"></input>
                <p className="text-sm font-light text-black">
                    Don’t have an account yet? <Link to='/signup' class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                </p>
            </form>
            
        </div>
    </div>
    
  )
}

export default Login