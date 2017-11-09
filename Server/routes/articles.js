var express = require('express');
var router = express.Router();
const controller = require('../controllers/articleController')

/* GET users listing. */
router.get('/', controller.findAll);

router.get('/:id', controller.findOne);

router.post('/', controller.create);

module.exports = router;
