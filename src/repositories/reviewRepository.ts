import connection from "../db/db.js"
import { Review } from "../protocols/review.js"

async function insertNewReview(movieId: number, newReview: Review) {
    connection.query(`INSERT INTO reviews (note, "movieGrade", "movieId") VALUES ($1, $2, $3)`,
    [newReview.note, newReview.movieGrade, movieId]);
}

export {
    insertNewReview
}