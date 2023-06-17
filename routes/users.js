var express = require('express');
const usersController = require('../controllers/usersControllers');
var router = express.Router();

/* GET users listing. */
router.get('/profile/:id', usersController.profile);
router.post('/profile', usersController.profile);
router.get('/editprofile', usersController.editprofile);
router.post('/postEditProfile', usersController.Posteditprofile);
router.post('/logout', usersController.logout);



module.exports = router;
