export interface IMediaDisplayInfo {
    "title": string,
    "posterPath": string, // Should be full URL to poster image
    "id": number
}

export interface IMediaFullInfo {
    "title": string,
    "overview": string,
    "backdropPath": string, // Should be full URL to image
    "releaseDate": string,
    "voteAverage": number,
    "genres": string[],
    "cast": IActorInfo[],
    "directors": IActorInfo[]
}

export interface IActorInfo {
    "name": string,
    "character": string,
    "ProfilePicturePath": string // Should be full URL to image
}

export const enum FilterOption {
    Keyword, Genre, Actor, Director
}

export const enum MediaFilter {
    Movie, TV, All
}

export interface IMediaRetriever {
    getTrendingMovies(startIndex: number, endIndex: number): IMediaDisplayInfo[];
    getTrendingTV(startIndex: number, endIndex: number): IMediaDisplayInfo[];
    search(searchText: string, filter: FilterOption, mediaFilter: MediaFilter ): IMediaDisplayInfo[];
    getMediaByID(id: number): IMediaFullInfo;
}

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