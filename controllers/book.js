const BookModel =require('../models/book')
exports.create=(req,res)=>{

if (Object.entries(req,res).length==0){
    return res.status(400).send({
        message:'Todos los datos son obligatorios'

    })
}
 const book= new BookModel({
    name:req.body.name,
    author:req.body.author,
    pageNumbre:req.body.pageNumbre,
    publisher:req.body.publisher,
    publicationDate:req.body.publicationDate,
    genre: req.body.genre
})
book.save()
.then(
    (dataBook)=>{
    res.send(dataBook)
}).catch((error)=>{
    return res.status(500).send({
        message:error.message
    })

})

}