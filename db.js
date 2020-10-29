const mongoose =require('mongoose')
const conectDB=()=>{
    mongoose.connect('',{useNewUrlParser:true,useUnifiedTopology:true},(error)=>{
        if (error){
            console.log('Error: ',error)
        }else{
            console.log('Nos estamos conectando a la BD')
        }

    })

}
module.exports={conectDB}