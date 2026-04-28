import mongoose from "mongoose";
import { connectDB } from "./lib/db";
import { Product } from "./models/Product";

async function check() {
  await connectDB();
  const products = await Product.find({});
  console.log(JSON.stringify(products, null, 2));
  process.exit(0);
}
check();
