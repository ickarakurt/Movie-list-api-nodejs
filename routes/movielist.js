const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const app = express();
app.set('api_secret_key',process.env.api_secret_key);


router.get('/', function(req, res, next) {
    res.json({data : "hoşgeldin"});
});


module.exports = router;