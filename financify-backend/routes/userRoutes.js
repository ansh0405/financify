// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/Usercontroller');

router.post('/', userController.createUser);
router.get('/:id', userController.getUser);

module.exports = router;
