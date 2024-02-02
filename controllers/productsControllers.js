import { response } from "express";
import Product from "../models/products.js";

const postNewProduct = async (req, res, next)=>{
    try {
        if(
            !req.body.title||
            !req.body.category||
            !req.body.ingredients||
            !req.body.dogSizeRecom||
            !req.body.weight||
            !req.body.price
        ){
            return res.status(400).send({
                message: "write all the required fields"
            })
        }
        const newProduct= {
            title:req.body.title,
            category:req.body.category,
            ingredients:req.body.ingredients,
            dogSizeRecom:req.body.dogSizeRecom,
            weight:req.body.weight,
            price:req.body.price
        }
        const product= await Product.create(newProduct)
        return res.status(200).send(product)
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message})
    }
};

export {postNewProduct}