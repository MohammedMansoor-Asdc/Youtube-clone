import React from 'react'
import LeftNav from './LeftNav';
import Video from './VideoList';
import VideoList from './VideoListTwo';
import VideoListTwo from './VideoListThree';


function Browse() {
    return (
        <div>
            <div className='flex'>
                <LeftNav />
                <div className='ml-[15%] p-6 bg-black gap-4 pr-12'>
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    <Video />
                    {/* <VideoList/> 
                    <VideoListTwo />  */}
                </div>
            </div >
        </div>
    )
}

export default Browse