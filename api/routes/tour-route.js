import express from 'express';
const router = express.Router();
import { getAllTours, getTourWithID } from '../Controller/tour.js';
import { createTourValidation } from '../Schema/tour-schema.js';

router.get("/tour", async (req, res) => {
    try {
        const result = await getAllTours();
        res.status(200).send(
            JSON.stringify({
                message: "All tours fetched succefully",
                data: result
            })
        );
    } catch (error) {
        res.status(404).json({
            error: error,
            status: "fail",
            statusCode: 404
        })
    }
});

router.get("/tour/get/id/:id", async (req, res) => {

    try {
        const result = await getTourWithID(req?.body?.id);
        res.status(200).send(
            JSON.stringify({
                message: "All tours fetched succefully",
                data: result
            })
        );
    } catch (error) {
        res.status(404).json({
            error: error,
            status: "fail",
            statusCode: 404
        })
    }
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

    try {
        await createTourValidation.validateAsync({ ...req?.body })
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
        res.status(200).send("Tour created successfully", result);
    } catch (error) {
        res.status(404).json({
            error: error,
            status: "fail",
            statusCode: 404
        })
    }
})

export default router;