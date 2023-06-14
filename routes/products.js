var express = require('express');
var router = express.Router();
const productsController = require('../controllers/productsController');

/* GET users listing. */
router.get('/detalle/id/:id', productsController.detalle);
router.get('/add', productsController.add);
router.post('/detalleCommentario', productsController.detalleComment);
router.post('/add', productsController.postAdd);
router.get('/edit', productsController.edit);
router.post('/postEdit', productsController.Postedit);
router.post('/Deleted', productsController.Deleted);


module.exports = router;
