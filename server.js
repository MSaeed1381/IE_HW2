import express, { json, urlencoded } from "express";
import rateLimit from 'express-rate-limit';
import cors from "cors";
import "dotenv/config";

import db from "./app/models/index.js";
import ActivateRoutes from "./app/routes/index.js";

const PORT = process.env.PORT || 3000;
const app = express();

// middlewares
app.use(cors({ origin: "http://127.0.0.1:3001" }));
app.use(rateLimit({
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
}));
app.use(json());
app.use(urlencoded({ extended: true }));


try {
    // connect to database and listen at PORT
    const connectToDB = db.mongoose.connect(db.url, db.option);
    const listen = app.listen(PORT);

    await Promise.all([connectToDB, listen]);
    console.log(
        `connected to database, Server is running at http://localhost:${PORT}`
    );
} catch (err) {
    console.log(
        err.message ||
            "can't Connect to database or Open a tcp socket connection"
    );
}

// activate all routes
ActivateRoutes(app);
