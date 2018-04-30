const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');
const app = express();

    

router.post('/', function(req, res) {
    Movie.find({},'title',(err,data)=>{
       res.json(data);
    });
});
        

router.post('/add',(req,res)=>{
    const name = req.name;
    console.log(name + username);
    const username = "cem";
});

module.exports = router;
