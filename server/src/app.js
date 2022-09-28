const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const awssdk = require('aws-sdk')
const { readFile, readFileSync } = require('fs')
const { rejects } = require('assert')
const { resolve } = require('path')
const { response } = require('express')
const app = express()
const s3 = new awssdk.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY
})

require('dotenv').config()

app.use(morgan('combined'))
app.use(bodyParser.json())
// CORS can be a security vulnerability, look into if this should be used
app.use(cors())

app.post('/submit', (req, res) => {
    let response = req.body.data
    const file = readFileSync(__dirname+'/t.txt')
    const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: 't',
        Body: file
    }
    s3.upload(params, (err, data) => {
        if(err){
            throw err;
        }
    })

    res.send({
        message:`Submitted ${response} form sucessfully`
    })

});

app.listen(process.env.PORT || 8081)