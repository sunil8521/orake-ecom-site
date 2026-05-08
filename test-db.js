const mongoose = require('mongoose');
require('dotenv').config({ path: '.env.local' });

async function run() {
  await mongoose.connect(process.env.MONGODB_URI);
  const db = mongoose.connection;
  const products = await db.collection('products').find({}).toArray();
  console.log("PRODUCTS IN DB:");
  products.forEach(p => console.log(`ID: ${p._id}, Name: ${p.name}, Slug: ${p.slug}`));
  process.exit(0);
}
run();
