const express = require('express')
const app = express()
const path = require('path')
const userRouter = require('./Routes/user-route')
const adminRouter = require('./Routes/admin-route')
const PORT = 5505

app.use(express.json())
app.use(express.static(path.join('public')))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/',userRouter)
app.use('/admin', adminRouter)

app.get('/home', (req, res) => {
    res.render('home')
})

app.listen(PORT,()=>console.log(`http://localhost:${PORT}/home`))