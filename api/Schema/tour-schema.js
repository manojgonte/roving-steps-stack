import Joi from "joi";

export const createTourValidation = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        image: Joi.string(),
        type: Joi.string().required(),
        destination: Joi.string().required(),
        short_desc: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required(),
        days: Joi.number().required(),
        nights: Joi.number().required(),
        amenities: Joi.string().required(),
        inclusions: Joi.string().required(),
        exclusions: Joi.string().required(),
        note: Joi.string().required(),
        status: Joi.string().required()
})