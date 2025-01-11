import "./orderSwiper.css"
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import one from "../../assets/home/slide1.jpg"
import two from "../../assets/home/slide2.jpg"
import three from "../../assets/home/slide3.jpg"
import four from "../../assets/home/slide4.jpg"
import five from "../../assets/home/slide5.jpg"
import Heading from "../../Components/Heading/Heading";

const orderCategory = [
    {img:one, name:"Desserts"},
    {img:two, name:"Pizzas"},
    {img:three, name:"Salads"},
    {img:four, name:"Soups"},
    {img:five, name:"Soups"},
]

const orderData = {
  small:"From 11:00am to 10:00pm",
  header:'order online',
}

export default function OrderSwiper(){
  return (
    <>
    <Heading headingData={orderData}/>
      <Swiper
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
      className="w-10/12 mx-auto
        mySwiper my-10 "
      >
        {
            orderCategory.map(({img, name}, index)=><SwiperSlide key={index}>
                <figure className="w-full">
                    <img src={img} alt="image"  className="w-full h-full object-contain"/>
                        <p className="fixed uppercase font-cin bottom-0 p-2 w-full text-center text-2xl text-white">{name}</p>
                </figure>
            </SwiperSlide>)
        }
      </Swiper>
    </>
  );
}
