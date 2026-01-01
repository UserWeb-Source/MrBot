import mongoose from "mongoose";

export default function conDatabase(connectionURI) {
    mongoose.connect(connectionURI
    ).then(() => {
        console.log("Connected to database");
    }).catch((err) => {
        console.log("Error connecting to database");
        console.log(err);
    })
}

