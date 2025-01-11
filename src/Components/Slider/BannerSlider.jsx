import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./banner.css"
import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/home/01.jpg";
import image2 from "../../assets/home/02.jpg";
import image3 from "../../assets/home/03.png";
import image4 from "../../assets/home/04.jpg";
import image5 from "../../assets/home/05.png";
import image6 from "../../assets/home/06.png";

const images = [
  { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
  { image: image5 },
  { image: image6 },
];

function BannerSlider() {
  return (
    <>
      <section className=''>
        <Carousel
          autoPlay={true}
          stopOnHover={true}
          showThumbs={true}
          className=''>
          {images?.map(({ image }, index) => (
            <div key={index} className=''>
              <img className='' src={image} />
            </div>
          ))}
        </Carousel>
      </section>
    </>
  );
}

export default BannerSlider;
