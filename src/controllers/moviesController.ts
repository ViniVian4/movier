import movieSchema from "../schemas/movieSchema.js"
import reviewSchema from "../schemas/reviewSchema.js"
import {Request, Response } from "express"
import { Movie } from "../protocols/movie"
import { Review } from "../protocols/review"
import { insertUnique, readAll, updateStatus, deleteOne, readMoviesByPlatform } from "../repositories/movieRepository.js"
import { insertNewReview } from "../repositories/reviewRepository.js"

async function postMovie(req: Request, res: Response) {
    const newMovie = req.body as Movie;

    const { error } = movieSchema.validate(newMovie);
    if (error) {
        return res.status(400).send({
            message: error.message
        })
    }

    try {
        await insertUnique(newMovie);
    } catch (error) {
        return res.sendStatus(500);
    }    

    return res.sendStatus(201);
}

async function getAllMovies(req: Request, res: Response) {
    try {
        const allMovies = await readAll();

        return res.status(200).send(allMovies.rows);
    } catch (error) {
        return res.sendStatus(500);
    }    
}

async function watchMovie(req: Request, res: Response) {
    const movieId : number = Number(req.params.id);
    const newReview = req.body as Review;

    const { error } = reviewSchema.validate(newReview);
    if (error) {
        return res.status(400).send({
            message: error.message
        })
    }

    try {
        await updateStatus(movieId);
        await insertNewReview(movieId, newReview);
    } catch (error) {
        return res.sendStatus(500);
    }
    
    return res.sendStatus(200);
}

async function deleteMovie(req: Request, res: Response) {
    const movieId : number = Number(req.params.id);

    try {
        await deleteOne(movieId);
    } catch (error) {
        return res.sendStatus(500);
    }

    return res.sendStatus(200);
}

async function getMovieQuantityByPlatform(req: Request, res: Response) {
    const platform : string = req.params.platform;

    try {
        const filteredMovies = await readMoviesByPlatform(platform);

        return res.status(200).send(String(filteredMovies.rowCount));
    } catch (error) {
        return res.sendStatus(500);
    }
}

export {
    postMovie,
    getAllMovies,
    watchMovie,
    deleteMovie,
    getMovieQuantityByPlatform
}