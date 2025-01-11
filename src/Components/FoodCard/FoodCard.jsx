import { useContext } from "react";
import useCartOperation from "../../Hooks/useCartOperation";
import { AuthContext } from "../../AllContext/AuthContext/AuthProvider";
import {useLocation, useNavigate } from "react-router-dom";
import { autoCloseAlert } from "../../Utilities/sweetAlert";
import useCartMutations from "../../Hooks/useCartMutations";

const FoodCard =({cardData})=>{
  const {userInfo} = useContext(AuthContext);
  const {postCartMutation} = useCartMutations()
  const redirect = useNavigate();
  const location = useLocation()
    const {recipe,price,name,image,category,_id} = cardData || {}

    async function handleAddCart(){
      if(!userInfo?.email){
        redirect("/login", {state:location.pathname})
      }else{
        const finalData = {
          email:userInfo?.email,
          cuisineID:_id,
          name,
          image,
          price
        }
        postCartMutation.mutate(finalData);
        // if(result.data.result.insertedId){
        //   autoCloseAlert('success', `${name} added to Cart`)
        // };
      }
      

    }
  return (
    <div className="max-w-xs group mx-auto bg-white hover:shadow-lg transition-all duration-500 overflow-hidden relative">
      <img
        src={image}
        alt="Caeser Salad"
        className="w-full h-48 object-cover"
      />
      <span className="bg-gray-700/45 group-hover:bg-gray-800 group-hover:-translate-x-64 transition-width origin-right absolute top-3 right-0 font-cin px-4 py-1 rounded-s-full rounded-e-full text-white font-normal text-lg transition-all duration-500">$ {price}</span>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800 font-cin">{name}</h3>
        <p className="text-sm text-gray-600 mt-2">
          {recipe}
        </p>
        <section className="w-8/12 mx-auto">
        <button
        onClick={handleAddCart}
          className="mt-4 w-full h-full transition-all duration-500 bg-gray-200 group-hover:bg-gray-800 text-[#BB8506] text-sm font-medium py-2 shadow-md hover:shadow-[#BB8506]/45 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1"
        >
          ADD TO CART
        </button>
        </section>
      </div>
    </div>
  );
};

export default FoodCard;
