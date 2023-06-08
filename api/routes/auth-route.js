import express from 'express';
import { AuthSchema } from '../Schema/user-schema.js';
import { createPayload, userExist } from '../Controller/auth.js';

const router = express.Router();

router.post('/login/user', async (req, res) => {

    try {
        
        await AuthSchema.validateAsync({ ...req?.body });
        let username = req?.body?.username;
        let password = req?.body?.password

        const data = await userExist(username, password);

        if (data?.isExist === true) {
            let jwtAuthToken = createPayload(data);
            res.status(200).json({
                message: "User validated!",
                statusCode: 200,
                status: "success",
                authToken: jwtAuthToken
            })
        } else {
            res.status(200).json({
                message: "User not found",
                status: "fail",
                statusCode: 404
            })
        }

    } catch (error) {
        res.status(404).json({
            error: error,
            status: "fail",
            statusCode: 404
        })
    }
})

export default router;