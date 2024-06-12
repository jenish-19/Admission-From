var express = require('express');
var router = express.Router();
var {checkToken} = require('../Middleware/Autho');
const { Login, Register } = require('../Controller/LoginController');

const cors = require('cors');

router.use(cors());

/* GET home page. */
router.post('/Login',Login);
router.post('/register',Register);


module.exports = router;
