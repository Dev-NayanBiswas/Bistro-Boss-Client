import { useContext } from "react";
import { AuthContext } from "../AllContext/AuthContext/AuthProvider";
import { axiosAPI } from "./useAxiosAPI";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useCartOperation from "./useCartOperation";
import sweetAlert, { autoCloseAlert } from "../Utilities/sweetAlert";

function useCartMutations(){
    const {addToCart} = useCartOperation()
    const {userInfo} = useContext(AuthContext);
    const email = userInfo?.email;
    const queryClient = useQueryClient();


    async function fetchingCartData(email){
         const response = await axiosAPI.get(`/cart?email=${email}`);
        //  console.log(response.data.result)
        return response.data.result
    }

    const {data, isLoading, isFetching, isError, error} = useQuery({
        queryKey:["cartData", email],
        queryFn:()=>fetchingCartData(email)
    })

    const postCartMutation = useMutation({
        mutationKey:["cartData"],
        mutationFn:(data)=>addToCart(data),
        onSuccess:()=>{
            queryClient.invalidateQueries("cartData")
            autoCloseAlert('success', `Successfully added to Cart`)
        },
        onError:()=>autoCloseAlert("error", "Error in Add to Cart")
    })

    // isLoading || console.log(data)


  return {
    data,
    isLoading,
    isFetching,
    isError,
    error,
    postCartMutation,
  }
}

export default useCartMutations