import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../Hooks/useFetch';

function VideoList() {
  const [resData, setResData] = useState([]);

  async function ResVideos() {
    try {
      let res = await useFetch("https://youtube.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=50&key=AIzaSyA1-f5oS5z5Q3D5yDntcN2IGJMuLygzP8E");
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
      <div className='font-Roboto'>
        {resData?.map((video) => (
          <Link key={video.id} to={`/watch?v=${video.id}`} className='flex flex-wrap mb-4'>
            <div className='flex'>
              <div>
                <img src={video.snippet.thumbnails?.standard?.url || ''} className='w-[420px] rounded-[20%]' alt="" />
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

