import React from 'react';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow'
import "./SearchPage.css"

function SearchPage() {
    return (
        <div className="searchPage" >
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
            image="https://yt3.ggpht.com/yti/APfAmoHOJHtL3xMMXrAsaqtIeU61slGRu6QsUZoZOi1S6Q=s88-c-k-c0x00ffffff-no-rj-mo"
            channel="Rahul Singhal"
            verified
            subs="1"
            noOfVideos={0}
            description="Not Ready Yet"
            />

            <hr/>
            <VideoRow 
            views="23M"
            subs="987K"
            description="TOLD YA NOT YET"
            timestamp="a minute ago"
            channel="Rahul Singhal"
            title="MERA JAADU"
            image="https://i.ytimg.com/vi/NT299zIk2JY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBqZPjIgBJ_NTf7TnAGCXmQQ5C85Q"
            />
        </div>
    )
}

export default SearchPage
