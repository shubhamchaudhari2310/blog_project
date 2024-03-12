const express = require('express')
const app = express()
const env = require("dotenv")
env.config({path:"./config/.env"})
// db

const db = require("./config/db")
db()
const cors = require('cors')
app.use(cors())
// router
const blog = require("./routes/blog-router")

app.use(express.json())

app.use("/api/v1/blogs",blog)

app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT}`))