import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import ProfileCard from "./Components/Banner/ProfileCard"

function MainLayouts() {
  return (
    <>
    <section className="w-11/12 mx-auto relative">
        <section className="fixed w-11/12 mx-auto bg-black/45 h-[8vh] z-50">
            <Navbar/>
        </section>
        {/* <section>
          <ProfileCard/>
        </section> */}
        <section className="w-11/12 h-[8vh]"/>
        <main className="py-4 min-h-screen">
                <Outlet/>
        </main>
        <section>
            <Footer/>
        </section>
    </section>
    </>
  )
}

export default MainLayouts