import { useQuery } from '@tanstack/react-query';
import Heading from '../../Components/Heading/Heading'
import illustration from '../../assets/icon/quote.png'
import { FaStar } from "react-icons/fa";
import axios from 'axios';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay} from 'swiper/modules';
import './testimonial.css'

import 'swiper/css';

const fromMenu = {
    small:"What our Client Say",
    header:'testimonial'
  }

function Testimonial(){
    const {data, isLoading, isFetching, isError, error} = useQuery({
        queryKey:['Reviews'],
        queryFn:async()=>await axios.get('/reviews')
    })
    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(isError){
        return <h1>{error.message}...</h1>
    }

  return (
    <>
    <section>
        <Heading headingData={fromMenu}/>
    </section>
    <section>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {data?.data.map(({name, details,rating,_id})=><SwiperSlide key={_id}>
        <section className="relative w-8/12 mx-auto h-[40vh] flex justify-center items-center">
            <div className="h-[10vh]  absolute left-0 top-0  rotate-180">
            <img className="h-full object-contain" src={illustration} alt="" />
            </div>
            <section className="text-center space-y-7 h-[20vh]">
            <section className="flex gap-1 justify-center items-center relative w-[200px] mx-auto">
                {
                    Array(rating).fill(null).map((_,index)=><FaStar size={40} fill='#eda618' className={`absolute`} style={{
                        left:index * 40
                    }} key={index}/>)
                }
                {
                    Array(5).fill(null).map((_,index)=><FaStar size={40} fill='#667980' className="" key={index}/>)
                }
            </section>
            <p>{details}</p>
            <p className="font-serif text-[#eda618] text-3xl font-semibold">{name}</p>
            </section>
            <div className="h-[10vh]  absolute bottom-0 right-0">
            <img className="h-full object-contain" src={illustration} alt="" />
            </div>
        </section>
        </SwiperSlide>)}
      </Swiper>
    </section>
    </>
  )
}

export default Testimonial