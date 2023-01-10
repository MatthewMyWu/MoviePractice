import { FilterOption, IMediaDisplayInfo, IMediaFullInfo, IMediaRetriever, MediaFilter } from "./MediaRetriever";

export class MockMediaRetriever implements IMediaRetriever {
    getTrendingMovies(startIndex: number, endIndex: number): IMediaDisplayInfo[] {
        const ret: IMediaDisplayInfo[] = [];

        for (let i = 0; i < 5; i++) {
            ret.push({
                "title": `title of movie ${i + 1}`,
                "posterPath": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
                "id": i + 1,
            });
        }

        return ret;
    }

    getTrendingTV(startIndex: number, endIndex: number): IMediaDisplayInfo[] {
        const ret: IMediaDisplayInfo[] = [];

        for (let i = 0; i < 5; i++) {
            ret.push({
                "title": `title of TV show ${i + 1}`,
                "posterPath": "/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg",
                "id": i + 1,
            });
        }

        return ret;
    }

    search(searchText: string, filter: FilterOption, mediaFilter: MediaFilter ): IMediaDisplayInfo[] {
        return [];
    }

    getMediaByID(id: number): IMediaFullInfo {
        return {
            "title": "some media",
            "overview": "media overview media overview media overview",
            "backdropPath": "string", // Should be full URL to image
            "releaseDate": "2022-12-30",
            "voteAverage": 12345,
            "genres": [],
            "cast": [],
            "directors": []
        };
    }
}