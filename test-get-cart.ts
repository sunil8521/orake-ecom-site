import mongoose from "mongoose";
import { connectDB } from "./lib/db";
import { Cart } from "./models/Cart";
import { Product } from "./models/Product";

async function run() {
  await connectDB();
  const cart = await Cart.findOne().populate('items.productId').lean();
  console.log("RAW CART:", JSON.stringify(cart, null, 2));

  if (!cart) {
    console.log("No cart found.");
    process.exit(0);
  }

  try {
    const mappedItems = cart.items.map((item: any) => {
       const product = item.productId;
       return {
         id: product._id.toString(),
         name: product.name,
         flavor: product.slug, 
         price: product.price,
         oldPrice: product.oldPrice,
         qty: item.quantity,
         image: product.image,
       };
    });
    console.log("MAPPED ITEMS:", mappedItems);
  } catch(e) {
    console.error("MAPPING FAILED:", e);
  }
  process.exit(0);
}
run();
