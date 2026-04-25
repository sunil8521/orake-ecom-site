import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import User from "@/models/User";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        otp: { label: "OTP", type: "text" },
        isVerification: { label: "isVerification", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.email) return null;

        await connectDB();

        // If this is an OTP verification attempt
        if (credentials.isVerification === "true") {
          const user = await User.findOne({ email: (credentials.email as string ).toLowerCase() }).select(
            "+otp +otpExpiry"
          );

          if (!user) throw new Error("NO_ACCOUNT_FOUND");
          if (user.isVerified) return user; // Already verified, just log them in
          if (!user.otp || !user.otpExpiry) throw new Error("NO_OTP_FOUND");
          if (new Date() > user.otpExpiry) throw new Error("OTP_EXPIRED");
          if (user.otp !== credentials.otp) throw new Error("INVALID_OTP");

          // Mark as verified
          user.isVerified = true;
          user.otp = undefined;
          user.otpExpiry = undefined;
          await user.save();

          return {
            id: user._id.toString(),
            name: user.fullName,
            email: user.email,
            image: user.image || null,
          };
        }

        // Standard Login Attempt
        if (!credentials.password) return null;

        const user = await User.findOne({ email: credentials.email.toLowerCase() }).select(
          "+password"
        );

        if (!user) return null;

        // User signed up with Google but is trying to use a password
        if (!user.password && user.provider === "google") {
          throw new Error("OAUTH_ACCOUNT_NOT_LINKED");
        }

        if (!user.isVerified) {
          throw new Error("UNVERIFIED");
        }
        
        if (!user.password) return null;

        const isValid = await bcrypt.compare(
          credentials.password as string,
          user.password
        );
        if (!isValid) return null;

        return {
          id: user._id.toString(),
          name: user.fullName,
          email: user.email,
          image: user.image || null,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/login",
    newUser: "/signup",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        await connectDB();
        let existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          // Auto-create Google users as verified
          existingUser = await User.create({
            fullName: user.name || "Google User",
            email: user.email,
            phone: "",
            password: null,
            isVerified: true,
            provider: "google",
            image: user.image,
          });
        } else {
          // Account already exists (could be email/password or unverified)
          // Since Google verifies the email, it's safe to mark as verified and link
          let updated = false;
          if (!existingUser.isVerified) {
            existingUser.isVerified = true;
            updated = true;
          }
          if (existingUser.provider !== "google") {
            // Only update provider to google if it's currently credentials
            existingUser.provider = "google";
            updated = true;
          }
          if (user.image && !existingUser.image) {
            existingUser.image = user.image;
            updated = true;
          }
          if (updated) {
            await existingUser.save();
          }
        }
        
        // CRITICAL: Inject the MongoDB _id so the session maps correctly
        user.id = existingUser._id.toString();
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id;
      }
      return session;
    },
  },
});
