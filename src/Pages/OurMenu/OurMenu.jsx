import { Helmet } from "react-helmet-async"
import HeadingBanner from "../../Components/HeadingBanner/HeadingBanner"
import banner  from '../../assets/menu/banner3.jpg'
import TodayOffer from "./TodayOffer"
import Dessert from "./Dessert"
import Pizza from "./Pizza"
import Salads from "./Salads"
import Soups from "./Soups"




const header = {
  heading:"Our Menu", 
  bannerImage:banner, 
  description:'Would you Like to try a Dish'

}

function OurMenu() {
  return (
    <>
    <Helmet title="Menu"/>
    <section>
      <section>
        <HeadingBanner bannerData={header}/>
      </section>
      <section>
        <TodayOffer/>
      </section>
      <section>
        <Dessert/>
      </section>
      <section>
        <Pizza/>
      </section>
      <section>
        <Salads/>
      </section>
      <section>
        <Soups/>
      </section>
    </section>
    </>
  )
}

export default OurMenu