import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { connectDB } from "@/lib/db";
import { Wishlist } from "@/models/Wishlist";

export async function GET(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const wishlists = await Wishlist.find({ userId: session.user.id }).populate("productId");
    
    return NextResponse.json(wishlists);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { productId } = await req.json();
    if (!productId) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
    }

    await connectDB();
    
    const existing = await Wishlist.findOne({ userId: session.user.id, productId });
    
    if (existing) {
      // Toggle off (remove from wishlist)
      await Wishlist.findByIdAndDelete(existing._id);
      return NextResponse.json({ message: "Removed from wishlist", added: false });
    } else {
      // Toggle on (add to wishlist)
      const newItem = new Wishlist({
        userId: session.user.id,
        productId
      });
      await newItem.save();
      return NextResponse.json({ message: "Added to wishlist", added: true, item: newItem }, { status: 201 });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
