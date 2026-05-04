import mongoose from "mongoose";
import { connectDB } from "./lib/db";
import { Cart } from "./models/Cart";
import { Product } from "./models/Product";

async function run() {
  await connectDB();
  console.log("MODELS:", Object.keys(mongoose.models));
  const cart = await Cart.findOne().populate('items.productId').lean();
  console.log("Cart found:", !!cart);
  process.exit(0);
}
run();
