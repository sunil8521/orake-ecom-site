import mongoose from "mongoose";
import { connectDB } from "./lib/db";
import { Address } from "./models/Address";

async function run() {
  await connectDB();
  const userId = "69f38c5c1a5306efa47d188c"; // The userId from the screenshot
  const addresses = await Address.find({ userId }).lean();
  console.log("Addresses found:", addresses.length);
  console.log(addresses);
  process.exit(0);
}
run();
