import jwt from 'jsonwebtoken';
import { pool } from '../connection/database.js';
import { CLIENT_USER_EXIST, REGISTRATION, USER_EXIST } from '../Query/userQueries.js';

const database = pool.promise();

export const createPayload = (payload) => {
    let token = jwt.sign(payload, "vsbnccoiefh438u3409rj");
    // let token = await jwt.sign(payload, process.env.SECRET_KEY);
    return token;
}

export const userExist = async (username, password) => {
    const data = await database.query(USER_EXIST, [username, password]);
    return {
        isExist: data[0].length > 0 ? true : false,
        ...data[0][0]
    };
}

export const registerUser = async (name, contact, email, password) => {
    const data = await database.query(REGISTRATION, [name, contact, email, password]);
    return data;
}

export const verifyUser = async (email, password) => {
    const data = await database.query(CLIENT_USER_EXIST, [email, password]);
    return {
        isExist: data[0].length > 0 ? true : false,
        ...data[0][0]
    }
}