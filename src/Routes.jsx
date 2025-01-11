import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayouts from "./MainLayouts";
import Home from "./Pages/Home/Home";
import ContactUs from "./Pages/ContactUs/ContactUs";
import OurMenu from "./Pages/OurMenu/OurMenu";
import OurShop from "./Pages/OurShop/OurShop";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Pizzas from "./Pages/OurShop/Pizzas";
import Salads from "./Pages/OurShop/Salads";
import Soups from "./Pages/OurShop/Soups";
import Desserts from "./Pages/OurShop/Desserts";
import Drinks from "./Pages/OurShop/Drinks";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Statics from "./Pages/Dashboard/Statics";
import Reservation from "./Pages/Dashboard/Reservation";
import Payments from "./Pages/Dashboard/Payments";
import AddReviews from "./Pages/Dashboard/AddReviews";
import Booking from "./Pages/Dashboard/Booking";
import MyCart from "./Pages/Dashboard/MyCart";
import AllUsers from "./Pages/Dashboard/AllUsers";
import AdminHome from "./Pages/Dashboard/Admin/AdminHome";
import AdminItems from "./Pages/Dashboard/Admin/AdminItems";
import ManageItems from "./Pages/Dashboard/Admin/ManageItems";
import ManageBookings from "./Pages/Dashboard/Admin/ManageBookings";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "menu",
        element: <OurMenu />,
      },
      {
        path: "shop",
        element: (
          <PrivateRoute>
            <OurShop />
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: <Navigate to='salads' replace />,
          },
          {
            path: "salads",
            element: <Salads />,
          },
          {
            path: "pizzas",
            element: <Pizzas />,
          },
          {
            path: "soups",
            element: <Soups />,
          },
          {
            path: "desserts",
            element: <Desserts />,
          },
          {
            path: "drinks",
            element: <Drinks />,
          },
        ],
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Navigate to='statics' replace />,
      },
      {
        path: "statics",
        element: <Statics />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "payments",
        element: <Payments />,
      },
      {
        path: "myCart",
        element: <MyCart />,
      },
      {
        path: "addReview",
        element: <AddReviews />,
      },
      {
        path: "bookings",
        element: <Booking />,
      },
      {
        path: "users",
        element: <AllUsers />,
      },
      {
        path: "adminHome",
        element: <AdminHome />,
      },

      {
        path: "items",
        element: <AdminItems />,
      },
      {
        path: "manage",
        element: <ManageItems />,
      },
      {
        path: "booking",
        element: <ManageBookings />,
      },
    ],
  },
]);

export default Routes;
