var express = require('express');
var router = express.Router();
const controller = require('../controllers/articleController')

/* GET users listing. */
router.get('/', controller.findAll);

router.get('/:id', controller.findOne);

router.post('/', controller.create);

router.put('/:id', controller.update);

router.get('/author/:authorId', controller.findByAuthor);

router.get('/category/:category', controller.findByCategory);

router.delete('/:id', controller.delete)

module.exports = router;
