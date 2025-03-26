import express from "express";
import mongoose, { mongo } from "mongoose";
import cors from "cors";
import UserRoute from "./routes/UserRoute";

const app = express();

mongoose.connect("mongodb://localhost:27017/simple_crud");

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, () => console.log("Server up and running..."));
