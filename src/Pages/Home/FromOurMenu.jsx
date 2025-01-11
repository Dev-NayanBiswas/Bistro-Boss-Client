import { ParallaxBanner} from "react-scroll-parallax";
import bannerImage from "../../assets/home/featured.jpg";

function FromOurMenuBanner() {
  return <>
  <ParallaxBanner className='hero w-10/12 mx-auto min-h-[70vh] relative'
  layers={[
    { image: bannerImage, speed: -20 },
    { image: bannerImage, speed: -10 },
  ]}
  >
  <div className='hero-overlay bg-black bg-opacity-60 absolute z-10 w-full h-full top-0 bottom-0 right-0 left-0'></div>
  <div className='hero-content z-30 w-full h-full text-neutral-content text-center p-20 flex flex-col'>
    <section className='text-center mx-auto w-full'>
      <section className='my-10 mx-auto w-full'>
        <p className='text-center text-[#D99904] lowercase font-normal tracking-wide italic font-cin'>
          --- Check it Out ---
        </p>
        <div className='border-b-[2px] w-5/12 mx-auto border-opacity-45' />
        <h1 className='text-center uppercase text-3xl font-semibold font-cin text-inherit my-3'>
          From Our Menu
        </h1>
        <div className='border-b-[2px] w-5/12 mx-auto border-opacity-45' />
      </section>
    </section>
    <div className='w-full p-3 h-full flex flex-col justify-center rounded-lg'>
      <div className='!p-3 w-full h-full flex items-center justify-center rounded-lg gap-3'>
        <div className='w-8/12 mx-auto'>
          <img className='object-cover' src={bannerImage} alt='' />
        </div>
        <div className='text-left'>
          <p>
            {new Date().toLocaleDateString("en-us", {
              month: "short",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
          <h1 className='mb-5 text-xl font-bold font-cin'>Where can I Get?</h1>
          <p className='mb-5'>
            Our restaurant's main menu features a delightful variety of
            cuisines, including savory appetizers, hearty entrees, fresh salads,
            and indulgent desserts.
          </p>
          <button className='mt-4 transition-all duration-500 bg-transparent hover:bg-black text-[#BB8506] text-sm font-medium px-8 py-2 shadow-md hover:shadow-[#BB8506]/45 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-1'>
            Read More
          </button>
        </div>
      </div>
    </div>
  </div>
  </ParallaxBanner>
  </>;
}

export default FromOurMenuBanner;
