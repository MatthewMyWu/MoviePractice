import TrendingCarousel from "./TrendingCarousel";
import React, { useState } from "react";
import { IMediaDisplayInfo } from "../../API/MediaRetriever";
import { MockMediaRetriever } from "../../API/MockMediaRetriever";

type TrendingListProps = {
    mediaType: string;
}

function TrendingList({ mediaType }: TrendingListProps) {

    const [items, setItems] = useState([] as IMediaDisplayInfo[]);

    React.useEffect(() => {
        const api = new MockMediaRetriever();

        const mediaList = mediaType === "movie" 
            ? api.getTrendingMovies(0, 0)
            : api.getTrendingTV(0, 0);
            
        setItems(mediaList);
    }, [mediaType]);

    return (
        <div className="landing-page-trending-list">
            <h1 className="landing-page-list-header">Top Trending { mediaType }</h1>
            <TrendingCarousel items={ items }/>
        </div>
    );
}

export default TrendingList;