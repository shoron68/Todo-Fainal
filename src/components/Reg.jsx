import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword,updateProfile  } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Reg = () => {
    const auth = getAuth();
    let [email,setEmail] = useState("")
    let [name,setName] = useState("")
    let [password,setPassword] = useState("")
    let navigate = useNavigate()

    let handleEmail = (e)=>{
        setEmail(e.target.value);
    }
    let handlePassword = (e)=>{
        setPassword(e.target.value);
    }
    let handleName = (e)=>{
        setName(e.target.value);
    }

    let handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                

                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                      toast("Sign Up Success. Go To Login Page")
                    setTimeout(()=>{
                        navigate("/login")
                    },1000)
                  }).catch((error) => {
                    
                  });
            })
            .catch((error) => {
                toast.error("Complete all task");
                const errorCode = error.code;
                const errorMessage = error.message;
                
            });
    }
   
  return (
    <div className="  mt-[100px] py-[50px] w-[400px] mx-auto bg-[#33FFC1] rounded-[10px]">

        <div className=" pt-[50px]">
            <h3 className='text-[24px] font-sans text-[#262626] text-center font-bold'>Sign Up</h3>
        </div>



        <div className=" pt-[20px]">
        <div className=" flex justify-center">
        <input onChange={handleName} type="text" placeholder='Name' className='py-[8px] pr-[30px]  border-b-[1px] border-[#26262649] outline-none bg-transparent text-[#262626]' />
        </div>
        <div className=" mt-[30px] flex justify-center">
        <input onChange={handleEmail} type="email" placeholder='Email' className='py-[8px] pr-[30px]  border-b-[1px] border-[#26262649] outline-none bg-transparent text-[#262626]' />
        </div>
        <div className="mt-[30px] flex justify-center">
        <input onChange={handlePassword} type="password" placeholder='password' className='py-[8px] pr-[30px]  border-b-[1px] border-[#26262649] outline-none bg-transparent text-[#262626]' />
        </div>
        <div className="text-center pt-[10px]">
        <button onClick={handleSignUp} className='py-[10px] px-[40px]  rounded-[10px] bg-[#5233ffd5] text-[#fff]'>Sign up</button>
        <ToastContainer />
        </div>
        <div className="text-center pt-[10px]">
            <p>Already have an account? <span className='text-[#FF3349]'><Link to="/login">Log in</Link></span></p>
        </div>
        </div>
    </div>
  )
}

export default Reg