const Product = require("../schemas/productSchema");

//Skapar en ny produkt

exports.createNewProduct = (req, res) => {
  const { Name, Description, Price, ImageURL } = req.body;

  if(!Name || !Description || !Price || !ImageURL){
    
    res.status(400).json({
        message: 'You need to fill in all fields!'
    })
  }

  Product.create({Name, Description, Price, ImageURL})
  .then(data => res.status(201).json(data))
  .catch(() => res.status(500).json({
    message: 'Something went wrong when creating your game!'
  }))

};

//Hämtar alla produkter

exports.getProducts = (req, res) => {
    Product.find()
    .then(data => {
        res.status(200).json(data)
    })
    .catch(() => {
        res.status(500).json({
            message: 'Something went wrong when getting the game!'
        })
    })
}

//Hämtar en produkt

exports.getOneProduct = (req, res) => {
    Product.findById(req.params.id)
    .then(data => {
        res.status(200).json(data)
    })
    .catch(() => {
        res.status(500).json({
            message: 'Something went wrong when getting the game!'
        })
    })
}

//uppdaterar en produkt

exports.updateProduct = (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true})
    .then(data => {
        if(!data) {
            res.status(404).json({
                message: 'Could not find that game'
            })
            return
        }
        res.status(200).json(data)
    })
    .catch(() => {
        res.status(500).json({
            message: 'Something went wrong when updating the game'
        })
    })
}

//Tar bort en Produkt

exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
    .then(data => {
        if(!data) {
            res.status(404).json({
                message: 'could not find that gamr'
            })
            return
        }

        res.status(200).json({ id: data._id})
    })
    .catch(() => {
        res.status(500).json({
            message: 'Something went wrong when deleting the game'
        })
    })
}