const router = require('express').Router()
const plantRoute = require('./plantRoutes')

router.use('/plants', plantRoute)

module.exports = router;