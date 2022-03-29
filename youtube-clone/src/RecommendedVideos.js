import React from 'react';
import VideoCard from "./VideoCard"; 
import "./RecommendedVideos.css";

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard 
                title="Become a Hacker in milliseconds"
                views="22M views"
                timestamp="3 days ago"
                channelImage="https://yt3.ggpht.com/yti/APfAmoHOJHtL3xMMXrAsaqtIeU61slGRu6QsUZoZOi1S6Q=s88-c-k-c0x00ffffff-no-rj-mo"
                channel="Rahul"
                image="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
                />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
                <VideoCard />
            </div>
            
        </div>
    )
}

export default RecommendedVideos
