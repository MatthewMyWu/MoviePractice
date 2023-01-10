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




export class MediaRetrieverBasic implements IMediaRetriever {
    getTrendingMovies(startIndex: number, endIndex: number): Promise<IMediaDisplayInfo[]> {
        return fetchTrending().then(function (response: ITrendingResponse) {
            const ret: IMediaDisplayInfo[] = [];
            let i = 0;
            for (const result of response.results) {
                ret.push(TrendingResultToMediaDisplayInfo(result));
                i++;
                if (i >= 5) break;
            }
            return ret;
        });
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


function fetchTrending(): Promise<ITrendingResponse> {
    return fetch("https://api.themoviedb.org/3/trending/all/day?api_key=d68e3ec8654a9460714cdb6c335ae029&media_type=all&time_window=week", {
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

