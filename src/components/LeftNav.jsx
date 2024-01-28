import React from 'react'
// import Header from './Header';

function LeftNav() {
    return (
        <>
            <div className='bg-black w-[15%] h-[95vh] text-white flex flex-col gap-8 p-[20px] overflow-y-auto overflow-x-hidden scroll-smooth  left-nav-scrollbar' style={{ scrollbarWidth: 'thin', position: 'fixed', left: '0' }}>

                <div className='flex justify-center items-center cursor-pointer hover:bg-lightGray p-2 rounded-[12px]'>
                    <i className="ri-home-5-line mr-8 ml-[-88px] text-xl "></i><span>Home</span>
                </div>

                <div className='flex justify-center items-center cursor-pointer hover:bg-lightGray p-2 rounded-[12px]'>
                    <i className="ri-home-5-line mr-8 ml-[-88px] text-xl"></i>
                    <span>Shorts</span>
                </div>

                <div className='flex justify-center items-center mr-[-52px] cursor-pointer hover:bg-lightGray p-2 rounded-[12px]'>
                    <i className="ri-home-5-line mr-8 ml-[-88px] text-xl "></i>
                    <span>Subscriptions</span>
                </div>

                <hr className='border-b border-lightGray' />

                <p className='cursor-pointer'>You <i className="ri-arrow-right-s-line text-xl "></i></p>

                <div className='flex justify-center items-center mr-[-42px] cursor-pointer hover:bg-lightGray p-2 rounded-[12px]'>
                    <i className="fa-regular fa-user mr-8 ml-[-88px] text-xl "></i><span>Your Channel</span>
                </div>

                <div className='flex justify-center items-center cursor-pointer hover:bg-lightGray p-2 rounded-[12px]'>
                    <i className="ri-history-line mr-8 ml-[-88px]"></i><span>History</span>
                </div>

                <div className='flex justify-center items-center mr-[-32px] cursor-pointer hover:bg-lightGray p-2 rounded-[12px]'>
                    <i className="ri-video-line mr-8 ml-[-88px] text-xl "></i><span>Your Videos</span>
                </div>

                <div className='flex justify-center items-center mr-[-32px] cursor-pointer hover:bg-lightGray p-2 rounded-[12px]'>
                    <i className="ri-time-line mr-8 ml-[-88px] text-xl "></i><span>Watch Later</span>
                </div>

                <div className='flex justify-center items-center mr-[-32px] cursor-pointer hover:bg-lightGray p-2 rounded-[12px]'>
                    <span><i className="ri-arrow-down-s-line mr-8 ml-[-102px] text-xl "></i>Show more</span>
                </div>

                <hr className='border-b border-lightGray' />

                <p>Explore</p>

                <div className='flex justify-center items-center cursor-pointer hover:bg-lightGray p-2 rounded-[12px]'>
                    <i className="ri-fire-line mr-8 ml-[-88px] text-xl "></i><span>Trending</span>
                </div>

                <div className='flex justify-center items-center mr-[-32px] cursor-pointer hover:bg-lightGray p-2 rounded-[12px]' >
                    <i className="ri-arrow-down-s-line mr-8 ml-[-102px] text-xl "></i><span>Show more</span>
                </div>

                <hr className='border-b border-lightGray ' />

                <div className='flex gap-2 flex-wrap text-slate-400 font-bold cursor-pointer '>
                    <p> About </p><p> Press</p><p>Copyright</p><p>Contact us</p><p>Creator Advertise Developers</p>
                    <p>Terms Privacy Policy & Safety</p><p>How YouTube worksTest new features</p><br />
                    <p>© 2024 Google LLC</p>
                </div>

            </div>

        </>
    )
}

export default LeftNav