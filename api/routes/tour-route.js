import express from 'express';
const router = express.Router();
import { createTour, getAllTours, getTourWithID } from '../Controller/tour.js';

router.get("/tour", async (req, res) => {
    const result = await getAllTours();
    res.status(200).send(
        JSON.stringify({
            message: "All tours fetched succefully",
            data: result
        })
    );
});

router.get("/tour/get", async (req, res) => {
    
    const result = await getTourWithID(req?.body?.id);
    console.log(result);
    res.status(200).send(
        JSON.stringify({
            message: "All tours fetched succefully",
            data: result
        })
    );
});

router.post("/tour/create/", async (req, res) => {

    let reqdata = req?.body;

    let id = reqdata?.id;
    let name = reqdata?.name;
    let image = reqdata?.image;
    let type = reqdata?.type;
    let destination = reqdata?.destination;
    let short_desc = reqdata?.short_desc;
    let description = reqdata?.description;
    let price = reqdata?.price;
    let days = reqdata?.days;
    let nights = reqdata?.nights;
    let amenities = reqdata?.amenities;
    let inclusions = reqdata?.inclusions;
    let exclusions = reqdata?.exclusions;
    let note = reqdata?.note;
    let status = reqdata?.status

    const result = await createTour([
        id,
        name,
        image,
        type,
        destination,
        short_desc,
        description,
        price,
        days,
        nights,
        amenities,
        inclusions,
        exclusions,
        note,
        status
    ]);

    res.status(200).send("Tour created successfully");
})

export default router;