const mongoose = require("mongoose");
require("dotenv").config();

const {DATABASE_URL} = process.env;

exports.connect = () => {
    mongoose.connect(DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connection Success"))
    .catch((error) => {
        console.log(error);
        console.log("DB Connection Failed");
        process.exit(1);
    })
}