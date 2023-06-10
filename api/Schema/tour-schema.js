import Joi from "joi";

export const createTourValidation = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        image: Joi.string(),
        type: Joi.string().required(),
        destination: Joi.string().required(),
        short_desc: Joi.string(),
        description: Joi.string().required(),
        from_date: Joi.string().required(),
        end_date: Joi.string().required(),
        adult_price: Joi.string().required(),
        child_price: Joi.string().required(),
        days: Joi.number().required(),
        nights: Joi.number().required(),
        amenities: Joi.string().required(),
        inclusions: Joi.string().required(),
        exclusions: Joi.string().required(),
        note: Joi.string().required(),
        is_popular: Joi.string(),
        status: Joi.string(),
        from_date: Joi.date().required(),
        end_date: Joi.date().required(),
        is_popular: Joi.string()
})