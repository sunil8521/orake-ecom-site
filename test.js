const { MongoClient } = require('mongodb');
require('dotenv').config({ path: '.env.local' });
async function run() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
     console.error("No MONGODB_URI");
     process.exit(1);
  }
  const client = new MongoClient(uri);
  await client.connect();
  const db = client.db();
  const products = await db.collection('products').find({}).toArray();
  console.log("Found", products.length, "products in", db.databaseName);
  products.forEach(p => console.log(p.slug));
  await client.close();
}
run().catch(console.dir);
