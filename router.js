const express = require('express');

const userController = require('./controllers/userController');

const router = express.Router();

router.get('/', userController.home);
router.post('/register', userController.register);

module.exports = router;
