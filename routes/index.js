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


router.post('/login/', function(req, res, next) {
    const {username , password } = req.body;  
    if(password && username){  
        User.findOne({ username : username }, (err, data) => {
            if(data){
                bcrypt.compare(password, data.password, function(err, answer) {
                    if(answer == true){
                    
                    const payload = {
                        username
                    };
                    const token = jwt.sign(payload,app.get('api_secret_key'),{
                        expiresIn : '365d'
                    });
                    res.json({status : true , token });

                    }else{
                        res.json({error : "wrong username or password"})
                    }
                });
            }else{
                res.json({error : "data cant find"});
            }
        });}else{
            res.json({ error : "data error"});
        }
    
});


router.post('/register', function(req, res, next) {
    const {username , password } = req.body;
    bcrypt.hash(password, 10, function(err, hash) {
        const userAdd = new User({
            username : username,
            password : hash
        });

        userAdd.save((err,data)=>{
            if(err){
                res.json(err);
            }else{
            
           
            res.json({
                status : true,
           
            });
        }
        });
    
    });
});

module.exports = router;