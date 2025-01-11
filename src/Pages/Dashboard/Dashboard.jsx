import { Helmet } from "react-helmet-async"
import { Outlet } from "react-router-dom"
import DashNavbar  from "./DashNavbar"

function Dashboard() {
  return (
    <>
    <Helmet title="Dashboard"/>
    <section className="flex justify-center relative">
      <section className="w-fit mt-3 z-50">
        <DashNavbar/>
      </section>
      <section className="w-11/12 p-2 min-h-screen px-10 pt-20 my-20">
        <Outlet/>
      </section>
    </section>
    </>
  )
}

export default Dashboard