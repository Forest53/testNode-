const express = require('express')
const mongoose = require('mongoose')
const exphnd= require('express-handlebars')
const todoRoutes = require('./routes/todos')

const PORT=process.env.PORT||3000

const app = express()
const hbs = exphnd.create({
    defaultLayout: 'main',
    extname:'hbs'
})

app.engine('hbs',hbs.engine)
app.set('view engine','hbs')
app.set('views','views')

app.use( todoRoutes )

async function start(){
    try{
        await mongoose.connect(
            'mongodb+srv://Ivan:qwerty123y@cluster0.3zyxl.mongodb.net/myFirstDatabase?todos',
            {
            useNEwUrlParser:true,
            useFindAndModify:false
        })
        app.listen(PORT,()=>{
            console.log('Server has been started...')
        })

    } catch(e) {
        console.log(e)
    }
}
start()
