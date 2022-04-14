import mongoose from "mongoose";

let MONGODB_URI = `${process.env.MONGODB_URI}`;

const connectDB = async () => {
 return mongoose
    .connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   socketTimeoutMS: 30000,
    })
    .then(() => {
      console.log("connected to DB");
    })
    .catch((err) => {
      console.error("Error message - ", err.message);
      process.exit(1);
    });
};

export default connectDB;
