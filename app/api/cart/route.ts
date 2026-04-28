import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/session";
import { connectDB } from "@/lib/db";
import { Cart } from "@/models/Cart";

export async function GET(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const cart = await Cart.findOne({ userId: session.user.id }).populate("items.productId");
    
    return NextResponse.json(cart || { items: [] });
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

    const { productId, quantity } = await req.json();
    if (!productId || quantity === undefined) {
      return NextResponse.json({ error: "Product ID and quantity are required" }, { status: 400 });
    }

    await connectDB();
    
    let cart = await Cart.findOne({ userId: session.user.id });
    
    if (!cart) {
      cart = new Cart({ userId: session.user.id, items: [] });
    }

    const itemIndex = cart.items.findIndex((item: any) => item.productId.toString() === productId);

    if (itemIndex > -1) {
      // If quantity is 0 or less, remove the item
      if (quantity <= 0) {
        cart.items.splice(itemIndex, 1);
      } else {
        // Otherwise update quantity
        cart.items[itemIndex].quantity = quantity;
      }
    } else {
      if (quantity > 0) {
        cart.items.push({ productId, quantity });
      }
    }

    await cart.save();
    return NextResponse.json(cart);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const session = await getSession();
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const url = new URL(req.url);
    const productId = url.searchParams.get("productId");
    const clear = url.searchParams.get("clear");

    await connectDB();
    
    if (clear === "true") {
      await Cart.findOneAndDelete({ userId: session.user.id });
      return NextResponse.json({ message: "Cart cleared" });
    }

    if (productId) {
      const cart = await Cart.findOne({ userId: session.user.id });
      if (cart) {
        cart.items = cart.items.filter((item: any) => item.productId.toString() !== productId);
        await cart.save();
        return NextResponse.json(cart);
      }
    }

    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
