import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { connectDB } from "@/lib/db";
import { Address } from "@/models/Address";

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const addresses = await Address.find({ userId: (session.user as any).id });
    
    return NextResponse.json(addresses);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { fullName, phone, street, city, state, postalCode, country, isDefault } = await req.json();

    await connectDB();
    
    // If setting as default, unset other defaults
    if (isDefault) {
      await Address.updateMany({ userId: (session.user as any).id }, { $set: { isDefault: false } });
    }

    const newAddress = new Address({
      userId: (session.user as any).id,
      fullName,
      phone,
      street,
      city,
      state,
      postalCode,
      country: country || "india",
      isDefault: isDefault || false
    });

    await newAddress.save();

    return NextResponse.json(newAddress, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
