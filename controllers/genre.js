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
        GenreModel.findByIdAndUpdate(req.params.id,user,{new:true})
        .then((genre) => {
            res.send(genre)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
    }
    exports.getAll = (req , res) => {
        GenreModel.find()
        .then((genre) => {res.send(genre)})
        .catch(
            (error) => {
                res.status(500).send({
                    message: error.message
                })
            }
        )
    }
    
    
    /**Metodo para obtener un user por el id
     * @param {*} req => Todo lo que se recibe
     * @param {*} res => La respuesta que se devolverá
    */
    
    exports.getOne = (req , res) => {
       GenreModel.findById(req.params.id)
        .then((genre) => {res.send(genre) } )
        .catch(
            (error) =>{
                res.status(500).send({
                    message: error.message
                })
            }
        )
    }