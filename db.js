const mongoose =require('mongoose')
const conectDB=()=>{
    mongoose.connect('mongodb+srv://yeceniaGM:102314yeya@yecenia.tdhjw.mongodb.net/KeyCodeBook?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true},(error)=>{
        if (error){
            console.log('Error: ',error)
        }else{
            console.log('Nos estamos conectando a la BD')
        }

    })

}
module.exports={conectDB}