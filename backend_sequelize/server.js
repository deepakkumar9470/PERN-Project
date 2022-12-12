require('dotenv').config()
const express  = require('express')

const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 8000
const db = require('./app/models')
const stuRoute = require('./app/routes/student')

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use(cors())
// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/api', stuRoute)
app.get('/',(req,res)=>{
   res.send('Hello Squelize PERN!')
})

app.listen(PORT,()=>{
    console.log(`Server started at post ${PORT}`)
})