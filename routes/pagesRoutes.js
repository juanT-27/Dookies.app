import express from "express";
import Product from "../models/productsModel.js";

const pagesRouter= express.Router();


pagesRouter.get("/home", (req, res)=>{
res.render("index")
})

pagesRouter.get("/storeProducts", async (req, res)=>{
    try {
        const allProducts= await Product.find()
        if(allProducts<=0){
            res.status(404).render("errorPage")
            throw new  Error ("No products")
        }
        res.status(200).render("store", {products:allProducts})
    } catch (error) {
        console.log(error.message)
    }
   
})

pagesRouter.get("/signUp", (req, res)=>{
    res.render("signUp")
})

export default pagesRouter