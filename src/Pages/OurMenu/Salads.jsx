import { Link } from "react-router-dom";
import CommonCard from "../../Components/CommonCard";
import HeadingBanner from "../../Components/HeadingBanner/HeadingBanner";
import useCategoryCuisines from "../../Hooks/useCategoryCuisines";
import salads from "../../assets/menu/salad-bg.jpg"

const sal = {
  heading: "Salads",
  bannerImage: salads,
  description:
    'Experience freshness with our vibrant salads, bursting with crisp greens, juicy fruits, and flavorful dressings. Perfectly balanced and nutrient-rich, they’re a guilt-free delight for health-conscious food lovers.',
};

function Salads(){
  const { data, isError, isLoading, error } = useCategoryCuisines("salad");

  if (isLoading) {
    return (
      <p className='text-center text-5xl text-green-500 font-semibold italic'>
        Loading . . .
      </p>
    );
  }

  if (isError) {
    return (
      <p className='text-center text-5xl text-red-500 font-semibold italic'>
        {error.message}
      </p>
    );
  }
  return (
    <>
      <section>
        <HeadingBanner bannerData={sal} />
      </section>
      <section>
        <>
          <section className='grid lg:grid-cols-2 grid-cols-1 gap-4 lg:w-10/12 w-11/12 mx-auto my-10'>
            {data.data?.map((eachCard) => (
              <CommonCard key={eachCard._id} cardData={eachCard} />
            ))}
          </section>
          <section className='mx-auto text-center my-8'>
            <Link
              to='/menu'
              className='uppercase text-xl font-light font-cin px-5 py-2 border-b-2'>
              Order Now
            </Link>
          </section>
        </>
      </section>
    </>
  );
}

export default Salads;
