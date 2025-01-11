import { faEyeSlash,faGear,faEye} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import Heading from "../../Components/Heading/Heading";
import {useLocation, useNavigate } from "react-router-dom";
import { faFacebookF, faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import ground from "../../assets/others/authentication.png"
import sideImage from "../../assets/others/authentication2.png"
import { AuthContext } from "../../AllContext/AuthContext/AuthProvider";
import sweetAlert from "../../Utilities/sweetAlert";
import GoogleLogin from "../Register/GoogleLogin";



const login = {
  small:"Login or Back to Register",
  header:"Login Now"
}

function Login(){
  const location = useLocation();
  const navigate = useNavigate();
  const {signinUser} = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const {handleSubmit, register, setError, clearErrors, reset, formState:{errors}, watch}= useForm();



  useEffect(()=>{
    loadCaptchaEnginge(6)
  },[])


  function switchRegister(){
    navigate("/register", {state:location?.state})
  }

  function handleLogin(data){
    clearErrors('captcha')
    if(validateCaptcha(data.captcha)=== true){
      signinUser(data.email, data.password)
      .then(()=>{
        sweetAlert("info","Successfully Logged in");
        navigate(location.state ? location.state : "/")
        reset({
          email:"",
          password:"",
          captcha:""
        })
      }).catch(()=>sweetAlert("error", "Error in Login"))
      
      
      return;
    }else{
      setError('captcha',{
        type:"manual",
        message:"Wrong Input!"
      });
      return
    }
  }

  
  return (
    <>
      <section
      className="-top-10 relative h-[200vh] !pt-10"
        style={{
          background:`url(${ground})`,
          backgroundPosition:'center',
          backgroundSize:'cover',
          backgroundRepeat:'no-repeat'
        }}
      >
        <section className=" shadow-xl shadow-black/45 rounded-lg w-10/12 mx-auto py-6" style={{
        background:`url(${ground})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat'
      }}>
          <Heading headingData={login}/>
        <section className="flex lg:flex-row flex-col px-10 gap-2">
          <figure className="w-10/12">
            <img src={sideImage} className="object-contain object-center w-full h-full" alt="" />
          </figure>
        <form onSubmit={handleSubmit(handleLogin)} className="w-11/12 mx-auto flex-col space-y-5 my-10">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Email*
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                message: "Invalid email format",
              },
            })}
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        <div className="relative">
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Password*
          </label>
          <input
            {...register('password',{
              required:"Password is Required",
              pattern:{
                value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/,
                message:"Password should have One Special Character, One Uppercase and One Number"
              }
            })}
            type={!showPass? "password" : "text"}
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
          {
            !showPass ? <FontAwesomeIcon onClick={()=>setShowPass(true)} className="text-yellow-700 text-xl absolute right-3 top-[55%]" icon={faEye}/> :
            <FontAwesomeIcon onClick={()=>setShowPass(false)} className="text-yellow-700 text-xl absolute right-3 top-[55%]" icon={faEyeSlash}/>
          }
        </div>
        <div className="w-full bg-white rounded-lg flex">
        <LoadCanvasTemplate className="w-full rounded-lg "/>
        </div>
        <div className="group flex justify-center flex-col">
          <div className="flex w-full ">
          <input
            {...register('captcha',{
              required:"Captcha is Required",
              min:{
                value:6,
                message:"Enter the whole Captcha"
              }
            })}
            type="text"
            placeholder="Enter the Captcha"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          </div>
          {errors.captcha && (
            <p className="text-red-500 text-sm mt-1">{errors.captcha.message}</p>
          )}
        </div>
        <div className="w-full text-center">
          <button className="px-10 py-2 bg-gradient-to-tl from-[#D1A054B3] to-yellow-500 tracking-wider font-semibold font-cin !text-white" type="submit">Submit</button>
        </div>
        </form>
        </section>
        <section className="text-center space-y-3">
        <button onClick={switchRegister} className="text-[#dca308] font-semibold">New here? <span className="text-lg font-semibold tracking-wide font-cin">Create a New Account</span></button>
        <p className="font-cin font-semibold text-center">or Signin With</p>
        <section className="flex justify-center items-center gap-3">
            <FontAwesomeIcon className="text-2xl p-2 rounded-full border-[1px] border-yellow-600" icon={faGithub}/>
            <FontAwesomeIcon className="text-2xl p-2 px-3 rounded-full border-[1px] border-yellow-600" icon={faFacebookF}/>
            {/* google Here */}
            <GoogleLogin state={location.state}/>
        </section>
        </section>
      </section>
      </section>
    </>
  )
}

export default Login