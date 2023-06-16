import express from 'express';
import multer from 'multer';
import cors from 'cors';

const app = express();
app.use(express());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
const router = express.Router();
import { getAllTours, getTourWithID, createTour, getDestList, getFilteredList } from '../Controller/tour.js';
import { createTourValidation } from '../Schema/tour-schema.js';

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads")
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
}).single('image');

router.get("/tour", async (req, res) => {
    try {
        const result = await getAllTours();
        res.status(200).send(
            JSON.stringify({
                message: "All tours fetched succefully",
                status: "success",
                statusCode: 200,
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
        const result = await getTourWithID(req?.params?.id);
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

router.post("/tour/create/", upload, async (req, res) => {
    // console.warn(req.file.filename);
    let reqdata = req?.body;

    let name = reqdata?.name;
    let image = req?.file.filename;
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
    let status = reqdata?.status

    try {
        await createTourValidation.validateAsync({ ...req?.body })
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
        // console.log(result);
        res.status(200).send(result);
    } catch (error) {
        res.status(404).json({
            error: error,
            status: "fail",
            statusCode: 404
        })
    }
})

router.get('/destinationList/get', async (req, res) => {
    try {
        const destList = await getDestList();
        res.status(200).json({
            status: "success",
            statusCode: 200,
            message: "Destination list fetched succefully",
            data: destList
        })
    } catch (error) {
        res.status(404).json({
            error: error,
            status: "fail",
            statusCode: 404
        })
    }    
});

router.post('/tour/filter', async (req, res) => {
    let type = req?.body?.type;
    let filterOptions = req?.body?.list;

    try {
        const data = await getFilteredList(type, filterOptions);
        if(data) {
            res.status(200).json({
                status: "success",
                statusCode: 200,
                message: "Filtered list fetched succefully",
                data: data
            })
        }
    } catch (error) {
        res.status(404).json({
            error: error,
            status: "fail",
            statusCode: 404
        });
    }
})
export default router;