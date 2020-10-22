const bodyParser = require('body-parser')
const mongoose= require('mongoose')
const gengeSchema= new mongoose.Schema({

    name: {type:String, require:true},
    status: { type:Boolean, require:true}
})
module.exports=mongoose.model('Genre',gengeSchema)