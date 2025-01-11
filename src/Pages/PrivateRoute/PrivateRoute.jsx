import { useContext } from "react"
import { AuthContext } from "../../AllContext/AuthContext/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import lottieLoading from "../../assets/menu/loadingAnimationLottie.json"

function PrivateRoute({children}){
    const location = useLocation();
    const {userInfo, isLoading} = useContext(AuthContext)
    console.log(userInfo, isLoading,location);

    if(isLoading){
        return <section className="w-full bg-gray-900/45 fixed top-0 left-0 right-0 bottom-0 py-10">
            <Lottie animationData={lottieLoading}  
            style={{
                height:'50vh',
                width:'30vw',
                margin: 'auto'
            }}/>
            <p className="text-center text-5xl text-green-500 font-semibold italic">Loading . . .</p>
        </section>
      }

      if(userInfo?.email){
        return children
      }
  return <Navigate to="/login" state={location.pathname} />

}

export default PrivateRoute