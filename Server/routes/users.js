var express = require('express');
var router = express.Router();
const controller = require('../controllers/userController')

/* GET users listing. */
router.get('/', controller.findAll);

router.post('/', controller.register);

router.post('/', controller.login);

module.exports = router;
