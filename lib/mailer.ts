import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function sendOTPEmail(email: string, otp: string, name: string) {
  const mailOptions = {
    from: `"Orake Energy" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Verify Your Orake Account — OTP Inside 🔥",
    html: `
      <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 500px; margin: 0 auto; background: #15161b; border-radius: 20px; overflow: hidden;">
        <div style="padding: 40px 30px; text-align: center;">
          <h1 style="color: #ffffff; font-size: 28px; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 2px;">
            ORAKE
          </h1>
          <p style="color: #9ca3af; font-size: 13px; text-transform: uppercase; letter-spacing: 3px; margin: 0;">
            Energy That Hits Different
          </p>
        </div>
        <div style="background: #ffffff; padding: 40px 30px; text-align: center;">
          <p style="color: #6b7280; font-size: 14px; margin: 0 0 8px;">Hey ${name},</p>
          <h2 style="color: #15161b; font-size: 20px; margin: 0 0 24px; text-transform: uppercase; letter-spacing: 1px;">
            Your Verification Code
          </h2>
          <div style="background: #f4f4f5; border-radius: 16px; padding: 24px; margin: 0 0 24px;">
            <span style="font-size: 36px; font-weight: 800; letter-spacing: 12px; color: #c25b5e;">
              ${otp}
            </span>
          </div>
          <p style="color: #9ca3af; font-size: 13px; margin: 0 0 8px;">
            This code expires in <strong style="color: #15161b;">10 minutes</strong>.
          </p>
          <p style="color: #9ca3af; font-size: 12px; margin: 0;">
            If you didn't request this, just ignore this email.
          </p>
        </div>
        <div style="padding: 20px 30px; text-align: center;">
          <p style="color: #4b5563; font-size: 11px; margin: 0;">
            © 2026 Orake Energy. All rights reserved.
          </p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}
