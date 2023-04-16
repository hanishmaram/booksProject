const express = require('express')
const api = require('./src/api')

const app = express()

app.use(express.json())

app.use("/api",api)

app.get('/',(req,res) => {
  res.send("<h1>Hello from Node.js API</h1>")
})

app.listen(1337, ()=> console.log('App listing on port 1337'))