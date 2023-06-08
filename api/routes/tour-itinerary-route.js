import express from "express";
import { createitinerary, deleteIntinerary, getAllIntineraryTour, getIntinerary, updateIntinerary } from "../Controller/tour-itinerary.js";
import { createItineraryValidation } from "../Schema/tour-itinerary-schema.js";
const router = express.Router();

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

router.post('/tour-itinerary/create-itinerary', async (req, res) => {
    const reqdata = req?.body;

    let tour_id = reqdata?.tour_id
    let title = reqdata?.title
    let day = reqdata?.day
    let description = reqdata?.description
    let activity = reqdata?.activity
    let stay = reqdata?.stay
    let food = reqdata?.food
    let status = reqdata?.status
    let places_to_visit = reqdata?.places_to_visit
    let travel = reqdata?.travel
    let image = reqdata?.image
    let overview = reqdata?.overview
    let travel_options = reqdata?.travel_options

    try {
        
        await createItineraryValidation.validateAsync({ ...req?.body});
        const result = await createitinerary([
            tour_id,
            title,
            day,
            description,
            activity,
            stay,
            food,
            status,
            places_to_visit,
            travel,
            image,
            overview,
            travel_options
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
                    error: result
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