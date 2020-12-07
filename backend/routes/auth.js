const express = require('express')
const router = express.Router()

const { signup: auth } = require('../controllers/auth')

// validators
const { runValidation } = require('../validators')
const { userSignupValidator } = require('../validators/auth')

router.post('/signup', userSignupValidator, runValidation, auth)

module.exports = router
