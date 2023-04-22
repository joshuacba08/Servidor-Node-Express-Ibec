const { Router } = require('express');
const { createUser, login } = require('../controllers/auth.controllers');

const router = Router();

// crear usuario   http://localhost:8080/api/v1/auth/
router.post('/',createUser)

// login de usuario http://localhost:8080/api/v1/auth/login
router.post('/login',login)

// exporto mi router para que pueda ser usado
module.exports = router;