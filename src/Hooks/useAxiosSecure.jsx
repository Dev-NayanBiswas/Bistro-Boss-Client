import axios from "axios"

const axiosSecure = axios.create({
    baseURL:'http://localhost:8000'
})


function useAxiosSecure(){
    
  return axiosSecure
}

export default useAxiosSecure