import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { db } from "./db";
import { emailOTP } from "better-auth/plugins";
import { sendOTPEmail } from "./mailer";
import { createAuthMiddleware, APIError } from "better-auth/api";

export const auth = betterAuth({
  database: mongodbAdapter(db),

  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    autoSignIn:true
  },

  emailVerification: {
    autoSignInAfterVerification: true,
  },
// ─── ADD THIS HOOK ───
	hooks: {
		before: createAuthMiddleware(async (ctx) => {
			// Check if user already exists during sign-up
			if (ctx.path === "/sign-up/email") {
				const existingUser = await ctx.context.internalAdapter.findUserByEmail(
					ctx.body.email
				);
				if (existingUser) {
					throw new APIError("UNPROCESSABLE_ENTITY", {
						message: "Email already registered",
					});
				}
			}
		}),
	},
  plugins: [
    emailOTP({
      otpLength: 4,
      sendVerificationOnSignUp: true,
      overrideDefaultEmailVerification: true,
      async sendVerificationOTP({ email, otp, type }) {
        if (type === "email-verification") {
          await sendOTPEmail(email, otp);
        } else if (type === "forget-password") {
          await sendOTPEmail(email, otp, "Password Reset");
        } 
      },
    }),
  ],

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },

  user: {
    additionalFields: {
      phone: {
        type: "string",
        required: false,
        input: true,
      },
      role: {
        type: "string",
        required: false,
        defaultValue: "user",
      },
      isDelete: {
        type: "boolean",
        required: false,
        defaultValue: false,
      },
    },
  },
});