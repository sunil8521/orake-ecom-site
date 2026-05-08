import { getProductBySlug } from './lib/data/product';
import mongoose from 'mongoose';
require('dotenv').config({ path: '.env.local' });

async function run() {
  console.log("Fetching fan-favorites-box...");
  const p = await getProductBySlug("fan-favorites-box");
  console.log("Result:", p ? "Found: " + p.name : "Not Found");
  process.exit(0);
}
run();
