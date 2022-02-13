const express = require('express');
const router = express.Router()
const {getLogin} = require('../controllers/Login.controller');

router.get('/', getLogin)

module.exports = router