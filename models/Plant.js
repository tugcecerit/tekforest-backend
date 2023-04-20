const mongoose = require('mongoose')

const PlantSchema = new mongoose.Schema({
    commonName: String,
    scientificName: String,
    image: String,
    description: String,
    category: String,
    waterScale: Number,
    sunScale: Number,
    temperature: Number,
    humidity: Number,
    maintenance: String,
    size: String
})

const Plant = mongoose.model('Plant', PlantSchema);

module.exports = Plant;