import { CREATE_TOUR, DELETE_TOUR, GET_DESTINATIONS, GET_TOURS, GET_TOURS_WITH_ID, TOUR_FILTER } from "../Query/userQueries.js";
import { pool } from "../connection/database.js";

const database = pool.promise();

export const getAllTours = async () => {
    const data = await database.query(GET_TOURS);
    return data[0];
}

export const getTourWithID = async (params) => {
    const data = await database.query(GET_TOURS_WITH_ID, params);
    return data[0];
}

export const createTour = async (params) => {
    const data = await database.query(CREATE_TOUR, params);
    return data;
}

export const deleteTour = async (params) => {
    const data = await database.query(DELETE_TOUR, params);
    return data;
}

export const getDestList = async () => {
    const data = await database.query(GET_DESTINATIONS);
    let international = [];
    let domestic = [];

    data[0]?.map((dest) => {
        if (dest?.type === "Domestic") {
            domestic.push(dest);
        }

        if (dest?.type === "International") {
            international.push(dest);
        }
    })
    return {
        international: international,
        domestic: domestic
    };
}

export const getFilteredList = async (type, filterOptions) => {
    const data = await database.query(TOUR_FILTER, [type, filterOptions]);
    return data[0]
}