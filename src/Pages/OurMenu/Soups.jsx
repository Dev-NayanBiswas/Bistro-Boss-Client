import { Link } from "react-router-dom";
import CommonCard from "../../Components/CommonCard";
import HeadingBanner from "../../Components/HeadingBanner/HeadingBanner";
import useCategoryCuisines from "../../Hooks/useCategoryCuisines";
import salads from "../../assets/menu/soup-bg.jpg"

const sal = {
  heading: "Soups",
  bannerImage: salads,
  description:'Warm your soul with our comforting soups, made fresh daily with wholesome ingredients. From creamy bisques to hearty broths, each bowl is a nourishing embrace of flavor and aroma.'
};

function Soups(){
  const { data, isError, isLoading, error } = useCategoryCuisines("soup");

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

export default Soups;
