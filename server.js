import { app } from "./app.js";
import { connectDB } from "./data/database.js";

// Connceting to DB
connectDB();

app.listen(process.env.PORT, ()=>{
    console.log("App is working!");
});