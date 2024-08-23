const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route for getting user profile
router.get('/profile', userController.getProfile);

// Route for updating user profile
router.put('/profile', userController.updateProfile);

module.exports = router;
