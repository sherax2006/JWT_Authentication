

const {Router} = require('express') 
const router = Router();
const jwt = require('jsonwebtoken')
const config = require('../config')


router.get("/auth/refershToken", (req,res)=>{
    
    const refreshToken= req.headers.refresh_token; 
    jwt.verify(refreshToken, config.secret, (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: 'Invalid refresh token' });
        }
                
        // Refresh token is valid
        // Generate a new access token
        const accessToken = jwt.sign({ user: decoded.user }, config.secret, { expiresIn: config.accessTokenExpiration});
    
        // Return the new access token to the client
        res.json({ accessToken });
      });
    });
    
    
     
module.exports= router
