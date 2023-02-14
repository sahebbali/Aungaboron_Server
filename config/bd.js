const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const {DB_URL} = require("../config/envConfig.js");
console.log(DB_URL);
const connect = async ()=>{
    try {
         await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000, });
        console.log("Database Connected");
    } catch (error) {
        console.log(error.message);
        process.exit;
        
    }
}

module.exports = connect;