
require("dotenv").config();

module.exports= {
    PORT : process.env.PORT,
    DB_URL:process.env.DB_URL,
    JWT_SECRET: process.env.JWT,
    
}