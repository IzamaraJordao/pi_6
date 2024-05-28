export interface Carrocel {
    title: string;
    overview: string;
    poster_path: string;
}

export interface Movie {
    id: number;
    title: string;
    originalLanguage: string;
    releaseDate: string;
    productionCompanies: string;
    genre: string;
    image: string;
    status: string;
    runtime: number;
    // coverImage: string;
    overview: string;
    // Add other properties as needed
}