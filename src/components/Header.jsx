import React, { useState } from 'react'
import youtubeImg from '@/assets/youtube.webp'
import { Link } from 'react-router-dom';
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import Login from './Login';



function Header() {
    const [showLogin, setShowLogin] = useState(false);
    function handleSignOut() {

        signOut(auth)
            .then(() => {
                // Sign-out successful.
                console.log('Sign-out successful');
                setShowLogin(true);
            })
            .catch((error) => {
                // Handle errors here
                console.error('Sign-out error:', error);
            });
    }
    return (
        <>
            {showLogin ? (<Login />) : (
                <div className='flex justify-center gap-[24rem] bg-black h-[60px] items-center sticky top-0 z-50'>
                    <div className='flex'>
                        <i className="ri-menu-line text-white text-2xl mt-[12px] mr-2 cursor-pointer hover:bg-lightGray p-1 rounded-[100%]"></i>
                        <Link to={`/home`}><div className='flex mt-1 gap-2'>
                            <img src={youtubeImg} alt="" className='w-14 mr-[-8px] cursor-pointer' /><span className='cursor-pointer mt-[14px] text-white font-Roboto font-bold text-xl'>YouTube</span></div></Link>
                    </div>


                    <div className='flex justify-center items-center'>
                        <input type="text" placeholder='Search' className='pl-[22px] border border-borderColor focus:outline-none focus:border-blue-700 w-[500px] p-2 rounded-s-fourty bg-black font-Roboto text-white' />
                        <i className="ri-search-line text-white bg-lightGray h-[42px] text-center border border-borderColor w-14 rounded-r-fourty flex items-center justify-center text-lg cursor-pointer"></i>
                        <i className="ri-mic-fill text-white text-xl ml-10 border border-borderColor p-2 rounded-[48%] cursor-pointer bg-lightGray hover:bg-superGray"></i>
                    </div>

                    <div className='flex gap-8 text-xl'>
                        <div>
                            <i className="ri-video-add-line text-white mt-2 cursor-pointer hover:bg-lightGray p-2 rounded-[48%]"></i>
                        </div>

                        <div>
                            <i className="ri-notification-3-line text-white mt-2 cursor-pointer hover:bg-lightGray p-2 rounded-[48%]"></i>
                        </div>

                        <Link to={'/login'}> <div>
                            <button onClick={handleSignOut} className='text-white border border-borderColor p-1 rounded-[20px] bg-red-600 font-bold'>Sign Out</button>
                        </div></Link>

                    </div>
                </div>
            )}
        </>
    )
}

export default Header