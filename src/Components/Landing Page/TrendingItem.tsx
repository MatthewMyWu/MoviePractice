
type TrendingItemProps = {
    item: {
        title: string;
        posterPath: string;
        id: number;
    }
}

const imageUrlPrefix = "https://image.tmdb.org/t/p/original";

function TrendingItem({ item }: TrendingItemProps) {
    return (
        <div className="landing-page-item-container">
            <div className="landing-page-image-container">
                <img src={imageUrlPrefix + item.posterPath} alt="poster" />
            </div>
            <p>{ item.title }</p>
        </div>
    );
}

export default TrendingItem;