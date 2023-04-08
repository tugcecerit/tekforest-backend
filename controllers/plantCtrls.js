const db = require('../models')

const getPlant = (req, res) => {
    db.Plant.find({})
    .then((foundPlant) => {
        if(!foundPlant){
            res.status(404).json({message: 'Cannot find plant'})
        } else {
            res.status(200).json({data: foundPlant})
        }
    })
}

const createPlant = (req, res) => {
    db.Plant.create(req.body)
    .then((createdPlant) => {
        if(!createdPlant){
            res.status(400).json({message: 'Cannot create plant'})
        } else {
            res.status(201).json({data: createdPlant, message: 'Plant created'})
        }
    })
}

const updatePlant = (req, res) => {
    db.Plant.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedPlant) => {
        if(!updatedPlant){
            res.status(400).json({Message: 'Could not update plant'})
        } else {
            res.status(200).json({Data: updatedPlant, Message: 'Plant updated'})
        }
    })
}

const deletePlant = (req, res) => {
    db.Plant.findByIdAndDelete(req.params.id)
    .then((deletedPlant) => {
        if(!deletedPlant){
            res.status(400).json({Message: 'Could not delete plant'})
        } else {
            res.status(200).json({Data: deletedPlant, Message: 'Plant deleted'})
        }
    })
}

module.exports = {
    getPlant,
    createPlant,
    updatePlant,
    deletePlant
}