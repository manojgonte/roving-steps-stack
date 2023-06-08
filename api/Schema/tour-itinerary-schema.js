import Joi from "joi";

export const createItineraryValidation = Joi.object({
    tour_id: Joi.number().required(),
    title: Joi.string().required(),
    day: Joi.number().required(),
    description: Joi.string().required(),
    activity: Joi.string().required(),
    stay: Joi.string().required(),
    food: Joi.string().required(),
    status: Joi.string().required(),
    places_to_visit: Joi.string().required(),
    travel: Joi.string().required(),
    image: Joi.string().required(),
    overview: Joi.string().required(),
    travel_options: Joi.string().required()
})