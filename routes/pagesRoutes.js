import express from "express";
// import productsData from "../public/scripts/productsBs.js";
const pagesRouter= express.Router();


pagesRouter.get("/home", (req, res)=>{
res.render("index")
})

pagesRouter.get("/store", (req, res)=>{
    res.render("store", {title:"Products", products: productsData})
})

export default pagesRouter