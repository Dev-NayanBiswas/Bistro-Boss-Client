import { Link } from "react-router-dom"
import CommonCard from "../../Components/CommonCard"
import Heading from "../../Components/Heading/Heading"
import useCategoryCuisines from "../../Hooks/useCategoryCuisines"



const todaysMenu = {
    small:"Don't Miss",
    header:"TODAY'S OFFER"
  }

function TodayOffer() {
    const {data, isError, isLoading, error} = useCategoryCuisines('offered')
  
    if(isLoading){
      return <p className="text-center text-5xl text-green-500 font-semibold italic">Loading . . .</p>
    }

    if(isError){
      return <p className="text-center text-5xl text-red-500 font-semibold italic">{error.message}</p>
    }

return (
  <>
  <Heading headingData={todaysMenu}/>
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:w-10/12 w-11/12 mx-auto">
    {
      data.data?.map((eachCard)=><CommonCard key={eachCard._id} cardData = {eachCard}/>)
    }
  </section>
  <section className="mx-auto text-center my-8">
  <Link to="/menu" className="uppercase text-xl font-light font-cin px-5 py-2 border-b-2">Order Now</Link>
  </section>
  </>
)
}

export default TodayOffer