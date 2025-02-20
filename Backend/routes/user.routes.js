const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require('../controllers/user.controller');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid email') ,
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long') ,
    body('fullName.firstname').isLength({min:3}).withMessage('First name must be at least 3 characters long') ,
    ///body('fullName.lastname').isLength({min:3}).withMessage('Last name must be at least 3 characters long') ,
], userController.registerUer
);





module.exports = router ;