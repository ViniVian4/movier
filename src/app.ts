import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {moviesRouter} from "./routers/moviesRouter.js"

dotenv.config();

const app = express();
app
    .use(cors())
    .use(express.json())    
    .use(moviesRouter);

app.listen(process.env.PORT, () => console.log(`Magic happens on ${process.env.PORT}`));