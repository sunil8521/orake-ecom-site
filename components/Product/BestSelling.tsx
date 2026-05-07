import { getFeaturedProducts } from "@/lib/data/product";
import BestSellingClient from "./BestSellingClient";
import { getUserWishlist } from "@/lib/data/wishlist"
export default async function BestSelling() {
    const [products, wishlistSlugs] = await Promise.all([
        getFeaturedProducts(),
        getUserWishlist()
    ]);
    return <BestSellingClient initialProducts={products} initialWishlistSlugs={wishlistSlugs} />;
}
