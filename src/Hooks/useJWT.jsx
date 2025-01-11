import { axiosAPI } from "./useAxiosAPI";

function useJWT(){

    async function createToken(data){
        const response = await axiosAPI.post("/registration/login", data); 
        if(response?.data?.token){
          console.log("Token Saved on LocalStorage",response)
          // sessionStorage.setItem("ClientToken",response?.data?.token);
          // {withCredentials:true}
          localStorage.setItem("ClientToken",response?.data?.token);
        }
    }
    async function removeToken(){
        // const response = await axiosAPI.post("/registration/logout", {},{
        //   withCredentials:true
        // });
        // sessionStorage.removeItem("ClientToken");
        localStorage.removeItem("ClientToken");
        console.log("Token Removed");
    }


  return {
    createToken,
    removeToken
  }
}

export default useJWT