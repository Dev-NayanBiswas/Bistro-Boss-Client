import axios from "axios";

async function imageBB(img){
    const formData = new FormData();
    formData.append('image',img);
    const response = await axios.post(import.meta.env.VITE_IMAGE_BB_URL,formData);

  return response.data.data.display_url; 
}

export default imageBB