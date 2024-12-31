import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 4000

const URI = process.env.MongoDBURI;
// connect to mongodb
try{
  mongoose.connect(URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true
  })
  console.log('connected to mongodb 1')

} catch(err){
  console.log("Error", err)
}

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})