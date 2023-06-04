import express from 'express';
import cors from 'cors';
import tour from './routes/tour-route.js';
import user from './routes/users-route.js';

const PORT = 5000;
const app = express();
app.use(express());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use('/', tour);
app.use('/', user);

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});

export default app;