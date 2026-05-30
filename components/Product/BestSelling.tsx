import { getFeaturedProducts } from "@/lib/data/product";
import BestSellingClient from "./BestSellingClient";
import { getUserWishlist } from "@/lib/data/wishlist"
export default async function BestSelling() {
    const wishlistSlugs = await getUserWishlist();
    const products = await getFeaturedProducts();
    return <BestSellingClient initialProducts={products} initialWishlistSlugs={wishlistSlugs} />;
}
