const express = require('express');
const router = express.Router();
const {showOrders} = require('../Controllers/showOrders')
const userController = require('../Controllers/userController')

router.get('/login');
router.post('/register', userController.register);
router.post('/login', userController.loginUser);
router.get('/logout');

module.exports = router;