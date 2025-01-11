import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import useUsersCURD from "./useUsersCURD";

function useUsersMutations(){
    const queryClient = useQueryClient();
    const {allUsers,addUser,deleteUser,patchUser} = useUsersCURD()
    const queryUsers = useQuery({
        queryKey:["users"],
        queryFn:()=>allUsers()
    })

    const addUserMutation = useMutation({
        mutationKey:["users"],
        mutationFn:(data)=>addUser(data),
        onSuccess:()=>{
            queryClient.invalidateQueries("users"),
            alert("User Added Successfully")
        },
        onError:()=>{
            alert("Error in adding new User")
        }
    })

    const deleteUserMutation = useMutation({
        mutationKey:["users"],
        mutationFn:(id)=>deleteUser(id),
        onSuccess:()=>{
            queryClient.invalidateQueries("users"),
            alert("User Deleted Successfully")
        },
        onError:()=>{
            alert("Error in removing User")
        }
    })
    const patchUserMutation = useMutation({
        mutationKey:["users"],
        mutationFn:(id)=>patchUser(id),
        onSuccess:()=>{
            queryClient.invalidateQueries("users"),
            console.log("User's Role Updated Successfully")
        },
        onError:()=>{
            alert("Error in Updating User Role")
        }
    })
  return {
    patchUserMutation,
    queryUsers,
    addUserMutation,
    deleteUserMutation,
  }
}

export default useUsersMutations