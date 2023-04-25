import express, { json, urlencoded } from "express";
import cors from "cors";
import "dotenv/config";
import db from "./app/models/index.js";
import ProfessorRoute from "./app/routes/professor.route.js";

const app = express();
const PORT = process.env.PORT || 3000;



// middlewares
app.use(cors({ origin: "http://127.0.0.1:3001" }));
app.use(json());
app.use(urlencoded({ extended: true }));

// connect to database

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((err) => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

ProfessorRoute(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
