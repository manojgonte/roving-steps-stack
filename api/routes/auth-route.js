import express from 'express';
import { AuthSchema } from '../Schema/user-schema.js';
import { createPayload, registerUser, userExist, verifyUser } from '../Controller/auth.js';

const router = express.Router();

router.post('/login/user', async (req, res) => {

    try {

        // await AuthSchema.validateAsync({ ...req?.body });
        let username = req?.body?.username;
        let password = req?.body?.password

        const data = await verifyUser(username, password);

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
});

router.post('/registration', async (req, res) => {
    try {
        let reqData = req?.body;
        
        let name = reqData?.name;
        let contact = reqData?.contact;
        let email = reqData?.email;
        let password = reqData?.password;
        let isTermsChecked = reqData?.isTermsChecked

        const result = await registerUser(name, contact, email, password, isTermsChecked);
        if (result?.length > 0) {
            res.status(200).send(
                JSON.stringify({
                    message: "User registered successfully",
                    status: "success",
                    statusCode: 200,
                })
            );
        } else {
            res.status(500).send(
                JSON.stringify({
                    message: "Something went wrong",
                    error: result,
                    status: "fail",
                    statusCode: 400,
                })
            )
        }
    } catch (error) {
        res.status(404).json({
            error: error,
            status: "fail",
            statusCode: 404
        })
    }
});

export default router;