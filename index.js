const express= require('express')//estoy utilizando express en mi proyecto
const cors= require('cors')
const bodyParser= require('body-parser')
const {conectDB}=require('./db')
const app=express()//se convierte la constante express en objeto
app.use(cors())
app.use(bodyParser.json())
conectDB()
require('./routes/user')(app)
require('./routes/genre')(app)
require('./routes/book')(app)
app.listen(3000,()=>{
    console.log('Bienvenidos al servidor')
})