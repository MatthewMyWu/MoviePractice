import { FilterOption, IMediaDisplayInfo, IMediaFullInfo, IMediaRetriever, MediaFilter } from "./MediaRetriever";
import { MockMediaRetriever } from "./MockMediaRetriever";

interface ITrendingResponse {
    "page": number,
    "results": ITrendingResult[],
    "total_pages": number,
    "total_results": number
}

interface ITrendingResult {
    "adult": boolean,
    "backdrop_path": string,
    "id": number,
    "title": string,
    "original_language": string,
    "original_title": string,
    "overview": string,
    "poster_path": string,
    "media_type": string,
    "genre_ids": number[],
    "popularity": number,
    "release_date": string,
    "video": boolean,
    "vote_average": number,
    "vote_count": number
}

const PAGE_SIZE: number = 20;




export class MediaRetrieverBasic implements IMediaRetriever {
    getTrendingMovies(startIndex: number, endIndex: number): Promise<IMediaDisplayInfo[]> {
        const trendingList: IMediaDisplayInfo[] = [];
        const startPage: number = Math.floor(startIndex / PAGE_SIZE);
        const endPage: number = Math.floor(endIndex / PAGE_SIZE);
        const responseResults: Promise<IMediaDisplayInfo[]>[] = [];

        responseResults.push(fetchTrending(MediaFilter.Movie, 1)
            .then(function (response: ITrendingResponse) {
                const ret: IMediaDisplayInfo[] = [];
                for (const result of response.results) {
                    ret.push(TrendingResultToMediaDisplayInfo(result));
                }
                return ret;
            }));
        responseResults.push(fetchTrending(MediaFilter.Movie, 2)
            .then(function (response: ITrendingResponse) {
                const ret: IMediaDisplayInfo[] = [];
                for (const result of response.results) {
                    ret.push(TrendingResultToMediaDisplayInfo(result));
                }
                return ret;
            }));

            return Promise.all(responseResults).then(data => data.flat());
    }

    getTrendingTV(startIndex: number, endIndex: number): Promise<IMediaDisplayInfo[]> {
        const mock: IMediaRetriever = new MockMediaRetriever();
        return mock.getTrendingTV(startIndex, endIndex);
    }

    search(searchText: string, filter: FilterOption, mediaFilter: MediaFilter): Promise<IMediaDisplayInfo[]> {
        const mock: IMediaRetriever = new MockMediaRetriever();
        return mock.search(searchText, filter, mediaFilter);
    }

    getMediaByID(id: number): Promise<IMediaFullInfo> {
        const mock: IMediaRetriever = new MockMediaRetriever();
        return mock.getMediaByID(id);
    }
}


// Private methods
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////


function fetchTrending(mediaType: MediaFilter, pageNumber: number): Promise<ITrendingResponse> {
    const API_Key: string = "d68e3ec8654a9460714cdb6c335ae029";
    const media_type: string = mediaType;
    const time_window: string = "week";
    const page: number = pageNumber;
    const endpoint: string = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_Key}&media_type=${media_type}&time_window=${time_window}&page=${page}`;

    return fetch(endpoint, {
        "method": "GET",
        "headers": {}
    })
        .then(function (res) { return res.json() })
        .then(res => {
            return res as ITrendingResponse;
        })
}

function TrendingResultToMediaDisplayInfo(result: ITrendingResult): IMediaDisplayInfo {
    return {
        "title": result.title,
        "posterPath": result.poster_path,
        "id": result.id
    }
}

