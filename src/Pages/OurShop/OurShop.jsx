import { Helmet } from "react-helmet-async"
import HeadingBanner from "../../Components/HeadingBanner/HeadingBanner"
import ourShop  from  "../../assets/shop/banner2.jpg"
import { NavLink, Outlet } from "react-router-dom";


const shop = {
  heading: "Our shop",
  bannerImage: ourShop,
  description:
    "would you like to try a dish",
};

const paths = [
  {name:"Salads", path:"/shop/salads"},
  {name:"Pizzas", path:"/shop/pizzas"},
  {name:"Soups", path:"/shop/soups"},
  {name:"Desserts", path:"/shop/desserts"},
  {name:"Drinks", path:"/shop/drinks"},
]
function OurShop(){
  return (
    <>
    <Helmet title="Shop"/>
    <HeadingBanner bannerData={shop} />
    <section className="flex justify-center items-center gap-5 my-7">
        {
          paths.map(({name, path}, index)=> <NavLink className={({isActive})=>isActive? "navActive":"navInActive"} to={path} key={index}>{name}</NavLink>)
        }
    </section>
    <section className="min-h-screen my-10">
      <Outlet/>
    </section>
    </>
  )
}

export default OurShop