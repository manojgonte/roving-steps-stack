import express from 'express';
import { createUser, getUserWIthID, getUsers } from '../Controller/user.js';
const router = express.Router();
router.use(express.urlencoded({ extended: false }));
router.use(express.json({ extended: false }));

router.get("/users", async (req, res) => {
    const data = await getUsers();
    res.status(200).send(JSON.stringify({
        message: "Users fetched successfully",
        data: data
    }));
});

router.get("/users/id", async (req, res) => {    
    const data = await getUserWIthID(req?.body?.id);
    res.status(200).send(JSON.stringify({
        message: "User fetched successfully",
        data: data
    }));
});

router.post("/create_user", async (req, res) => {
    const reqData = req?.body;
    let id = reqData?.id;
    let first_name = reqData?.first_name;
    let last_name = reqData?.last_name;
    let email = reqData?.email;
    let phone = reqData?.phone;
    let status = reqData?.status;
    let username = reqData?.username;
    let gender = reqData?.gender;
    let password = reqData?.password

    const result = await createUser([id, first_name, last_name, email, phone, password, status, username, gender]);
    res.status(200).send("User Created successfully");
});

export default router;