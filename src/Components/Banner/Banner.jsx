import bannerImage from "../../assets/home/chef-service.jpg"

function Banner() {
  return (
    <>
      <div
        className='hero w-10/12 mx-auto min-h-[70vh]'
        style={{
          backgroundImage:
            `url(${bannerImage})`,
            backgroundPosition:"contain"
        }}>
        <div className='hero-overlay bg-black bg-opacity-60'></div>
        <div className='hero-content w-full h-full text-neutral-content text-center p-20'>
          <div className='w-full p-3 h-full flex flex-col justify-center bg-white/50 !text-gray-800/45 rounded-lg'>
            <div className="!p-3 bg-white/40 w-full h-full flex flex-col justify-center rounded-lg">
            <h1 className='mb-5 text-5xl font-bold font-cin'>Bistro Boss</h1>
            <p className='mb-5 w-8/12 mx-auto'>
            Our restaurant's main menu features a delightful variety of cuisines, including savory appetizers, hearty entrees, fresh salads, and indulgent desserts.
            </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
