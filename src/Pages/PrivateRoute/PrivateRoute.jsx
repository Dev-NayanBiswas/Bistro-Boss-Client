import { useContext } from "react"
import { AuthContext } from "../../AllContext/AuthContext/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Components/LoadingAnimation/Loading";


function PrivateRoute({children}){
    const location = useLocation();
    const {userInfo, isLoading} = useContext(AuthContext)
    console.log(userInfo, isLoading,location);

    if(isLoading){
        return <section className="w-full bg-gray-900/45 fixed top-0 left-0 right-0 bottom-0 py-10">
            <Loading/>
            <p className="text-center text-5xl text-green-500 font-semibold italic">Loading . . .</p>
        </section>
      }

      if(userInfo?.email){
        return children
      }
  return <Navigate to="/login" state={location.pathname} />

}

export default PrivateRoute