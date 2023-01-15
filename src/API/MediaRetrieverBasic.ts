import { FilterOption, IMediaDisplayInfo, IMediaFullInfo, IMediaRetriever, MediaFilter } from "./MediaRetriever";
import { MockMediaRetriever } from "./MockMediaRetriever";

interface IPopularResponse {
    "page": number,
    "results": IPopularMovieResult[] | IPopularTVResult[],
    "total_pages": number,
    "total_results": number
}

interface IPopularMovieResult {
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

interface IPopularTVResult {
    "backdrop_path": string,
    "first_air_date": string,
    "genre_ids": number[]
    "id": number,
    "name": string,
    "origin_country": string[],
    "original_language": string,
    "original_name": string,
    "overview": string,
    "popularity": number,
    "poster_path": string,
    "vote_average": number,
    "vote_count": number
}

const PAGE_SIZE: number = 20;




export class MediaRetrieverBasic implements IMediaRetriever {
    getTrendingMovies(startIndex: number, endIndex: number): Promise<IMediaDisplayInfo[]> {
        return this.getPopular(MediaFilter.Movie, startIndex, endIndex);
    }

    getTrendingTV(startIndex: number, endIndex: number): Promise<IMediaDisplayInfo[]> {
        return this.getPopular(MediaFilter.TV, startIndex, endIndex);
    }

    search(searchText: string, filter: FilterOption, mediaFilter: MediaFilter): Promise<IMediaDisplayInfo[]> {
        const mock: IMediaRetriever = new MockMediaRetriever();
        return mock.search(searchText, filter, mediaFilter);
    }

    getMediaByID(id: number): Promise<IMediaFullInfo> {
        const mock: IMediaRetriever = new MockMediaRetriever();
        return mock.getMediaByID(id);
    }

    private getPopular(mediaType: MediaFilter, startIndex: number, endIndex: number) {
        const startPage: number = Math.floor(startIndex / PAGE_SIZE) + 1; // Pages are not 0 based indexing
        const endPage: number = Math.floor(endIndex / PAGE_SIZE) + 1;
        const responseResults: Promise<IMediaDisplayInfo[]>[] = []; // All promises from fetch responses


        // Add each fetch request results to response results
        for (let page = startPage; page <= endPage; page++) {

            responseResults.push(fetchTrending(mediaType, page)
                .then(function (response: IPopularResponse) {
                    let currentIndex = (page - 1) * PAGE_SIZE;
                    const results: IMediaDisplayInfo[] = [];
                    for (const result of response.results) {
                        results.push(TrendingResultToMediaDisplayInfo(result));
                        currentIndex++;
                        if (currentIndex > endIndex)
                            break;
                    }
                    return results;
                }));

        }

        return Promise.all(responseResults).then(data => data.flat());
    }
}


// Private methods
///////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////


function fetchTrending(mediaType: MediaFilter, pageNumber: number): Promise<IPopularResponse> {
    const API_Key: string = "d68e3ec8654a9460714cdb6c335ae029";
    const page: number = pageNumber;

    let endpoint: string;
    switch (mediaType) {
        case MediaFilter.Movie:
            endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${API_Key}&language=en-US&page=${pageNumber}`;
            break;
        case MediaFilter.TV:
            endpoint = `https://api.themoviedb.org/3/tv/popular?api_key=${API_Key}&language=en-US&page=${pageNumber}`;
            break;
        default:
            endpoint = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_Key}&media_type=all&time_window=week&page=${page}`;
            break;
    }

    console.log(endpoint);

    return fetch(endpoint, {
        "method": "GET",
        "headers": {}
    })
        .then(function (res) { return res.json() })
        .then(res => {
            return res as IPopularResponse;
        })
}

function TrendingResultToMediaDisplayInfo(result: IPopularMovieResult | IPopularTVResult): IMediaDisplayInfo {
    if (instanceOfIPopularMovieResult(result)) {
        return {
            "title": result.title,
            "posterPath": result.poster_path,
            "id": result.id
        }
    } else {
        return {
            "title": result.name,
            "posterPath": result.poster_path,
            "id": result.id
        }
    }
    
 
}

function instanceOfIPopularMovieResult(object: any): object is IPopularMovieResult {
    return (Object.keys(object).includes("title"));
}

function instanceOfIPopularTVResult(object: any): object is IPopularTVResult {
    return (Object.keys(object).includes("name"));
}

