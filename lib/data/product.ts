import { connectDB } from "@/lib/db";
import { Product } from "@/models/Product";
import { cacheLife, cacheTag } from "next/cache";
import { ProductType } from "@/models/Product"
export async function getFeaturedProducts() {
  'use cache'
  cacheLife('hours')
  cacheTag('products')

  try {
    await connectDB();
    const products = await Product.find({}).lean();
    const serializedProducts: ProductType[] = JSON.parse(JSON.stringify(products));

    return serializedProducts;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}

export async function getProductBySlug(slug: string) {
  'use cache'
  cacheLife('hours')
  cacheTag(`products-${slug}`)

  try {
    await connectDB();
    const product = await Product.findOne({ slug }).lean();
    if (!product) return null;

    return JSON.parse(JSON.stringify(product)) as ProductType;
  } catch (error) {
    console.error(`Failed to fetch product with slug ${slug}:`, error);
    return null;
  }
}
