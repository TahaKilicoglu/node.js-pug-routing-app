const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const signupController = require('../controllers/signupController');

// Giriş sayfası rotası
router.get('/login', loginController.loginPage);

// Giriş işlemi rotası
router.post('/login', loginController.login);

// Kayıt sayfası rotası
router.get('/signup', signupController.signupPage);

// Kayıt işlemi rotası
router.post('/signup', signupController.signup);

module.exports = router;
