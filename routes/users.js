const router = require('express').Router()
const { users } = require('../controllers')

router.post('/', users.register)
router.post('/:id', users.signin)
router.get('/:id', users.signout)

module.exports = router;