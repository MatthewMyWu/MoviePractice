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
    getTrendingMovies(startIndex: number, endINdex: number): IMediaDisplayInfo[];
    getTrendingTV(startIndex: number, endINdex: number): IMediaDisplayInfo[];
    search(searchText: string, filter: FilterOption, mediaFilter: MediaFilter ): IMediaDisplayInfo[];
    getMediaByID(id: number): IMediaFullInfo;
}