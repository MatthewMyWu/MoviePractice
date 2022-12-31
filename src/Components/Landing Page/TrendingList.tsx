import TrendingCarousel from "./TrendingCarousel";
import React, { useState } from "react";
import { IMediaDisplayInfo, MockMediaRetriever } from "../../API/MediaRetriever";

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
        <div>
            <h1>Top Trending { mediaType }</h1>
            <TrendingCarousel items={ items } />
        </div>
    );
}

export default TrendingList;