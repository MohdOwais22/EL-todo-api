import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import router from "./routes/index.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
  
  