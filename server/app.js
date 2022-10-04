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
const path = require('path')
const { getSystemErrorMap, debug } = require('util')

const app = express()
const s3 = new awssdk.S3({
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    region: 'us-east-1'
})

require('dotenv').config()
require('module-alias/register')
app.use(bodyParser.json())
app.use(cors())
const staticRecs = __dirname+'/public/dist'

app.use(express.static(staticRecs))

app.get('/', function(req,res){
    res.sendFile(staticRecs+'index.html')
})

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