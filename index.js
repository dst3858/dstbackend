
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/news',(req,res)=>{
    res.send('this is news')
})

app.get('/login',(req,res)=>{
    res.send('<h1>this is login page</h1>')
}

)

app.get('/info',(req,res)=>{
    res.send('<h2> this is info page</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})