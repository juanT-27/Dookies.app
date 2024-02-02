import mongoose from "mongoose";

const {Schema}= mongoose

const productSchema= new Schema(
    {
        title:{
            type:String,
            required:true
        },
        category:{
            type:String,
            required:true
        },
        ingredients:{
            type:Array,
            required:true
        },
        dogSizeRecom: {
            type:Array,
            required:true
        },
        weight: {
            type:Number,
            required:true
        },
        price: {
            type:Number,
            required:true
        }
    }
);

const Product= mongoose.model("Product", productSchema);

export default Product