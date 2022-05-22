const express = require('express');
const app = express();
const router = express.Router();
const { login, register } = require('../controllers/usersController');

router.post('/login', login);
router.post('/register', register);

module.exports = router;