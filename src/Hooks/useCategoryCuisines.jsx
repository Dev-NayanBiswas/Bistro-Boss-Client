import { useQuery } from "@tanstack/react-query"
import axios from "axios"

function useCategoryCuisines(category){
  
    const {data, isLoading, isError, error} = useQuery({
        queryKey:["Cuisines", category],
        queryFn:async()=> await axios.get(`/cuisines?category=${category}`),
        enabled:!!category
    })
    return {data, isLoading, isError, error}
}
export default useCategoryCuisines