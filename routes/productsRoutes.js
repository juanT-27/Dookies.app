import express from "express";
import { postNewProduct } from "../controllers/productsControllers.js";

const productsRouter= express.Router();

productsRouter.post("/new", postNewProduct);

export default productsRouter