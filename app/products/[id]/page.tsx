"use client";

import { use } from "react";
import Breadcrumb from "@/components/Product/Breadcrumb";
import ProductGallery from "@/components/Product/ProductGallery";
import ProductInfo from "@/components/Product/ProductInfo";
import ProductTabs from "@/components/Product/ProductTabs";

// Mock Data
const PRODUCTS = [
    {
        id: 1,
        name: "Strawberry Vanilla",
        price: 99.00,
        oldPrice: 120.00,
        discount: 17,
        size: "250ML",
        image: "/can1.png",
        numReviews: 24,
        description: "You've forever been a fan of soda, but just don't like the loads of sugar content it comes with. Isn't it? No worries, you're not alone. We, too, feel the same, and that's why we are here with Orake Strawberry Vanilla, which contains zero sugar and zero artificial sweetener. Sweetened with natural flavors only, it's a supercool and healthier alternative to the usual soda.",
    },
    {
        id: 2,
        name: "Ginger Lemon",
        price: 89.00,
        oldPrice: 120.00,
        discount: 25,
        size: "250ML",
        image: "/can2.png",
        numReviews: 18,
        description: "Experience the crisp, refreshing kick of real ginger combined with zesty lemon. Perfectly carbonated for that satisfying fizz, without the guilt. It's an invigorating lift any time of day.",
    }
];

export default function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const productId = parseInt(resolvedParams.id) || 1;
    const product = PRODUCTS.find(p => p.id === productId) || PRODUCTS[0];
    const isStrawberry = product.image.includes("can1");

    const galleryImages = isStrawberry ? [
        "/orake-strawberry-clean.png",
        "/orake-strawberry-ingredients.png",
        "/orake-strawberry-pour.png",
    ] : [
        "/orake-ginger-lemon-clean.png",
        "/orake-ginger-lemon-ingredients.png",
        "/orake-ginger-lemon-pour.png",
    ];

    // Get related products (just filter out current)
    const relatedProducts = PRODUCTS.filter(p => p.id !== product.id);
    if (relatedProducts.length === 0) relatedProducts.push(PRODUCTS[0]); // fallback

    return (
        <main className="bg-[#fafafa] min-h-screen pt-24 pb-20 selection:bg-[#de3e4f] selection:text-white">

            {/* Breadcrumb */}
            <Breadcrumb productName={product.name} />

            {/* Product Top Section */}
            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">

                {/* LEFT: Image Gallery */}
                <ProductGallery galleryImages={galleryImages} productName={product.name} />

                {/* RIGHT: Product Info */}
                <ProductInfo product={product} relatedProduct={relatedProducts[0]} />
            </div>

            {/* Bottom Info Tabs */}
            <ProductTabs product={product} />

        </main>
    );
}
