import { CREATE_TOUR_ITINERARY, DELETE_TOUR_ITINERARY, DELETE_TOUR_ITINERARY_FOR_UPDATE, GET_ALL_TOUR_ITINERARY, GET_TOUR_ITINERARY } from "../Query/userQueries.js";
import { pool } from "../connection/database.js"

const database = pool.promise();

export const createitinerary = async (params) => {
    const data = await database.query(CREATE_TOUR_ITINERARY, params);
    return data;
}

export const getAllIntineraryTour = async () => {
    const data = await database.query(GET_ALL_TOUR_ITINERARY);
    return data[0];
}

export const getIntinerary = async (params) => {
    const data = await database.query(GET_TOUR_ITINERARY, params);
    return data[0];
}

export const updateIntinerary = async (params) => {
    const data = await database.query(); // Yet to work on ...
    return data[0];
}

export const deleteIntinerary = async (params) => {
    const data = await database.query(DELETE_TOUR_ITINERARY, params);
    return data;
}

export const deleteIntineraryForUpdate = async (params) => {
    const data = await database.query(DELETE_TOUR_ITINERARY_FOR_UPDATE, params);
    return data;
}