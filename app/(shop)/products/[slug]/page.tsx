import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/data/product";
import { getProductReviews } from "@/lib/data/review";
import { getUserWishlist } from "@/lib/data/wishlist";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ProductGallery from "@/components/Product/ProductGallery";
import ProductInfo from "@/components/Product/ProductInfo";
import ProductTabs from "@/components/Product/ProductTabs";
import { getFeaturedProducts } from "@/lib/data/product";
import { bodyFont } from "@/lib/fonts";

export default async function ProductDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    const product = await getProductBySlug(slug);
    
    if (!product) {
        return notFound();
    }

    // Fetch product reviews and wishlist status
    const [reviews, wishlistItems] = await Promise.all([
        getProductReviews(product._id),
        getUserWishlist()
    ]);
    
    const isWishlisted = wishlistItems.includes(product._id.toString());

    // Prepare gallery images
    let galleryImages = [product.image];
    if (product.subImages && product.subImages.length > 0) {
        galleryImages = [product.image, ...product.subImages];
    } else {
        const isStrawberry = product.image.includes("can1");
        if (isStrawberry) {
            galleryImages = [
                "/orake-strawberry-clean.png",
                "/orake-strawberry-ingredients.png",
                "/orake-strawberry-pour.png",
            ];
        } else {
             galleryImages = [
                "/orake-ginger-lemon-clean.png",
                "/orake-ginger-lemon-ingredients.png",
                "/orake-ginger-lemon-pour.png",
            ];
        }
    }

    const allProducts = await getFeaturedProducts();
    const relatedProducts = allProducts.filter(p => p._id !== product._id);
    const relatedProduct = relatedProducts.length > 0 ? relatedProducts[0] : allProducts[0];

    return (
        <main className="bg-[#fafafa] min-h-screen pt-24 pb-20 selection:bg-[#c25b5e] selection:text-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 mb-8 mt-2">
                <Link href="/products" className={`${bodyFont.className} inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-[#c25b5e] transition-colors`}>
                    <ArrowLeft size={16} strokeWidth={2.5} />
                    Back to Products
                </Link>
            </div>

            {/* Product Top Section */}
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">

                {/* LEFT: Image Gallery */}
                <ProductGallery galleryImages={galleryImages} productName={product.name} />

                {/* RIGHT: Product Info */}
                <ProductInfo product={product} relatedProduct={relatedProduct} initialIsWishlisted={isWishlisted} />
            </div>

            {/* Bottom Info Tabs */}
            <ProductTabs product={product} reviews={reviews} />

        </main>
    );
}
