import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import api from '../api'

function Home() {
  const [blogsData,setBlogsData]=useState([])
  
  async function blogsApiData(){
    try{
      const apiData=await api.get("/")
      setBlogsData(apiData.blogs)
    }catch(err){
      console.log(err)
    }
  }

  useEffect(()=>{
    blogsApiData()
  },[])
  
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 px-4 sm:px-8 lg:px-16 py-10 flex flex-wrap justify-center gap-8'>
      
      {blogsData?.map((blog)=>{
        return (
          <div
            key={blog.id}
            className="w-full sm:w-[90%] md:w-[45%] xl:w-[30%] bg-white/10 backdrop-blur-lg border border-cyan-700/40 rounded-3xl p-6 shadow-xl hover:shadow-cyan-500/30 transition-all duration-500 hover:-translate-y-2 cursor-pointer group"
          >
            
            <h5 className="mb-4 text-2xl font-bold tracking-wide text-cyan-300 leading-8 group-hover:text-white transition-all duration-300">
              {blog.title}
            </h5>

            <p className="text-gray-300 mb-8 leading-7 text-[15px]">
              {blog.description}
            </p>

            <div className='flex items-center justify-between mt-auto'>
              
              <p className="text-cyan-200 font-medium text-sm tracking-wide">
                {blog.author}
              </p>

              <Link
                to={`/read-blog/${blog.id}`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105"
              >
                Read more

                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </Link>

            </div>
          </div>
        ) 
      })}
      
    </div>
  )
}

export default Home