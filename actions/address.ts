"use server";

import { connectDB } from "@/lib/db";
import { Address } from "@/models/Address";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { updateTag } from "next/cache";

async function getSession() {
  const reqHeaders = await headers();
  return auth.api.getSession({ headers: reqHeaders });
}

export async function getUserAddresses() {
  // Dynamic via getSession() -> headers() — no opt-out needed
  try {
    const session = await getSession();
    if (!session?.user) return { success: false, error: "Unauthorized" };

    await connectDB();
    const addresses = await Address.find({ userId: session.user.id }).lean();
    
    return { success: true, addresses: JSON.parse(JSON.stringify(addresses)) };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function addAddress(data: any) {
  try {
    const session = await getSession();
    if (!session?.user) return { success: false, error: "Unauthorized" };

    await connectDB();
    const newAddress = new Address({
      ...data,
      userId: session.user.id,
    });
    
    // If it's the first address or set to default, unset others
    if (data.isDefault) {
      await Address.updateMany({ userId: session.user.id }, { isDefault: false });
    }

    await newAddress.save();
    updateTag("addresses");
    
    return { success: true, address: JSON.parse(JSON.stringify(newAddress)) };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function updateAddress(id: string, data: any) {
  try {
    const session = await getSession();
    if (!session?.user) return { success: false, error: "Unauthorized" };

    await connectDB();
    const address = await Address.findOne({ _id: id, userId: session.user.id });
    
    if (!address) return { success: false, error: "Address not found" };

    Object.assign(address, data);
    await address.save();
    updateTag("addresses");
    
    return { success: true, address: JSON.parse(JSON.stringify(address)) };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function deleteAddress(id: string) {
  try {
    const session = await getSession();
    if (!session?.user) return { success: false, error: "Unauthorized" };

    await connectDB();
    await Address.findOneAndDelete({ _id: id, userId: session.user.id });
    updateTag("addresses");
    
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}

export async function setDefaultAddress(id: string) {
  try {
    const session = await getSession();
    if (!session?.user) return { success: false, error: "Unauthorized" };

    await connectDB();
    
    // Unset all
    await Address.updateMany({ userId: session.user.id }, { isDefault: false });
    
    // Set new default
    await Address.findOneAndUpdate({ _id: id, userId: session.user.id }, { isDefault: true });
    
    updateTag("addresses");
    
    return { success: true };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
}
