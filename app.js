const express = require('express')
const app = express()
const path = require('path')
const dotenv=require('dotenv').config()
const userRouter = require('./Routes/user-route')
const PORT = process.env.PORT

app.use(express.json())
app.use(express.static(path.join('public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/',userRouter)

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(PORT,()=>console.log(`http://localhost:${PORT}`))