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
    console.log(reqdata)

    try {
        if (reqdata?.length > 0) {
            reqdata?.map(async (days) => {

                days?.activities?.map(async (activity, index) => {
                    let activityIndex = index
                    let tour_id = days.tourId
                    let title = ""
                    let day = days?.day + 1 // To run calculations smoothly on FE, Adding 1 here...
                    let description = activity?.description
                    let myActivity = activity?.activity
                    let stay = activity?.stay
                    let food = activity?.food
                    let status = ""
                    let places_to_visit = activity?.place
                    let travel = activity?.travelOption
                    let image = activity?.image
                    let overview = activity?.description
                    let travel_options = activity?.travelOption

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

                })
            })
        } else {
            res.status(200).json({
                message: "No data added",
                status: "success",
                statusCode: 200
            });
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