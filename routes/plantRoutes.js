const router = require('express').Router()
const { plantCtrl } = require('../controllers')

router.get('/', plantCtrl.getPlant)
router.post('/', plantCtrl.createPlant)
router.put('/:id', plantCtrl.updatePlant)
router.delete('/:id', plantCtrl.deletePlant)

module.exports = router;