import React from 'react'
// import bgImg from '@/assets/bg.jpg'

function Background() {
    const backgroundImageStyle = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <>
            <div className='bg-youtube-image-third absolute top-0 left-0 w-full h-full' style={backgroundImageStyle}>
        </div >
        </>
    )
}

export default Background