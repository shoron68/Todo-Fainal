import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { Link } from 'react-router-dom';


const Login = () => {
    const auth = getAuth();
    let [email ,setEmail] = useState()
    let [password ,setpassword] = useState()
    let navigate = useNavigate()

    let handleEmail =(e)=>{
        setEmail(e.target.value)
    }
    let handlePassword =(e)=>{
        setpassword(e.target.value)
    }
    let handleLogIn =()=>{
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                toast("Success")
                setTimeout(()=>{
                    navigate("/kire")
                },2000)
            })
            .catch((error) => {
                toast.error("Invalid username or password");
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }


  return (
    <div className=" mt-[100px] py-[50px] w-[400px] mx-auto bg-[#33FFC1] rounded-[10px]">

        <div className=" ">
            <h3 className='text-[24px] font-sans text-[#262626] text-center font-bold'>Log in</h3>
        </div>
        <div className=" pt-[20px]">
        <div className=" flex justify-center">
        <input onChange={handleEmail}  type="email" placeholder='Email' className='py-[8px] pr-[30px]  border-b-[1px] border-[#26262649] outline-none bg-transparent text-[#262626]' />
        </div>
        <div className="mt-[30px] flex justify-center">
        <input onChange={handlePassword}  type="password" placeholder='password' className='py-[8px] pr-[30px]  border-b-[1px] border-[#26262649] outline-none bg-transparent text-[#262626]' />
        </div>
        <div className="text-center pt-[10px]">
        <button onClick={handleLogIn}  className='py-[10px] px-[40px] border-[1px] rounded-[10px] bg-[#5233FF] text-[#fff]'>Log In</button>
        <ToastContainer />
        </div>
        <div className="text-center pt-[10px]">
            <p>Don't have an account? <span className='text-[#FF3349]'><Link to="/">Register</Link></span></p>
        </div>

        </div>
    </div>
  )
}

export default Login