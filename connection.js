const mongoose = require("mongoose");
require("dotenv").config();

exports.connectDb = () => {
    mongoose.connect(process.env.MONGODB_URL)
    .then( () => {console.log("DB Connection successfully")})
    .catch( (error) => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    })
}








