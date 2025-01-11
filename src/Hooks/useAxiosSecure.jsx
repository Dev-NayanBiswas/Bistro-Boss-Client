import axios from "axios"
import { useContext } from "react"
import { AuthContext } from "../AllContext/AuthContext/AuthProvider"

const axiosSecure = axios.create({
    baseURL:'http://localhost:8000'
})


function useAxiosSecure(){
  const {signOutHandler} = useContext(AuthContext);
  
  axiosSecure.interceptors.request.use((config)=>{
    const clientToken = localStorage.getItem("ClientToken")
    config.headers.Authorization = `Bearer ${clientToken}`
    // config.withCredentials = true
    return config;
  },(error)=>{
    return Promise.reject(error)
  }
)

  axiosSecure.interceptors.response.use((response)=>{
    return response;
  },
(error)=>{
  console.log("Error in Response", );
  if(error?.response?.status === 401 || error?.response?.status === 403){
    signOutHandler()
  }
  return Promise.reject(error)
})
  return axiosSecure
}

export default useAxiosSecure