const express=require("express")
const cors=require("cors")
require("dotenv").config()
const { db } = require('./db/db');
const { readdirSync } = require('fs')
const app = express()

const PORT=process.env.PORT;

app.use(express.json())
app.use(cors())

readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server=()=>{
    db()
    app.listen(PORT, () => {
        console.log('listening to port:', PORT)
    })
}

server()