import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

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

        await axios.post("http://localhost:4000/newBlog",{newBlog},{
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
    <div className='flex items-center justify-center h-[90vh]'>
        <div className=' h-[70vh] pt-5  bg-cyan-200 w-[35vw] rounded-xl shadow-xl '>
        <form className="max-w-sm mx-auto space-y-4 w-screen" onSubmit={creatingBlog}>
          <div>
              <label for="visitors" className="block mb-2.5 text-sm font-medium text-heading">Author</label>
              <input type="text" id="visitors" className="bg-neutral-secondary-medium rounded-lg border border-gray-500 text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="" required />
          </div>
          <div>
              <label for="visitors" className="block mb-2.5 text-sm font-medium text-heading">Title</label>
              <input type="text" id="visitors" className="bg-neutral-secondary-medium rounded-lg border border-gray-500 text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="" required />
          </div>
          <div>
              <label for="visitors" className="block mb-2.5 text-sm font-medium text-heading">Description</label>
              <input type="text" id="visitors" className="bg-neutral-secondary-medium rounded-lg border border-gray-500 text-heading text-base rounded-base focus:ring-brand focus:border-brand block w-full px-3.5 py-3 shadow-xs placeholder:text-body" placeholder="" required />
          </div>
          <div>
              <label for="visitors" className="block mb-2.5 text-sm font-medium text-heading">Body</label>
              <textarea id="visitors" className="bg-neutral-secondary-medium rounded-lg border border-gray-500 text-heading text-base rounded-base focus:ring-brand focus:border-brand block w-full px-4 py-3.5 shadow-xs placeholder:text-body" placeholder="" required ></textarea>
          </div>
          <input type="submit" className="text-body text-white rounded-xl bg-gray-700 box-border border border-default-medium hover:bg-gray-900 cursor-pointer hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" value="Submit"></input>
        </form>
        </div>
    </div>
  )
}

export default NewBlog