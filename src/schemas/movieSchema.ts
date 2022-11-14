import Joi from "joi";

const movieSchema = Joi.object({
    name: Joi.string().max(50).required(),
    genre: Joi.string().max(25).required(),
    platform: Joi.string().max(25).required()
});

export default movieSchema;