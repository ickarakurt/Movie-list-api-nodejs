const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

    

router.get('/', function(req, res) {
    Movie.find({},'title',(err,data)=>{
       res.json(data);
    });
});
        

router.post('/add',(req,res)=>{

    const title = req.body.title;
    const username = "cem44";
    const movieAdd = new Movie({
        title : title,
        username : username
    });

    movieAdd.save((err)=>{
        if(err){
            res.json(err);
        }else{
            res.json({status : true});
        }
    })

});

router.delete('/remove' ,(req,res) => {
        Movie.remove({ title : req.body.title }, (err , data) => {
            if(err){
                res.json({status : false});
            }
            res.json({status : true})
        });
});

module.exports = router;