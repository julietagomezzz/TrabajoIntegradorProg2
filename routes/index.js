var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.index)
router.get('/login', indexController.login)
router.post('/login', indexController.loginPost)
router.get('/register', indexController.register)
router.post('/register',indexController.postRegister)
router.get('/results', indexController.results)
router.get('/results-user', indexController.searchresultsUser)


module.exports = router;