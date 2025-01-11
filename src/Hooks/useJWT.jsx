import { axiosAPI } from "./useAxiosAPI";

function useJWT(){

    async function createToken(data){
        const response = await axiosAPI.post("/registration/login", data,{
          withCredentials:true
        });
        if(response?.data?.token){
          console.log("Token Generated",response)
          // sessionStorage.setItem("ClientToken",response?.data?.token);
          localStorage.setItem("ClientToken",response?.data?.token);
        }
    }
    async function removeToken(){
        const response = await axiosAPI.post("/registration/logout", {},{
          withCredentials:true
        });
        // sessionStorage.removeItem("ClientToken");
        localStorage.removeItem("ClientToken");
        console.log("remove",response);
    }


  return {
    createToken,
    removeToken
  }
}

export default useJWT