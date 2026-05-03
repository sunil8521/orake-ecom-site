import mongoose from "mongoose";
import { Product } from "./models/Product";
console.log("IMPORTED PRODUCT:", Product.modelName);
console.log("MODELS:", Object.keys(mongoose.models));
