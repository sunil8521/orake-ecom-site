import mongoose from "mongoose";
import { connectDB } from "./lib/db";
import User from "./models/User";

async function run() {
  await connectDB();
  const user1 = await User.findById("69f0e10a56082865180e5151").lean();
  console.log("Logged-in user:", user1?.email, user1?.fullName);
  const user2 = await User.findById("69f38c5c1a5306efa47d188c").lean();
  console.log("User with addresses:", user2?.email, user2?.fullName);
  process.exit(0);
}
run();
