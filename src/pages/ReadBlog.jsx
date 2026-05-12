import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RouteFallbackPage from './RouteFallbackPage'
import axios from 'axios'
import api from '../api'

function ReadBlog() {

    const{id}=useParams()
    const [blog,setBlog]=useState({})

    async function getBlogFromId(){

        try{
            const apiData=await api.get(`/getBlogById/${id}`)
            console.log(apiData.blog)
            setBlog(apiData.blog)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getBlogFromId()
    },[])

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 px-4 sm:px-8 lg:px-20 py-10'>
        
        {blog ?
        
        <div className='max-w-5xl mx-auto bg-slate-900 border border-cyan-800 rounded-3xl shadow-2xl shadow-cyan-500/10 px-6 sm:px-10 lg:px-14 py-8 sm:py-10'>
            
            <div className='flex flex-col gap-6'>
                
                <div className='border-b border-cyan-800 pb-6'>
                    <h1 className='text-3xl sm:text-4xl font-bold text-cyan-300 leading-tight tracking-wide'>
                        {blog.title}
                    </h1>

                    <h2 className='text-gray-300 text-lg sm:text-xl mt-4 leading-8 font-light'>
                        {blog.description}
                    </h2>
                </div>

                <div>
                    <p className='text-gray-200 text-[16px] sm:text-[17px] leading-8 tracking-wide whitespace-pre-line'>
                        {blog.body}
                    </p>
                </div>

                <div className='flex justify-end pt-6 border-t border-cyan-800'>
                    <h2 className='text-cyan-300 text-base sm:text-lg font-semibold tracking-wide'>
                        Written By : {blog.author}
                    </h2>
                </div>

            </div>
        </div>

        :
        
        <RouteFallbackPage/>
        
        }
    </div>
  )
}

export default ReadBlog