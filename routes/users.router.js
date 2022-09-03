const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller')


//GET method
router.get("/", usersController.showUsers)

//POST method
router.post("/", usersController.addUser)


module.exports = router;