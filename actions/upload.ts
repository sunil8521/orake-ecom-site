"use server";

import { cloudinary } from "@/lib/cloudinary";
import { v4 as uuid } from "uuid";

export async function uploadImageAction(formData: FormData): Promise<{ success: boolean; url?: string; error?: string }> {
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
        },
        (error, result) => {
          if (error) {
            console.error("Cloudinary Upload Error:", error);
            resolve({ success: false, error: "Failed to upload image" });
          } else if (result) {
            resolve({ success: true, url: result.secure_url });
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
