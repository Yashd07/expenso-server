import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-records";
import cors from "cors";

import dotenv from "dotenv";
const corsOptions = {
  origin: 'https://expenso-client-six.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the methods allowed
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify the headers allowed
  optionsSuccessStatus: 200
};

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors(corsOptions));

const mongoURI: string = process.env.MONGO_URI || "mongodb+srv://expenso:expenso123@cluster0.ciskzii.mongodb.net/";
//yash

 
  

mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECTED TO MONGODB!"))
  .catch((err) => console.error("Failed to Connect to MongoDB:", err));

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
  console.log(`Server Running on Port ${port}`);
});
