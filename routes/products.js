var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');

/* GET users listing. */

router.post('/detalle/id/:id', productsController.agregarComentario)
router.get('/detalle/id/:id', productsController.detalle);
router.get('/add', productsController.add);
router.post('/add', productsController.postAdd);
router.get('/edit', productsController.edit);
router.post('/postEdit', productsController.postEdit);
router.post('/postdelete', productsController.postDelete);


module.exports = router;
