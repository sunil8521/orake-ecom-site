import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { generateOTP, sendOTPEmail } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, phone, password } = await req.json();


    //validation will be happen in frontend using react hook form and zod
    //we will do later backend verification 

    await connectDB();

    const existingUser = await User.findOne({ email: email.toLowerCase() });

    if (existingUser) {
      if (!existingUser.isVerified) {
        // If unverified, just generate new OTP and resend
        const otp = generateOTP();
        existingUser.otp = otp;
        existingUser.otpExpiry = new Date(Date.now() + 10 * 60 * 1000);
        await existingUser.save();

        await sendOTPEmail(email, otp, fullName);

        return NextResponse.json(
          { message: "Account exists but unverified. New OTP sent!", email },
          { status: 200 }
        );
      }

      return NextResponse.json(
        { error: "Account already exists" },
        { status: 400 }
      );
    }

    // create new user 



    const otp = generateOTP();

    await User.create({
      fullName: fullName.trim(),
      email: email.toLowerCase().trim(),
      phone: phone.trim(),
      password: password, // it will hash by pre save
      isVerified: false,
      otp,
      otpExpiry: new Date(Date.now() + 10 * 60 * 1000),
      provider: "credentials",
    });

    await sendOTPEmail(email, otp, fullName);

    return NextResponse.json(
      { message: "Account created! OTP sent to your email", email },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
