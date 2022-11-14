export type ReviewEntity = {
    id: number,
    note: string,
    movieGrade: string,
    movieId: number,
}

export type Review = Omit<ReviewEntity, "id" | "movieId">