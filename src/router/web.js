const express = require('express');
const router = express.Router();
const { register, login, getUserSession, requireAuth} = require("../controllers/authController");
const IsAdmin = require('../middlewares/IsAdmin');


router.use('/api', require('./api'));

  router.post("/login", login);
  
  router.post("/register", register);

module.exports = router;