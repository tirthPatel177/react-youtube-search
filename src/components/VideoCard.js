import React from 'react'
import './VideoCard.css'

const VideoCard = ({video}) => {

    // const checkk = () => {
    //     console.log(video);
    //     // console.log(video.snippet)
    // };

    return (
        <div className="videoCard">
            
            <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}></img>
            <div className="content">
            <a href={( !video.id.videoId ? "https://www.youtube.com/channel/" + video.id.channelId:  "https://www.youtube.com/watch?v=" + video.id.videoId)}>
                <h2>{video.snippet.title}</h2>
            </a>
            </div>
            
            {/* <button onClick={checkk}>Check</button> */}
        </div>
    )
}

export default VideoCard;
