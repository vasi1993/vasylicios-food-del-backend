import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect("mongodb+srv://vasy:vasilake@cluster0.t550mnc.mongodb.net/food-del").then(()=> console.log("DB Connected"))
}