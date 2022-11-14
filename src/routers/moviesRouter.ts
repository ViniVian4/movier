import express from "express"
import { postMovie, getAllMovies, watchMovie, deleteMovie } from "../controllers/moviesController.js"

const moviesRouter = express.Router();

moviesRouter.post('/movies', postMovie);
moviesRouter.get('/movies', getAllMovies);
moviesRouter.put('/movies/:id', watchMovie);
moviesRouter.delete('/movies/:id', deleteMovie);

export { moviesRouter };