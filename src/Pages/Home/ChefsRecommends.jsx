import FoodCard from "../../Components/FoodCard/FoodCard"
import Heading from "../../Components/Heading/Heading"
import useCategoryCuisines from "../../Hooks/useCategoryCuisines"

const chefs = {
    small:"Should Try",
    header:'Chefs Recommends'
  }

function ChefsRecommends(){
  const {data, isError, isLoading, error} = useCategoryCuisines('offered')
  
  if(isLoading){
    return <p className="text-center text-5xl text-green-500 font-semibold italic">Loading . . .</p>
  }

  if(isError){
    return <p className="text-center text-5xl text-red-500 font-semibold italic">{error.message}</p>
  }

  return (
    <>
    <section>
    <Heading headingData={chefs}/>
        <section className="flex flex-wrap gap-3 justify-center items-center">
        {
            data?.data?.map((cardData)=><FoodCard key={cardData._id} cardData={cardData}/>)
        }
        </section>
    </section>
    </>
  )
}

export default ChefsRecommends