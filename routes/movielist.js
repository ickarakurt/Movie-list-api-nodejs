const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

    

router.get('/', function(req, res) {
    const username = req.decode.username;
    Movie.find({ username : username },'title category',(err,data)=>{
       res.json(data);
    });
});




router.post('/add',(req,res)=>{

    const { title , category } = req.body;
    const username = req.decode.username;
    const movieAdd = new Movie({
        title : title,
        category : category,
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
        const username = req.decode.username;    
        Movie.remove({ title : req.body.title , username : username }, (err , data) => {
            if(err){
                res.json({status : false});
            }
            res.json({status : true})
        });
});

// a to z title
router.get('/1', function(req, res) {
    const username = req.decode.username;
    Movie.find({ username : username },'title category',(err,data)=>{
       res.json(data);
    }).sort({title : 1});
});


// z to a title
router.get('/2', function(req, res) {
    const username = req.decode.username;
    Movie.find({ username : username },'title category',(err,data)=>{
       res.json(data);
    }).sort({title : -1});
});

// a to z title
router.get('/category', function(req, res) {
    const username = req.decode.username;
    Movie.find({ username : username , category : {$exists : true}},'title category',(err,data)=>{
       res.json(data);
    });
});

// a to z categpry
router.get('/category/1', function(req, res) {
    const username = req.decode.username;
    Movie.find({ username : username , category : {$exists : true}},'title category',(err,data)=>{
       res.json(data);
    }).sort({category : 1});
});


// z to a categpry
router.get('/category/-1', function(req, res) {
    const username = req.decode.username;
    Movie.find({ username : username , category : {$exists : true}},'title category',(err,data)=>{
       res.json(data);
    }).sort({category : -1});
});



router.get('/:category', function(req, res) {
    const username  = req.decode.username;
    const category = req.params.category;
    Movie.find({ username : username , category : category },'title',(err,data)=>{
       res.json(data);
    });
});


module.exports = router;