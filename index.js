const express = require('express')

const app = express()

app.use(express.json())

require('./routes/ideas.route')(app)


app.listen(8000,()=>{
    console.log("server got started at port 8000")
})