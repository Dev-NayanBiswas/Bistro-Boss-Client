import { Navigate } from "react-router-dom"
import useAdmin from "../../Hooks/useAdmin"
import { useContext } from "react";
import { AuthContext } from "../../AllContext/AuthContext/AuthProvider";

function AdminRoute({children}){
    const {isLoading, isFetching, isPending, isError, error, data} = useAdmin();
    const {userInfo} = useContext(AuthContext);

    if(data){
        
    }
  return <Navigate to={"/login"} replace/>
}

export default AdminRoute