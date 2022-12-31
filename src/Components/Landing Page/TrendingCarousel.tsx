import { IMediaDisplayInfo } from "../../API/MediaRetriever";
import TrendingItem from "./TrendingItem";

type TrendingCarouselProps = {
    items: IMediaDisplayInfo[];
}

function TrendingCarousel({ items }: TrendingCarouselProps) {
    return (
        <div>
            {items.map(item => <TrendingItem item={item} key={item.id} />)}
        </div>
    );
}

export default TrendingCarousel;
