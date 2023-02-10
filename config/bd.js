const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const env =require("./envConfig");
URL = 'mongodb+srv://sahebali3:sahebali3@saheb.s47ob79.mongodb.net/?retryWrites=true&w=majority'
const connect = async ()=>{
    try {
         await mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 5000, });
        console.log("Database Connected");
    } catch (error) {
        console.log(error.message);
        process.exit;
        
    }
}

module.exports = connect;