const jwt = require('jsonwebtoken')
const config = require('../config')

function authenticateToken(req, res, next) {
    const token = req.headers.access_token;

  
    if (!token) {
      return res.status(401).json({ error: 'UnAuthorized User' });
    } 
    jwt.verify(token, config.secret, (err, decoded) => { 
      if (err) {

        return res.status(403).json({ error: 'Invalid access token' });
      }
      const {username,password} = decoded

      // Attach the user ID to the request for further use
      req.user = {username,password}   
      next();
    });
  }  


module.exports = authenticateToken
