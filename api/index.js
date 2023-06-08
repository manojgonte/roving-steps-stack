import express from 'express';
import cors from 'cors';
import tour from './routes/tour-route.js';
import user from './routes/users-route.js';
import tourItinerary from './routes/tour-itinerary-route.js';
import auth from './routes/auth-route.js'

const PORT = 5000;
const app = express();
app.use(express());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/', auth);
app.use('/', tour);
app.use('/', user);
app.use('/', tourItinerary);

app.all("*", (res, req, next) => {
    const err = new Error(`Unable to detect ${res?.originalUrl} on server`);
    err.statusCode = 404,
    err.status = "fail"

    next(err);
});

app.use((error, req, res, next) => {
    error.statusCode = error.statusCode || 404;
    error.status = error.status || "fail";

    res.status(error.statusCode).json({
        status: error.statusCode,
        message: error.message
    })
})

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});

export default app;