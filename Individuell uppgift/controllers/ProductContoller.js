const router = require("express").Router();

const productModel = require("../models/productModel");

//Create
router.post("/", productModel.createNewProduct);
//Read
router.get("/", productModel.getProducts);

router.get("/:id", productModel.getOneProduct);
//Update
router.put("/:id", productModel.updateProduct);
//Delete
router.delete("/:id", productModel.deleteProduct);

module.exports = router;
