const GenreModel=require('../models/genre')
exports.create=(req,res)=>{

    if (Object.entries(req.body).length==0) {
        return res.status(400).send({
            message: 'Todos los campos son obligatorios.'
        })
    }

    const genre = new GenreModel({
        name: req.body.name,
        status: req.body.status,
    })
    genre.save()
    .then(
        (dataGenre)=>{
        res.send(dataGenre)
    }).catch((error)=>{
        return res.status(500).send({
            message:error.message
        })

    })
} 

    exports.update=(req,res)=>{
        if (Object.entries(req.body).length==0) {
            return res.status(400).send({
                message: 'los datos a actualizar deben estar llenos.'
            })
        }
        const genre={
            name: req.body.name,
            status: req.body.status,
        }
        UserModel.findByIdAndUpdate(req.params.id,user,{new:true})
        .then((userUpdate) => {
            res.send(userUpdate)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
    }
