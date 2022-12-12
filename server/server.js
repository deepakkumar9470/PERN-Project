require('dotenv').config()
const express  = require('express')

const app = express()
const cors = require('cors')
const todoRoute = require('./routes/todo')
const PORT = process.env.PORT || 8000
app.use(cors())
app.use(express.json())

app.use('/api', todoRoute)


app.get('/',(req,res)=>{
   res.send('Hello PERN!')
})

app.listen(PORT,()=>{
    console.log(`Server started at post ${PORT}`)
})