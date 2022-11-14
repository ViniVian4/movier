export type MovieEntity = {
    id: number,
    name: string,
    movieStatus: string,
    genre: string,
    platform: string
}

export type Movie = Omit<MovieEntity, "id" | "movieStatus">