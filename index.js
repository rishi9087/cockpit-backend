const express = require('express')
const app = express()
const port = 3000
const userRoutes =  require("./src/Routes/UserRoute")
const questionRoutes = require("./src/Routes/questionsRoute")
const syllabusRoutes = require("./src/Routes/syllabusRoute")
const mongoose = require('mongoose');
const User =  require("./src/model/UserModel")

const dbConnection =  async() => {
  await  mongoose.connect('mongodb://127.0.0.1:27017/cockpit');
}

dbConnection().then(() => console.log("Database Connected")).catch(err => console.log(err))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', userRoutes);
app.use('/', questionRoutes);
app.use('/', syllabusRoutes)

app.listen(port, () => console.log(`Example app listening on port ${port}`))
