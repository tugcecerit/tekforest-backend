const router = require('express').Router()
const { users } = require('../controllers')

router.get('/', users.register)
router.post('/:id', users.signin)
router.put('/:id', users.signout)

module.exports = router;