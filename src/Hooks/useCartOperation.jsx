import { axiosAPI } from "./useAxiosAPI"

function useCartOperation(){
    async function addToCart(data){
        const response = await axiosAPI.post("/cart", data);
        return response;
    }
    async function deleteFromCart(cardData){
      const response = await axiosAPI.delete(`/cart/${cardData._id}`);
      console.log(response);
      return response;
    }
  return {
    addToCart,
    deleteFromCart
  }
}

export default useCartOperation