const dotenv = require('dotenv')
const express = require("express")
const body_parser = require("body-parser")


const SignIn = require("./api/SignIn")
const secure = require("./api/secure")
const refreshToken = require("./auth/refreshToken")
const app = express()
app.use(body_parser.json())
dotenv.config()

app.use(SignIn);
app.use(secure);
app.use(refreshToken)

app.listen(process.env.PORT,()=>{
    console.log("Running at 3500")
})
 