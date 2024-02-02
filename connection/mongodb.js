import mongoose from "mongoose"
const uri = "mongodb+srv://Juandavidtorresurrea:Milo2711@atlascluster.f3qfyrd.mongodb.net/dookies?retryWrites=true&w=majority";

const conection = async ()=>{
 try {
  await mongoose.connect(uri)
  console.log("databaseConnected succesfully")
 } catch (error) {
  console.log(error)
 }
}

export default conection