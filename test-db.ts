import mongoose from "mongoose";
import { connectDB } from "./lib/db";
import { Cart } from "./models/Cart";
import { Product } from "./models/Product";
async function run() {
  await connectDB();
  console.log("MODELS:", Object.keys(mongoose.models));
  console.log("Cart model:", Cart.modelName);
  console.log("Product model:", Product.modelName);
  const carts = await Cart.find().populate('items.productId').lean();
  console.log("Carts:", carts.length);
  process.exit(0);
}
run();
