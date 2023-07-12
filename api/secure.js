const {Router} = require('express')
const router = Router()

const AuthenticateToken = require("../auth/AuthenticateToken")


router.get('/api/secure', AuthenticateToken,(req,res) => {
    // all secured routes goes here  
    res.send('I am secured...')
})
 
module.exports = router