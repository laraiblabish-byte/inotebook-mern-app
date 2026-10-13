const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/my-app";

const connectToMongo = () => {
    mongoose.connect(mongoURI).then(() => {
        console.log("Connected to Mongo Successfully");
    });
}

module.exports = connectToMongo;