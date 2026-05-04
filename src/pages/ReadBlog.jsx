import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RouteFallbackPage from './RouteFallbackPage'
import axios from 'axios'

function ReadBlog() {
    const{id}=useParams()
    const [blog,setBlog]=useState({})

    async function getBlogFromId(){
        const localStorageData=JSON.parse(localStorage.getItem("loginCredentials"))
        const token=localStorageData.token

        try{
            const apiData=await axios.get(`http://localhost:4000/getBlogById/${id}`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            setBlog(apiData.data.blog)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getBlogFromId()
    },[])

  return (
    <div className='mt-5'>
        {blog?<div className='flex flex-col gap-5'>
            <h1 className='text-3xl'>{blog.title}</h1>
            <h2 className='text-xl'>{blog.description}</h2>
            <p>{blog.body}</p>
            <div className='flex justify-end mr-7'>
                <h2 className='text-xl'>Written By:   {blog.author}</h2>
            </div>
        </div>:<RouteFallbackPage/>}
    </div>
  )
}

export default ReadBlog