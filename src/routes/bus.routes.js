const express = require('express');
const router = express.Router()

const {postStop} = require('../controllers/Bus.controllers')

router.post('/', postStop)

module.exports = router