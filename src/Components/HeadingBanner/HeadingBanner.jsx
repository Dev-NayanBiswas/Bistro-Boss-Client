import { ParallaxBanner } from "react-scroll-parallax"

function HeadingBanner({bannerData}){
    const {heading, bannerImage, description} = bannerData || {};
  return (
    <>
        <ParallaxBanner className=" w-full h-[80vh] relative z-[1]" layers={[
            { image: bannerImage, speed: -20 },
        ]}>
        <div className='hero-overlay inset-0 bg-opacity-60 absolute z-[2] w-full h-full top-0 bottom-0 right-0 left-0'></div>

        <div className='hero-content relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  w-full h-full text-neutral-content text-center z-[5]'>
        <div className='hero-content w-full h-full text-neutral-content flex justify-center items-center lg:p-20 p-7'>
          <div className='w-full p-3 h-full flex flex-col justify-center !text-white z-50 rounded-lg'>
            <div className="!p-2 bg-black/50 w-full h-full flex flex-col justify-center rounded-lg">
            <h1 className='mb-5 text-5xl font-bold font-cin'>{heading}</h1>
            <p className='mb-5 lg:w-8/12 w-full mx-auto capitalize'>
            {description}
            </p>
            </div>
          </div>
        </div>
          </div>
        </ParallaxBanner>
    </>
  )
}

export default HeadingBanner