import Banner from "../../Components/Banner/Banner"
import BannerSlider from "../../Components/Slider/BannerSlider"
import OrderSwiper from "./OrderSwiper"
import { Link } from "react-router-dom"
import Popular from "./Popular"
import ChefsRecommends from "./ChefsRecommends"
import FromOurMenuBanner from "./FromOurMenu"
import Testimonial from "./Testimonial"
import { Helmet } from "react-helmet-async"
import "./testimonial.css"
import sweetAlert from "../../Utilities/sweetAlert.js"






function Home(){

  return (
    <>
    <Helmet title="Home"/>
    <section className="flex justify-center items-center">
        <BannerSlider/>
    </section>
    <button onClick={()=>sweetAlert("question", "Successfully Signed in")}>Click</button>
    <section className="md:w-7/12 w-11/12 mx-auto min-h-[40vh]">
    
      <OrderSwiper/>
    </section>
    <section>
      <Banner/>
    </section>
    <section>
      <Popular/>
    </section>
    <section className="w-full h-full my-10 text-center">
    <Link to="/menu" className="uppercase text-xl font-light font-cin px-5 py-2 border-b-2">view full menu</Link>
    </section>
    <section className="w-10/12 mx-auto h-[15vh] flex justify-center items-center bg-black/75">
      <h1 className="text-3xl lowercase font-cin font-black text-white tracking-wider">Call Us: +88 0192345678910</h1>
    </section>
    <section className="w-10/12 mx-auto">
      <ChefsRecommends/>
    </section>
    <section className="my-20">
      <FromOurMenuBanner/>
    </section>
    <section>
      <Testimonial/>
    </section>
    </>
  )
}

export default Home