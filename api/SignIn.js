

const {Router} = require('express') 
const router = Router();
const jwt = require('jsonwebtoken')
const config = require("../config")


router.get("/api/SignIn", (req,res)=>{
    
    const body = req.body;
    const {username,password}= body;
    const user = {
        "username":username,
        "password":password
    }
    

    const access_token = jwt.sign(user, config.secret, { expiresIn: config.accessTokenExpiration})
    const refresh_token = jwt.sign(user, config.secret, { expiresIn: config.refreshTokenExpiration})

    const response = {
        "status": "Logged In",
        "access-token": access_token ,
        "refresh-Token": refresh_token,
    }

    res.status(200).json(response)
})


module.exports= router
