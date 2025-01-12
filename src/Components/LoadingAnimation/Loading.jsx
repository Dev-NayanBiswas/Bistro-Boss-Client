import Lottie from "lottie-react";
import lottieLoading from "../../assets/menu/loadingAnimationLottie.json"

function Loading() {
  return (
    <>
        <Lottie animationData={lottieLoading}  
            style={{
                height:'50vh',
                width:'30vw',
                margin: 'auto'
            }}/>
    </>
  )
}

export default Loading