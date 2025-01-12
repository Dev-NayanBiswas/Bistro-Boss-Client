import { Navigate, useLocation } from "react-router-dom"
import useAdmin from "../../Hooks/useAdmin"
import { useContext } from "react";
import { AuthContext } from "../../AllContext/AuthContext/AuthProvider";
import Loading from "../../Components/LoadingAnimation/Loading";

function AdminRoute({children}){
  const location = useLocation();
    const {isLoading:adminLoading, isFetching, isPending: adminPending, isError, error, data:isAdmin} = useAdmin();
    const {userInfo, isLoading} = useContext(AuthContext);


    if(adminLoading || adminPending || isLoading){
      return <Loading/>
    }

    console.log(isAdmin)
    
    if(userInfo?.email && isAdmin?.data?.isAdmin){
        return children
    }
  return <Navigate to={"/"} state={location.pathname} replace/>
}

export default AdminRoute