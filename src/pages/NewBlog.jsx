import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import api from '../api'

function NewBlog() {

    let newBlog={
        author:"",
        title:"",
        description:"",
        body:""
    }

    const navigate=useNavigate()

    async function creatingBlog(e){
        e.preventDefault()

        newBlog.author=e.target[0].value
        newBlog.title=e.target[1].value
        newBlog.description=e.target[2].value
        newBlog.body=e.target[3].value

        const localStorageData=JSON.parse(localStorage.getItem("loginCredentials"))
        const token=localStorageData.token

        await api.post("/newBlog",{newBlog},{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })

        newBlog={
            author:"",
            title:"",
            description:"",
            body:""
        }
        
        navigate("/")

    }

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 flex items-center justify-center px-4 py-10'>
        
        <div className='w-full max-w-2xl bg-slate-900 border border-cyan-800 rounded-3xl shadow-2xl shadow-cyan-500/10 px-6 sm:px-10 py-8'>
            
            <div className='mb-8 text-center'>
                <h1 className='text-3xl font-bold tracking-wide text-cyan-300'>
                    Create New Blog
                </h1>

                <p className='text-gray-400 text-sm mt-2'>
                    Share your thoughts with the community
                </p>
            </div>

            <form className="space-y-5 w-full" onSubmit={creatingBlog}>
              
              <div>
                  <label
                    htmlFor="visitors"
                    className="block mb-2 text-sm font-medium text-cyan-200"
                  >
                    Author
                  </label>

                  <input
                    type="text"
                    id="visitors"
                    className="w-full bg-slate-800 border border-cyan-800 text-white text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all duration-300"
                    placeholder="Enter author name"
                    required
                  />
              </div>

              <div>
                  <label
                    htmlFor="visitors"
                    className="block mb-2 text-sm font-medium text-cyan-200"
                  >
                    Title
                  </label>

                  <input
                    type="text"
                    id="visitors"
                    className="w-full bg-slate-800 border border-cyan-800 text-white text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all duration-300"
                    placeholder="Enter blog title"
                    required
                  />
              </div>

              <div>
                  <label
                    htmlFor="visitors"
                    className="block mb-2 text-sm font-medium text-cyan-200"
                  >
                    Description
                  </label>

                  <input
                    type="text"
                    id="visitors"
                    className="w-full bg-slate-800 border border-cyan-800 text-white text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all duration-300"
                    placeholder="Short description"
                    required
                  />
              </div>

              <div>
                  <label
                    htmlFor="visitors"
                    className="block mb-2 text-sm font-medium text-cyan-200"
                  >
                    Body
                  </label>

                  <textarea
                    id="visitors"
                    className="w-full min-h-[180px] resize-none bg-slate-800 border border-cyan-800 text-white text-sm rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-400 transition-all duration-300"
                    placeholder="Write your blog content here..."
                    required
                  ></textarea>
              </div>

              <input
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-3 rounded-xl cursor-pointer transition-all duration-300 hover:scale-[1.01] shadow-lg hover:shadow-cyan-500/30"
                value="Publish Blog"
              ></input>

            </form>
        </div>
    </div>
  )
}

export default NewBlog