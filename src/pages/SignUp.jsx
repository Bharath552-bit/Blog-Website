import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import api from '../api'


function SignUp() {
  const [emailId,setEmailId] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")
  const navigate=useNavigate()

  async function accountCreation(e){
    e.preventDefault()

    if(password!==confirmPassword){
        toast.error('Passwords should match', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        return
    }

    try{
        const apiData=await axios.post("http://localhost:4000/addUser",{emailId,password})
        navigate("/login")
    }catch(err){
        console.log(err)
    }
    
  }

  return (
    <div>
      <section className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 flex items-center justify-center px-4 py-10">
        
        <div className="w-full max-w-md bg-slate-900 border border-cyan-800 rounded-3xl shadow-2xl shadow-cyan-500/10">
          
          <div className="p-8 sm:p-10">
            
              <div className='mb-8 text-center'>
                  <h1 className="text-3xl font-bold tracking-wide text-cyan-300">
                      Create Account
                  </h1>

                  <p className='text-gray-400 text-sm mt-2'>
                      Join the blog community today
                  </p>
              </div>

              <form className="space-y-5" action="#" onSubmit={accountCreation}>
                  
                  <div>
                      <label htmlFor="email" className="block mb-2 text-sm font-medium text-cyan-200">
                          Your email
                      </label>

                      <input
                        type="email"
                        value={emailId}
                        onChange={(e)=>setEmailId(e.target.value)}
                        name="email"
                        id="email"
                        className="w-full bg-slate-800 border border-cyan-800 text-white text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all duration-300 placeholder:text-gray-500"
                        placeholder="name@company.com"
                        required=""
                      />
                  </div>

                  <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-cyan-200">
                          Password
                      </label>

                      <input
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="w-full bg-slate-800 border border-cyan-800 text-white text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all duration-300 placeholder:text-gray-500"
                        required=""
                      />
                  </div>

                  <div>
                      <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-cyan-200">
                          Confirm password
                      </label>

                      <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                        name="confirm-password"
                        id="confirm-password"
                        placeholder="••••••••"
                        className="w-full bg-slate-800 border border-cyan-800 text-white text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all duration-300 placeholder:text-gray-500"
                        required=""
                      />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-cyan-500/30"
                  >
                    Create an account
                  </button>

                  <p className="text-sm text-center text-gray-400">
                      Already have an account?{" "}
                      <Link
                        to="/login"
                        className="text-cyan-300 hover:text-cyan-200 font-medium hover:underline"
                      >
                        Login here
                      </Link>
                  </p>
              </form>

              <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
          </div>
      </div>
    </section>
    </div>
  )
}

export default SignUp