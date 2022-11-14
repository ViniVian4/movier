import Joi from "joi";

const reviewSchema = Joi.object({
    note: Joi.string().max(150).default(""),
    movieGrade: Joi.string().allow("like", "dislike").default("")
});

export default reviewSchema;