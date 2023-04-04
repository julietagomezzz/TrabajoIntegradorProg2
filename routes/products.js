var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');

/* GET users listing. */
router.get('/detalle/id/:id', productsController.detalle);
router.get('/', productsController.index);


module.exports = router;
