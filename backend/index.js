const express = require('express')
const app = express()
const dotenv= require("dotenv")
const mongoose = require("mongoose")
const cors = require("cors")

dotenv.config()

//connect to db
mongoose.connect(process.env.DB_CONNECT,
{useUnifiedTopology:true,useNewUrlParser:true},
()=>console.log("connected to db"))

//import routes
const listinRoutes=require("./routes/listing")
const userRoutes=require("./routes/user")

//middlewares
app.use(express.json())
app.use(cors())

//route middlewares
app.use("/api/listings",listinRoutes)
app.use("/api/user",userRoutes)

app.listen(4000,()=>console.log('App listening on port 4000!'))
