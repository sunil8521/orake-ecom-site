"use server";

import { cloudinary } from "@/lib/cloudinary";
import { v4 as uuid } from "uuid";

export async function uploadImageAction(formData: FormData): Promise<{ success: boolean; url?: string; publicId?: string; error?: string }> {
  try {
    const file = formData.get("file") as File;
    if (!file) {
      return { success: false, error: "No file provided" };
    }

    // Validate size (e.g., max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return { success: false, error: "File size exceeds 5MB limit" };
    }

    // Validate type
    if (!file.type.startsWith("image/")) {
      return { success: false, error: "Only image files are allowed" };
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    return new Promise((resolve) => {
      cloudinary.uploader.upload_stream(
        {
          folder: "orake_products",
          resource_type: "auto",
          public_id: uuid(),
          transformation: [
            { width: 1200, height: 1200, crop: "limit" } // Prevent extremely large original files
          ]
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary Upload Error:", error);
            resolve({ success: false, error: "Failed to upload image" });
          } else if (result) {
            // Inject f_auto,q_auto to serve optimal formats (WebP/AVIF) and quality
            const optimizedUrl = result.secure_url.replace("/upload/", "/upload/f_auto,q_auto/");
            resolve({ success: true, url: optimizedUrl, publicId: result.public_id });
          } else {
            resolve({ success: false, error: "Unknown upload error" });
          }
        }
      ).end(buffer);
    });
  } catch (error: any) {
    console.error("Upload Action Error:", error);
    return { success: false, error: error.message || "An error occurred during upload" };
  }
}

export async function deleteImageAction(publicId: string): Promise<{ success: boolean; error?: string }> {
  try {
    if (!publicId) return { success: false, error: "No publicId provided" };
    
    return new Promise((resolve) => {
      cloudinary.uploader.destroy(publicId, (error, result) => {
        if (error) {
          console.error("Cloudinary Delete Error:", error);
          resolve({ success: false, error: "Failed to delete image" });
        } else {
          resolve({ success: true });
        }
      });
    });
  } catch (error: any) {
    console.error("Delete Action Error:", error);
    return { success: false, error: error.message || "An error occurred during deletion" };
  }
}
