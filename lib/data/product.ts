import { connectDB } from "@/lib/db";
import { Product } from "@/models/Product";
import { unstable_cache } from "next/cache";

export const getFeaturedProducts = unstable_cache(
  async () => {
    try {
      await connectDB();
      const products = await Product.find({}).lean();
      
      return products.map((product: any) => ({
        ...product,
        _id: product._id?.toString(),
        id: product._id?.toString(),
      }));
    } catch (error) {
      console.error("Failed to fetch products:", error);
      return [];
    }
  },
  ['featured-products'],
  { tags: ['products'], revalidate: 3600 }
);
