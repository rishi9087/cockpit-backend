const express = require('express')
const app = express()
const port = 3000
const router = express.Router();
const userRoutes =  require("./src/Routes/UserRoute")
const mongoose = require('mongoose');
const User =  require("./src/model/UserModel")
// const  createUser =  require("./src/controller/UserController.js")
 


const dbConnection =  async() => {
  await  mongoose.connect('mongodb://127.0.0.1:27017/cockpit');
}

dbConnection().then(() => console.log("Database Connected")).catch(err => console.log(err))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/hello', (req, res) => res.json({ message: 'Hello World!'}))
app.use('/', userRoutes);

// app.post("/newUser", async (req, res)  => {
//     const { name, email } = req.body

//     const newUser = await User.create({
//         name,
//         email
//     })

//     res.json({
//         status: 200,
//         message: "New User Created",
//         data: newUser
//     })

// })


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

