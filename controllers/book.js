const BookModel = require('../models/book')
exports.create = (req, res) => {

    if (Object.entries(req, res).length == 0) {
        return res.status(400).send({
            message: 'Todos los datos son obligatorios'

        })
    }
    const book = new BookModel({
        name: req.body.name,
        author: req.body.author,
        pageNumbre: req.body.pageNumbre,
        publisher: req.body.publisher,
        publicationDate: req.body.publicationDate,
        genre: req.body.genre
    })
    book.save()
        .then(
            (dataBook) => {
                res.send(dataBook)
            }).catch((error) => {
                return res.status(500).send({
                    message: error.message
                })

            })

}
exports.update = (req, res) => {

    if (Object.entries(req, res).length == 0) {
        return res.status(400).send({
            message: 'Todos los datos son obligatorios'

        })
    }

    const book = {
        name: req.body.name,
        author: req.body.author,
        pageNumbre: req.body.pageNumbre,
        publisher: req.body.publisher,
        publicationDate: req.body.publicationDate,
        genre: req.body.genre
    }

    BookModel.findByIdAndUpdate(req.params.id, book, { new: true })

        .then((bookUpdate) => {
            res.send(bookUpdate)
        }).catch((error) => {
            return res.status(500).send({
                message: error.message
            })

        })
}

exports.getAll = (req, res) => {

    BookModel.find()
        .populate()
        .exec()

        .then((book) => {
            res.send(book)
        }).catch((error) => {
            return res.status(500).send({
                message: error.message
            })

        })

}
exports.getOne=(req,res)=>{

    BookModel.findById(req.params.id)
    .populate()
    .exec()

    .then((book) => {
        res.send(book)
    }).catch((error) => {
        return res.status(500).send({
            message: error.message
        })
    })
}
exports.deleteOne=(req,res)=>{
    BookModel.findByIdAndRemove(req.params.id)
    .then((book) => {
        res.send(book)
    }).catch((error) => {
       res.status(500).send({
            message: error.message
        })

    })
}