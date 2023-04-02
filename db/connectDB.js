import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()

export const connectDB = () => {
    const MONGO_URL = process.env.MONGO_URL
    mongoose.connect(MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("MongoDB connected"))
        .catch(err => console.log(err))
}

