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
    console.log(req?.body);
    let reqdata = req?.body;

    let name = reqdata?.name;
    let image = reqdata?.image;
    let type = reqdata?.type;
    let destination = reqdata?.destination;
    let short_desc = reqdata?.description;
    let description = reqdata?.description;
    let from_date = reqdata?.from_date;
    let end_date = reqdata?.end_date;
    let adult_price = reqdata?.adult_price;
    let child_price = reqdata?.child_price;
    let days = reqdata?.days;
    let nights = reqdata?.nights;
    let amenities = reqdata?.amenities;
    let inclusions = reqdata?.inclusions;
    let exclusions = reqdata?.exclusions;
    let note = reqdata?.note;
    let is_popular = reqdata?.is_popular
    let status = '0'

    const result = await createTour([
        name,
        image,
        type,
        destination,
        short_desc,
        description,
        adult_price,
        child_price,
        from_date,
        end_date,
        days,
        nights,
        amenities,
        inclusions,
        exclusions,
        note,
        is_popular,
        status
    ]);

    res.status(200).send({result:result, message:"Tour created successfully"});
})

export default router;