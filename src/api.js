import axios from "axios";
import { toast } from "react-toastify";

const api = axios.create({baseURL:"http://localhost:4000",withCredentials:true})

api.interceptors.request.use((req)=>{

    const accessToken=localStorage.getItem("accessToken")
    console.log(accessToken)
    if(accessToken){
        req.headers.Authorization=`Bearer ${accessToken}`
    }

    return req
})

api.interceptors.response.use((res)=>{
    if(res.status==400){
        toast.error(`${res.data.message}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    

    return res.data
})

export default api