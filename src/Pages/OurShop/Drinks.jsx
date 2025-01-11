import FoodCard from "../../Components/FoodCard/FoodCard";
import useCategoryCuisines from "../../Hooks/useCategoryCuisines"

function Drinks(){
    const {data, isLoading, isError, error} = useCategoryCuisines("drink");

    if(isLoading){
        return <p className="text-center text-5xl text-green-500 font-semibold italic">Loading . . .</p>
      }
  
      if(isError){
        return <p className="text-center text-5xl text-red-500 font-semibold italic">{error.message}</p>
      }
  return (
    <section>
        <section className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-3 gap-2 my-10">
        {
            data.data.length ? data.data?.map(cardData => <FoodCard key={cardData._id} cardData={cardData}/>) : ""
            
        }
    </section>
    {
        !data.data.length ? <section className="flex justify-center items-center h-screen">
        <h1 className="text-4xl text-red-500 font-semibold font-cin animate-pulse whitespace-nowrap text-center">Under Maintenance</h1>
    </section> : ""
    }
    </section>
  )
}

export default Drinks;