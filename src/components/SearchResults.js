import React from 'react'
import VideoCard from './VideoCard'
import './SearchResults.css'

function SearchResults( {videos} ) {

    // const clickk = () => {
    //     console.log(props.videos);
    // }


    return (
        <div className="SearchResults">
            {
                videos.map(video =>{
                    return <VideoCard key={video.id.videoId || video.id.channelId} video={video}/>    
                    }
                )
            }
            {/* <button onClick={clickk}> cHECK</button> */}
        </div>
    )
}

export default SearchResults
