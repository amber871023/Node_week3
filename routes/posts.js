var express = require('express');
var router = express.Router();
const PostsControllers = require('../controllers/postsController')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', PostsControllers.getPosts);
router.post('/',  PostsControllers.createPost);
router.delete('/', PostsControllers.deleteMany);
router.patch('/:id', PostsControllers.updatePost);
router.delete('/:id', PostsControllers.deletePost);

module.exports = router;
