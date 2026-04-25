import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { generateOTP, sendOTPEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    await connectDB();

    const user = await User.findOne({ email: email.toLowerCase() }).select(
      "+otpExpiry"
    );

    if (!user) {
      return NextResponse.json(
        { error: "No account found with this email" },
        { status: 404 }
      );
    }

    if (user.isVerified) {
      return NextResponse.json(
        { error: "Account is already verified" },
        { status: 400 }
      );
    }

    // ── Rate limiting: only allow resend after 60s ──
    if (user.otpExpiry) {
      const timeSinceLastOTP =
        Date.now() - (user.otpExpiry.getTime() - 10 * 60 * 1000);
      if (timeSinceLastOTP < 60 * 1000) {
        return NextResponse.json(
          { error: "Please wait before requesting a new OTP" },
          { status: 429 }
        );
      }
    }

    const otp = generateOTP();
    user.otp = otp;
    user.otpExpiry = new Date(Date.now() + 10 * 60 * 1000);
    await user.save();

    await sendOTPEmail(email, otp, user.fullName);

    return NextResponse.json(
      { message: "New OTP sent to your email" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Resend OTP error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
