import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from './Header';
import VideoList from './VideoList';

const MainVideo = () => {
    const [searchParams] = useSearchParams();
    const paramsKey = searchParams.get('v');

    return (
        <>
            <Header />
            <div className='flex'>
                <iframe
                    title="YouTube video player"
                    className='w-[1276px] h-[720px] rounded-[6%] mt-4 ml-14'
                    src={`https://www.youtube.com/embed/${paramsKey}?si=6SBiTHU_tBFoF_w4`}
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                    allowFullScreen
                ></iframe>
                <div className='ml-[48px] w-[390px] mt-4'><VideoList /></div>
            </div>
        </>
    );
};

export default MainVideo;
