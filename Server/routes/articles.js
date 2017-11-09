var express = require('express');
var router = express.Router();
const controller = require('../controllers/articleController')

/* GET users listing. */
router.get('/', controller.findAll);

router.get('/:id', controller.findOne);

router.post('/', controller.create);

router.put('/:id', controller.update);

router.get('/autho/:authorId', controller.update);

module.exports = router;
