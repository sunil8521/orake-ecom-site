'use server';

import { connectDB } from "@/lib/db";
import { Product } from "@/models/Product";
import { updateTag } from "next/cache";
import { deleteImageAction } from "./upload";



export async function createProduct(data: {
  name: string; description: string; price: number;
  oldPrice?: number; discount?: number; stock: number;
  image: { publicId: string; url: string }; 
  subImages?: { publicId: string; url: string }[];
  size?: string; isFeatured?: boolean;
}) {
  try {
    await connectDB();
    const slug = data.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    await new Product({ ...data, slug }).save();
    updateTag('products');
    updateTag('admin-products');
    updateTag('admin-stats');
    return { success: true };
  } catch (error: any) {
    if (error.code === 11000) {
      return { success: false, error: "A product with this name already exists. Please choose a different name." };
    }
    return { success: false, error: error.message || "Failed to create product" };
  }
}

export async function updateProduct(id: string, data: {
  name?: string; description?: string; price?: number;
  oldPrice?: number; discount?: number; stock?: number;
  image?: { publicId: string; url: string }; 
  subImages?: { publicId: string; url: string }[];
  size?: string; isFeatured?: boolean;
}) {
  try {
    await connectDB();
    const oldProduct = await Product.findById(id);
    
    // Cleanup old images if they are being replaced
    if (oldProduct && data.image && oldProduct.image?.publicId && oldProduct.image.publicId !== data.image.publicId) {
      await deleteImageAction(oldProduct.image.publicId);
    }
    
    if (oldProduct && data.subImages) {
      const newSubImageIds = data.subImages.map(img => img.publicId);
      for (const oldSubImage of oldProduct.subImages || []) {
        if (oldSubImage.publicId && !newSubImageIds.includes(oldSubImage.publicId)) {
          await deleteImageAction(oldSubImage.publicId);
        }
      }
    }

    if (data.name) {
      (data as any).slug = data.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    }

    await Product.findByIdAndUpdate(id, data);
    updateTag('products');
    updateTag('admin-products');
    return { success: true };
  } catch (error: any) {
    if (error.code === 11000) {
      return { success: false, error: "A product with this name already exists. Please choose a different name." };
    }
    return { success: false, error: error.message || "Failed to update product" };
  }
}

export async function deleteProduct(id: string) {
  await connectDB();
  const product = await Product.findById(id);
  
  if (product) {
    if (product.image?.publicId) {
      await deleteImageAction(product.image.publicId);
    }
    if (product.subImages && product.subImages.length > 0) {
      for (const subImage of product.subImages) {
        if (subImage.publicId) {
          await deleteImageAction(subImage.publicId);
        }
      }
    }
    await Product.findByIdAndDelete(id);
  }

  updateTag('products');
  updateTag('admin-products');
  updateTag('admin-stats');
  return { success: true };
}
