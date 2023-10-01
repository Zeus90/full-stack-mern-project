import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv"
import postRoutes from "./routes/posts.js";


const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(bodyParser.json({limit: "30mb", extended: true}));
//order of code, cors() first then routes
app.use(cors());
app.use("/posts", postRoutes);

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL).then(()=>{
    app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
}).catch((err)=> console.log(err.message));
