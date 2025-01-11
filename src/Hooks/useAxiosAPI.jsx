import axios from "axios"



export const axiosAPI = axios.create({
    baseURL:'http://localhost:8000'
})

function useAxiosAPI() {

    async function postCuisines(data){
        const response = await axiosAPI.post('/cuisines', data);
        return response;
    }

    async function patchCuisines(data){
        const response = await axiosAPI.patch(`/cuisines/${data._id}`,data);
        return response;
    }
    
    async function putCuisines(data){
        const response = await axiosAPI.put(`/cuisines/${data._id}`, data);
        return response;
    }
    async function deleteCuisines(id){
        const response = await axiosAPI.delete(`/cuisines/${id}`);
        return response;
    }


    return {
        postCuisines,
        patchCuisines,
        deleteCuisines,
        putCuisines
    }
}

export default useAxiosAPI