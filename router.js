const express = require('express');

const postController = require('./controllers/postController');
const userController = require('./controllers/userController');

const router = express.Router();

// user related routes
router.get('/', userController.home);
router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', userController.logout);

// profile related routes
router.get('/profile/:username', userController.ifUserExists, userController.profilePostsScreen);

// post related routes
router.get('/create-post', userController.mustBeLoggedIn, postController.viewCreateScreen);
router.post('/create-post', userController.mustBeLoggedIn, postController.create);
router.get('/post/:id', postController.viewSingle);
router.get('/post/:id/edit', postController.viewEditScreen);
router.post('/post/:id/edit', postController.edit);

module.exports = router;
