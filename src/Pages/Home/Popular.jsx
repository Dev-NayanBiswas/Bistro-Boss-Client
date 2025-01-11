import CommonCard from "../../Components/CommonCard";
import Heading from "../../Components/Heading/Heading";
import useCategoryCuisines from "../../Hooks/useCategoryCuisines";


const fromMenu = {
    small:"Check it out",
    header:'FROM OUR MENU'
  }

function Popular() {
    const {data, isError, isLoading, error} = useCategoryCuisines('popular')
  
      if(isLoading){
        return <p className="text-center text-5xl text-green-500 font-semibold italic">Loading . . .</p>
      }
  
      if(isError){
        return <p className="text-center text-5xl text-red-500 font-semibold italic">{error.message}</p>
      }
  
  return (
    <>
    <Heading headingData={fromMenu}/>
        <section className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:w-10/12 w-full mx-auto">
      {
        data.data?.map((eachCard)=><CommonCard key={eachCard._id} cardData = {eachCard}/>)
      }
    </section>
    </>
  )
}

export default Popular