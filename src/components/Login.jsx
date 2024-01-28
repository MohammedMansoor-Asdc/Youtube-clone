import { React, useState } from 'react'
// import { fsImg } from '@/assets/1.jpg';
// import userImg from '@/assets/download.png'
import { validation } from '../utils/validation';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
// import LoginNav from './LoginNav';
// import { Link } from 'react-router-dom';
// import Header from './Header';
import Home from './Home';
import myImg from '@/assets/logo.png'
import Background from './Background';


function Login() {
    const [singin, setSignIn] = useState(true)
    let [username, setUserName] = useState("")
    let [password, setPassword] = useState("")
    let [email, setEmail] = useState("")
    let [errMsg, setErrMsg] = useState("")
    const [loggedIn, setLoggedIn] = useState(false);


    function handleRegistration() {
        if (singin) {
            setSignIn(!singin)
        } else {
            setSignIn(!singin)
        }
    }

    function formHandler() {
        let errmessage = validation(email, password);
        setErrMsg(errmessage);
        if (errmessage) return;

        if (!singin) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    console.log(user);
                    alert("Sing Up Successfull")
                    setSignIn(true)
                    setLoggedIn(true);

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    errMsg(errorCode, " ", errorMessage);
                    // ..
                });
        } else {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // console.log(user);
                    alert("Sing In Successfull")
                    setLoggedIn(true);

                })
                .catch((error) => {
                    const errorCode = error.code;
                    alert("Sing Up First")
                    const errorMessage = error.message;
                    setErrMsg(errorCode, " ", errorMessage);
                    console.log(errMsg)
                    setSignIn(false)
                });
        }
    }

    return (
        <>
            {loggedIn ? <Home /> :
                <>
                    <div>
                        <Background />
                        <div className='relative backdrop-blur-sm bg-white/20'>
                            <nav className='relative z-10'>
                                <div className='flex justify-center gap-96'>
                                    <div>
                                        <img src={myImg} alt="" className='w-40 drop-shadow-lg cursor-pointer' />
                                    </div>
                                    <div className='flex mt-6 gap-20'>
                                        <p className='text-xl font-semibold cursor-pointer hover:text-white'>Home</p>
                                        <p className='text-xl font-semibold cursor-pointer hover:text-white'>About Us</p>
                                        <p className='text-xl font-semibold cursor-pointer hover:text-white'>Contact Us</p>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className='flex justify-center mt-10 z-10 relative'>
                        <div className='border border-white/20 w-[35rem] h-[45rem] flex rounded-md backdrop-blur-sm bg-slate-500/20 flex-col items-center gap-10'>
                            <div>
                                {singin ?
                                    <h1 className='text-center mt-5 text-6xl flex flex-row text-white'>Sign In</h1> :
                                    <h1 className='text-center mt-5 text-6xl flex flex-row text-white'>Sign Up</h1>
                                }
                            </div>
                            <div className='flex flex-col gap-10'>
                                <div>
                                    {/* <img className='w-10' src={userImg} alt="" /> */}
                                    {singin ? "" :
                                        < input type="text" value={username} onChange={(e) => setUserName(e.target.value)} placeholder='User Name' className="text-center w-96 h-[4rem] bg-transparent border-b-2 text-xl text-white focus:outline-none" />
                                    }
                                </div>
                                <div>
                                    {singin ?
                                        <input type="email" placeholder='User Id / Email Id' className="text-center w-96 h-[4rem] bg-transparent border-b-2 text-xl text-white focus:outline-none" value={email} onChange={(e) => setEmail(e.target.value)} /> :
                                        <input type="email" placeholder='Create User Id / Email Id' className="text-center w-96 h-[4rem] bg-transparent border-b-2 text-xl text-white focus:outline-none" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    }
                                </div>
                                <div className='flex flex-col gap-10'>
                                    {singin ?
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className="text-center w-96 h-[4rem] bg-transparent border-b-2 text-xl text-white focus:outline-none" /> :
                                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Create Password' className="text-center w-96 h-[4rem] bg-transparent border-b-2 text-xl text-white focus:outline-none" />
                                    }
                                    <div className='flex gap-20'>
                                        <p><input className='enabled:hover:border-gray-400 disabled:opacity-75' id='remember' type="checkbox" />&nbsp;<label htmlFor='remember' className='mr-36 text-white font-semibold cursor-pointer'>Remember me</label>{singin ? <span className='text-white cursor-pointer'>Forget Password?</span> : ""}</p>
                                    </div>
                                </div>
                                <div className='mt-[20px]'>
                                    {singin ?
                                        <button className='text-center w-96 h-[4rem] bg-transparent border-2 text-xl text-white mt-22 hover:bg-white/30 hover:font-semibold' onClick={formHandler} >Sign In</button> :
                                        <button className='text-center w-96 h-[4rem] bg-transparent border-2 text-xl text-white mt-22 hover:bg-white/30 hover:font-semibold' onClick={formHandler} >Sign Up</button>
                                    }
                                </div>
                                <p className='font-bold text-white/50'>{errMsg}</p>
                                <div className='flex justify-center' >
                                    {singin ?
                                        <p className='text-white font-semibold cursor-pointer' onClick={handleRegistration}>Don&apos;t have an account? Sign Up</p> :
                                        <p className='text-white font-semibold cursor-pointer' onClick={handleRegistration}>Already have an account? Sign In</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Login