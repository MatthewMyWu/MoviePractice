import { FilterOption, IMediaDisplayInfo, IMediaFullInfo, IMediaRetriever, MediaFilter } from "./MediaRetriever";

export class MockMediaRetriever implements IMediaRetriever {
    getTrendingMovies(startIndex: number, endIndex: number): Promise<IMediaDisplayInfo[]> {
        const ret: IMediaDisplayInfo[] = [];

        for (let i = 0; i < 5; i++) {
            ret.push({
                "title": `title of movie ${i + 1}`,
                "posterPath": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
                "id": i + 1,
            });
        }

        return new Promise((resolve, reject) => resolve(ret));
    }

    getTrendingTV(startIndex: number, endIndex: number): Promise<IMediaDisplayInfo[]> {
        const ret: IMediaDisplayInfo[] = [];

        for (let i = 0; i < 5; i++) {
            ret.push({
                "title": `title of TV show ${i + 1}`,
                "posterPath": "/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg",
                "id": i + 1,
            });
        }

        return new Promise((resolve, reject) => resolve(ret));
    }

    search(searchText: string, filter: FilterOption, mediaFilter: MediaFilter): Promise<IMediaDisplayInfo[]> {
        return new Promise((resolve, reject) => resolve([]));
    }

    getMediaByID(id: number): Promise<IMediaFullInfo> {
        return new Promise(function (resolve, reject) {
            const ret: IMediaFullInfo = {
                "title": "some media",
                "overview": "media overview media overview media overview",
                "backdropPath": "string", // Should be full URL to image
                "releaseDate": "2022-12-30",
                "voteAverage": 12345,
                "genres": [],
                "cast": [],
                "directors": []
            }
            resolve(ret);
        });
    }
}