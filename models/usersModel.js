import mongoose from "mongoose";
const {Schema}= mongoose 

const userSchema= new Schema (
    {userName: {
        type: String,
        require: true,
    }, lastName:{
        type: String,
    }, cellphone:{
        type: Number,
        required: true
    }, email:{
        type: String,
        required: true
    },password:{
        type: String,
        required: true
    }
}
)

const User= mongoose.model("User", userSchema);

export default User