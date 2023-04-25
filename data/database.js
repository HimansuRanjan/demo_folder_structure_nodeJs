import mongoose from "mongoose";

// DB connection
export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backendAPI",
    })
    .then(() => console.log("Database Connected!!"))
    .catch((e) => {
      console.log(e);
    });
};
