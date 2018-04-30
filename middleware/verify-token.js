const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    const token = req.headers['x-access-token'] || req.body.token || req.query.token
    if(token){
        jwt.verify(token,process.env.api_secret_key,(err,decoded) => {

            if(err){
                res.json({status : false , errror : "token not correct"});
            }else{
                req.decode = decoded;
                next();
            }
        })
    }else{
        res.json({status : false , error : "token can't find"});
    }
};