import  express  from "express"
import path from "path";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";

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

app.get("/index", (req, res)=>{
    res.render("layout")
})


app.listen(port, ()=>{
    console.log("app on port" + port)
});