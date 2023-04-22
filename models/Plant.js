const mongoose = require('mongoose')

const PlantSchema = new mongoose.Schema({
    commonName: String,
    latinName: String,
    otherNames: String,
    defaultImage: String,
    category: String,
    climat: String,
    family: String,
    origin: String,
    nickname: String,
    image: String,
    description: String,
    size: String,
})

const Plant = mongoose.model('Plant', PlantSchema);

module.exports = Plant;