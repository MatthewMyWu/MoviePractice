import TrendingCarousel from "./TrendingCarousel";
import React, { useState } from "react";
import { IMediaDisplayInfo, IMediaRetriever } from "../../API/MediaRetriever";
import { MockMediaRetriever } from "../../API/MockMediaRetriever";

type TrendingListProps = {
    mediaType: string;
}

function TrendingList({ mediaType }: TrendingListProps) {

    const [items, setItems] = useState([] as IMediaDisplayInfo[]);

    React.useEffect(() => {
        const api: IMediaRetriever = new MockMediaRetriever();
        const mediaList: Promise<IMediaDisplayInfo[]> = mediaType === "movie"
            ? api.getTrendingMovies(0, 0)
            : api.getTrendingTV(0, 0);

        mediaList.then(function(result) {
            console.log(result);
            setItems(result);
        });
    }, [mediaType]);

    return (
        <div className="landing-page-trending-list">
            <h1 className="landing-page-list-header">Top Trending {mediaType}</h1>
            <TrendingCarousel items={items} />
        </div>
    );
}

export default TrendingList;