// routes : define api list and its controller

const path = require('path');

const express = require('express');

const user_controller = require('../controllers/users');

const router = express.Router();

// /users => GET
router.get('/users', user_controller.getAllUsers);

// /users => POST
router.post('/add-user', user_controller.addUser);

module.exports = router;