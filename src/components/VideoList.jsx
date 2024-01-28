import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../Hooks/useFetch';

function VideoList() {
  const [resData, setResData] = useState([]);

  async function ResVideos() {
    try {
      let res = await useFetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=AIzaSyA1-f5oS5z5Q3D5yDntcN2IGJMuLygzP8E");
      console.log(res)
      setResData(res.items || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  } ""

  // async function data() {

  //   let channelData = await useFetch("https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&maxResults=150&key=AIzaSyA1-f5oS5z5Q3D5yDntcN2IGJMuLygzP8E")
  //   console.log(channelData)
  // }
  // data()

  useEffect(() => {
    ResVideos();
  }, []);

  function truncateString(str, maxLength) {
    return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
  }

  function Video() {
    return (
      <div className='font-Roboto flex gap-[20px] flex-wrap'>
        {resData?.map((video) => (
          <Link key={video.id} to={`/watch?v=${video.id}`} className=''>
            <div className=''>
              <div>
                <img src={video.snippet.thumbnails?.standard?.url || ''} className='w-[355px] rounded-[20%]' alt="" />
                <div>
                  <p className='text-white text-[1.6rem]'>{truncateString(video.snippet.title, 20)}</p>
                  <p className='text-lightWhite'>{video.snippet.channelTitle}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }

  return <Video />;
}

export default VideoList;

