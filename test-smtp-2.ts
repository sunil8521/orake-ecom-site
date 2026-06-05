import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const host = process.env.EMAIL_HOST || "smtpout.secureserver.net";
const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  host,
  port: 465,
  secure: true,
  auth: { user, pass }
});

transporter.verify().then(() => console.log("Success")).catch(console.error);
