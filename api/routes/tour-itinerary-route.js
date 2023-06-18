import express from "express";
import multer from 'multer';
import { createitinerary, deleteIntinerary, getAllIntineraryTour, getIntinerary, updateIntinerary } from "../Controller/tour-itinerary.js";
import { createItineraryValidation } from "../Schema/tour-itinerary-schema.js";
const router = express.Router();

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads")
        },
        filename: function (req, file, cb) {
            cb(null, file?.fieldname + "-" + Date.now() + ".jpg")
        }
    })
}).single('image');

router.get('/tour-itinerary/get', async (req, res) => {
    try {
        const result = await getAllIntineraryTour();
        res.status(200).send(
            JSON.stringify({
                message: "itinerary fetched successfully",
                data: result
            })
        )
    } catch (error) {
        res.status(404).json({
            error: error,
            status: "fail",
            statusCode: 404
        })
    }
});

router.get('/tour-itinerary/get/id/:id', async (req, res) => {
    try {
        const result = await getIntinerary(req?.params?.id);
        res.status(200).send(
            JSON.stringify({
                message: "Itinerary fetched successfully",
                data: result
            })
        )
    } catch (error) {
        res.status(404).json({
            error: error,
            status: "fail",
            statusCode: 404
        })
    }
});

router.post('/tour-itinerary/create-itinerary', upload, async (req, res) => {
    const reqdata = req?.body;
    console.log(reqdata);

    let activityIndex = reqdata?.activityIndex
    let tour_id = reqdata?.tour_id
    let title = reqdata?.title
    let day = reqdata?.day
    let description = reqdata?.description
    let myActivity = reqdata?.myActivity
    let stay = reqdata?.stay
    let food = reqdata?.food
    let status = reqdata?.status
    let places_to_visit = reqdata?.places_to_visit
    let travel = reqdata?.travel
    let image = reqdata?.image
    let overview = reqdata?.overview
    let travel_options = reqdata?.travel_options

    try {
        // await createItineraryValidation.validateAsync({ ...req?.body});
        const result = await createitinerary([
            tour_id,
            title,
            day,
            description,
            myActivity,
            stay,
            food,
            status,
            places_to_visit,
            travel,
            image,
            overview,
            travel_options,
            activityIndex
        ]);

        if (result?.length > 0) {
            res.status(200).send(
                JSON.stringify({
                    message: "Itinerary created successfully",
                    data: result
                })
            );
        } else {
            res.status(500).send(
                JSON.stringify({
                    message: "Something went wrong",
                    error: result,
                    statusCode: 200,
                    status: "fail"
                })
            )
        }
    } catch (error) {
        res.status(500).send(
            JSON.stringify({
                message: "Something went wrong",
                error: error,
                statusCode: 400,
                status: "fail"
            })
        )
    }

});

router.put('/itinerary/update/id/:id', async (req, res) => {
    const result = await updateIntinerary(req?.params?.id);

    if (result?.length > 0) {
        res.status(200).send(
            JSON.stringify({
                message: "Itinerary updated!",
                data: result
            })
        )
    }

});

router.delete('/itinerary/delete/id/:id', async (req, res) => {
    const result = await deleteIntinerary(req?.params?.id);
    if (result?.length > 0) {
        res.status(200).send(JSON.stringify({
            message: "Itinerary deleted successfully",
            data: result
        }))
    }
});

export default router;