import { connectDB } from "@/lib/db";
import { Product } from "@/models/Product";
import { Rating } from "@/models/Rating";
import { cacheLife, cacheTag } from "next/cache";
import { ProductType } from "@/models/Product"

export async function getFeaturedProducts() {
  'use cache'
  cacheLife('hours')
  cacheTag('products')

  try {
    await connectDB();
    const products = await Product.find({}).lean() as any[];
    
    // Fetch dynamic reviews for each product
    for (let product of products) {
      const reviews = await Rating.find({ procutID: product._id }).lean();
      product.numReviews = reviews.length;
      if (reviews.length > 0) {
        const totalRating = reviews.reduce((sum, rev) => sum + rev.rating, 0);
        product.rating = Number((totalRating / reviews.length).toFixed(1));
      } else {
        product.rating = 0; // Default if no reviews
      }
    }

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
    const product = await Product.findOne({ slug }).lean() as any;
    if (!product) return null;
    
    // Fetch dynamic reviews
    const reviews = await Rating.find({ procutID: product._id }).lean();
    product.numReviews = reviews.length;
    if (reviews.length > 0) {
      const totalRating = reviews.reduce((sum, rev) => sum + rev.rating, 0);
      product.rating = Number((totalRating / reviews.length).toFixed(1));
    } else {
      product.rating = 0; // Default if no reviews
    }

    return JSON.parse(JSON.stringify(product)) as ProductType;
  } catch (error) {
    console.error(`Failed to fetch product with slug ${slug}:`, error);
    return null;
  }
}
