const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller')


//GET method to obtain all the users
router.get("/", usersController.showAllUsers)

//GET method to obtain a user through ID
router.get("/:userId", usersController.showUserById)

//POST method
router.post("/", usersController.addUser)

//POST method by edit user
router.post("/:userId", usersController.editUser)

//Delete a user 
router.get("/:userId/delete", usersController.deleteUser)


module.exports = router;