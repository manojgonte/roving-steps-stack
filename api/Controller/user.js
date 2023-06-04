import { CREATE_USERS, GET_USERS, GET_USER_WITH_ID } from "../Query/userQueries.js";
import { pool } from "../connection/database.js";

const db = pool.promise();

export const getUsers = async () => {
    const results = await db.query(GET_USERS);
    return results[0];
}

export const getUserWIthID = async (params) => {
    const results = await db.query(GET_USER_WITH_ID, params);
    return results[0];
}

export const createUser = async (params) => {
    const result = await db.query(CREATE_USERS, params);
    return result;
}