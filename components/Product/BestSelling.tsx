import { getFeaturedProducts } from "@/lib/data/product";
import BestSellingClient from "./BestSellingClient";

export default async function BestSelling() {
    const products = await getFeaturedProducts();
    
    return <BestSellingClient initialProducts={products} />;
}
