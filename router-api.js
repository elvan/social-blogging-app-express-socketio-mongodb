const cors = require('cors');
const apiRouter = require('express').Router();

const postController = require('./controllers/postController');
const userController = require('./controllers/userController');

apiRouter.use(cors());

apiRouter.post('/login', userController.apiLogin);
apiRouter.post('/create-post', userController.apiMustBeLoggedIn, postController.apiCreate);
apiRouter.delete('/post/:id', userController.apiMustBeLoggedIn, postController.apiDelete);
apiRouter.get('/postsByAuthor/:username', userController.apiGetPostsByUsername);

module.exports = apiRouter;
