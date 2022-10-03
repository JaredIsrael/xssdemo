const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const awssdk = require('aws-sdk')
const { readFile, readFileSync } = require('fs')
const { rejects } = require('assert')
const { resolve } = require('path')
const { response } = require('express')
const { v4: uuidv4} = require('uuid')
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
    const bufferedText = Buffer.from(req.body.data, 'utf8')
    const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: uuidv4(),
        Body: bufferedText
    }

    s3.upload(params, (err, data) => {
        if(err){
            throw err;
        }
    })

    res.send({
        message:`Submitted ${req.body.data} form sucessfully`
    })

});

app.listen(process.env.PORT || 8081)