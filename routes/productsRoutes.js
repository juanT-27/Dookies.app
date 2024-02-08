import express from "express";
import { postNewProduct, getAll } from "../controllers/productsControllers.js";

const productsRouter= express.Router();

productsRouter.post("/new", postNewProduct);
productsRouter.get("/all", getAll)
export default productsRouter