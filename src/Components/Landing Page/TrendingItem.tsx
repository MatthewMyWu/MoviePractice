
type TrendingItemProps = {
    item: {
        title: string;
        posterPath: string;
        id: number;
    }
}

function TrendingItem({ item }: TrendingItemProps) {
    return (
        <div>
            <img src={item.posterPath} alt="poster" />
            <p>{ item.title }</p>
        </div>
    );
}

export default TrendingItem;