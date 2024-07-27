import mongoose from "mongoose";

export const connectDB = () => {
    mongoose
        .connect(process.env.MONGO_URL, {
            dbName: "backendapi",
        })
        .then((c) => console.log(`Database Connected on ${c.connection.host}`))
        .catch((e) => console.log(e));
}

