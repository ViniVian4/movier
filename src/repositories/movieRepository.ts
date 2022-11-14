import { QueryResult } from "pg"
import connection from "../db/db.js"
import { Movie, MovieEntity } from "../protocols/movie.js"

async function insertUnique(movie: Movie) {
    connection.query(`INSERT INTO movies (name, genre, platform) VALUES ($1, $2, $3);`,
        [movie.name, movie.genre, movie.platform]);
}

async function readAll(): Promise<QueryResult<MovieEntity>> {
    return connection.query(`SELECT * FROM movies`)
}

async function updateStatus(movieId: number) {
    connection.query(`UPDATE movies SET "movieStatus"=$1 WHERE id=$2`,
    ["watched", movieId]);
}

async function deleteOne(movieId: number) {
    connection.query(`DELETE FROM movies WHERE id=$1`,
    [movieId]);
}

async function readMoviesByPlatform(platform: string): Promise<QueryResult<MovieEntity>> {
    return connection.query(`SELECT * FROM movies WHERE platform=$1`,
    [platform]);
}

export {
    insertUnique,
    readAll,
    updateStatus,
    deleteOne,
    readMoviesByPlatform
}