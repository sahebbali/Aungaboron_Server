const mongoose = require ("mongoose");

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        require : true,
        qnique: true
    }
},{timestamps: true})

module.exports = mongoose.model("categorie",categorySchema);