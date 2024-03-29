import express from "express"
import path from "path";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

import pagesRouter from "./routes/pagesRoutes.js";
import productsRouter from "./routes/productsRoutes.js";
import usersRoute from "./routes/usersRoutes.js";
import conection from "./connection/mongodb.js";

const app= express()
const port= 3000

app.use(cors());
app.use(helmet());
app.use(morgan("dev"))

app.set("views", path.join(process.cwd(), "view"));
app.set("view engine", "pug");

app.use(express.json());
app.use(express.static(path.join(process.cwd(), "./public")))
app.use(express.urlencoded({extended:false}))

app.use("/page", pagesRouter)
app.use("/products", productsRouter)
app.use("/user", usersRoute)
conection()
app.listen(port, ()=>{
    console.log(`localhost:${port}/page/home`)
});