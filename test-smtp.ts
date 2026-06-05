import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const host = process.env.EMAIL_HOST || "smtpout.secureserver.net";
const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

async function testSMTP(port: number, secure: boolean) {
  console.log(`Testing ${host}:${port} (secure: ${secure})...`);
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
    tls: { ciphers: 'SSLv3' } // Sometimes required for older SMTP servers
  });

  try {
    await transporter.verify();
    console.log(`✅ Success on port ${port}`);
  } catch (err: any) {
    console.error(`❌ Failed on port ${port}: ${err.message}`);
  }
}

async function main() {
  await testSMTP(465, true);
  await testSMTP(587, false);
}

main();
