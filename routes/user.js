const express = require('express');
const validateRequest = require('../middleware/validaterequest');
const {userSchema , loginSchema} = require('../validation/user');
const {registerUser , loginUser} = require('../controllers/User');
const router = express.Router() ; 




router.post('/registeruser' , validateRequest(userSchema) , registerUser ) ; 

router.post('/loginuser' , validateRequest(loginSchema) , loginUser ) ;








module.exports = router; 