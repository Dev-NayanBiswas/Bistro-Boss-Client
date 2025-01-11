import { Link } from "react-router-dom";
import dessert from "../../assets/menu/dessert-bg.jpeg";
import CommonCard from "../../Components/CommonCard";
import HeadingBanner from "../../Components/HeadingBanner/HeadingBanner";
import useCategoryCuisines from "../../Hooks/useCategoryCuisines";
const desserts = {
  heading: "Desserts",
  bannerImage: dessert,
  description:
    "Indulge in our heavenly desserts, crafted with love and premium ingredients. From rich chocolate cakes to velvety cheesecakes, each bite promises pure bliss. Satisfy your sweet cravings today!",
};

function Dessert(){
  const { data, isError, isLoading, error } = useCategoryCuisines("dessert");

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
        <HeadingBanner bannerData={desserts} />
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

export default Dessert;
