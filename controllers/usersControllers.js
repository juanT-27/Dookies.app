const userSigningUpController = async (req, res)=>{
 const userData= await req.body
 
 console.log(userData)
}

export { userSigningUpController}