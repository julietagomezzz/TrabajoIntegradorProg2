var express = require('express');
const usersController = require('../controllers/usersControllers');
var router = express.Router();

/* GET users listing. */
router.get('/profile', usersController.profile);
router.grt('/editprofile', usersController.editprofile)

module.exports = router;
