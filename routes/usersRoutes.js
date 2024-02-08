import express from "express";
import { userSigningUpController } from "../controllers/usersControllers.js";

const usersRoute= express.Router()

usersRoute.post("/new", userSigningUpController);

export default usersRoute