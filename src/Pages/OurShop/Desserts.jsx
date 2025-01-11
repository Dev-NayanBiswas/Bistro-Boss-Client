import FoodCard from "../../Components/FoodCard/FoodCard";
import useCategoryCuisines from "../../Hooks/useCategoryCuisines"

function Desserts(){
    const {data, isLoading, isError, error} = useCategoryCuisines("dessert");

    if(isLoading){
        return <p className="text-center text-5xl text-green-500 font-semibold italic">Loading . . .</p>
      }
  
      if(isError){
        return <p className="text-center text-5xl text-red-500 font-semibold italic">{error.message}</p>
      }
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-3 gap-2 my-10">
        {
            data.data?.map(cardData => <FoodCard key={cardData._id} cardData={cardData}/>)
        }
    </section>
  )
}

export default Desserts;