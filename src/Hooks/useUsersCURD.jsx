import useAxiosSecure from "./useAxiosSecure"

function useUsersCURD(){
    const axiosSecure = useAxiosSecure()

async function allUsers(){
    const response = await axiosSecure.get("/users",
      {
        // withCredentials:true,
      headers:{
        Authorization:`Bearer ${localStorage.getItem("ClientToken")}`
      }
    }
  );
  const token = document.cookie;
  console.log(token)
    return response;
}
    
async function addUser(data){
    const response = await axiosSecure.post("/users", data);
    alert(response?.data?.message);
    return response;
}

async function deleteUser(id){
    const response = await axiosSecure.delete(`/users/${id}`);
    return response;
}
async function patchUser(id){
  console.log(id)
    const response = await axiosSecure.patch(`/users/admin/${id}`);
    return response;
}


  return {
    allUsers,
    addUser,
    deleteUser,
    patchUser
  }
}

export default useUsersCURD