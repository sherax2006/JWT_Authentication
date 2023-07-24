const dotenv = require('dotenv')
const express = require("express")
const body_parser = require("body-parser")

const cors = require('cors')
const SignIn = require("./api/SignIn")
const secure = require("./api/secure")
const refreshToken = require("./auth/refreshToken")
const app = express()
app.use(body_parser.json())
dotenv.config()






const whiteList = ['https://www.google.com','www.yoursite.com','http://127.0.0.1:3000']

const corsOptions = {
    origin: (origim,callback)=>{

        // Inner Origin is the website that call this Routes
        if(whiteList.indexOf(origin) !== -1 || !origin){
            callback(null,true)

        }else{
            callback(new Error('Not Allowed BY CORS'))
        }
    },
    optionsSuccessStatus : 200
}


app.use(cors(corsOptions))

app.use(SignIn);
app.use(secure);
app.use(refreshToken)


// Error Handler Function that is encountered due to Website 


app.use(function (err,req,res,next){
    console.error(err.stack)
    res.status(500).send(err.message)
})



app.listen(process.env.PORT,()=>{
    console.log("Running at 3000")
})
 