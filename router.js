const express = require('express');

const postController = require('./controllers/postController');
const userController = require('./controllers/userController');

const router = express.Router();

// user related routes
router.get('/', userController.home);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

// post related routes
router.get('/create-post', userController.mustBeLoggedIn, postController.viewCreateScreen);
router.post('/create-post', userController.mustBeLoggedIn, postController.create);

module.exports = router;
