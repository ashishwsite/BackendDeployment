require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/html',(req,res)=>{
 res.send('<h1>this is context of html</h1> ')
})
console.log("chai and code ")
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})