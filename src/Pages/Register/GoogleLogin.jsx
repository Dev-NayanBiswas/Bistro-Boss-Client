import { useContext } from "react";
import { AuthContext } from "../../AllContext/AuthContext/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import sweetAlert from "../../Utilities/sweetAlert";
import useUsersMutations from "../../Hooks/useUsersMutations";

function GoogleLogin({state}){
      const {googleSignin} = useContext(AuthContext);
      const {addUserMutation} = useUsersMutations()
      const navigate = useNavigate();
      console.log(state)



    function handleGoogleSignIn(){
        googleSignin()
        .then((result)=>{
            const userCred = {
                name:result?.user?.displayName,
                email:result?.user?.email,
                imageURl:result?.user?.photoURL
            }
            addUserMutation.mutate(userCred);
            console.log(userCred);
          sweetAlert("info","Successfully Logged in");
            navigate(state ? state : "/")
        }).catch((error)=>sweetAlert("error", error.message))
      }
  return (
    <>
            <button className="hover:scale-105 active:scale-95 transition-all duration-500">
            <FontAwesomeIcon onClick={handleGoogleSignIn} className="text-2xl p-2 rounded-full border-[1px] border-yellow-600" icon={faGoogle}/>
            </button>
    </>
  )
}

export default GoogleLogin