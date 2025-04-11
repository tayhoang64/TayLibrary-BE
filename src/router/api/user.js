const express = require('express');
const IsLogin = require('../../middlewares/IsLogin');
const userController = require('../../controllers/api/userController');
const router = express.Router();

router.get('/current', IsLogin, userController.getCurrentUser);
router.get('/', userController.getAllUser);
module.exports = router;