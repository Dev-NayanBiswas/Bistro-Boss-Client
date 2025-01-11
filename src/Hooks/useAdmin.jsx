import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import { useContext } from "react";
import { AuthContext } from "../AllContext/AuthContext/AuthProvider";

function useAdmin() {
    const axiosSecure = useAxiosSecure();
    const {userInfo} = useContext(AuthContext);
    const email = userInfo.email;
  const adminQuery = useQuery({
    queryKey:["isAdmin", email],
    queryFn:()=>axiosSecure.get(`/users/isAdmin/${email}`),
  })

  return adminQuery
}

export default useAdmin