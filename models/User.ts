import mongoose, { Schema, models, model } from "mongoose";
import bcrypt from "bcryptjs"

export interface IUser {
  _id: mongoose.Types.ObjectId;
  fullName: string;
  email: string;
  phone?: string;
  password?: string;
  isVerified: boolean;
  otp?: string;
  otpExpiry?: Date;
  provider: "credentials" | "google";
  role: "user" | "admin"
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: {
      type: String,
      required: function () { return this.provider === 'credentials'; },
      trim: true
    },
    isVerified: { type: Boolean, default: false },
    otp: { type: String, select: false },
    otpExpiry: { type: Date, select: false },
    provider: { type: String, enum: ["credentials", "google"], default: "credentials" },
    role: { type: String, enum: ["user", "admin"], default: "user" },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function () {
  if (!this.isModified("password") || !this.password) {
    return;
  }
  const hashedPassword = await bcrypt.hash(this.password as string, 12);
  this.password = hashedPassword;
})

UserSchema.methods.comparePassword = async function (password: string) {
  return bcrypt.compare(password, this.password);
}

const User = models.User || model<IUser>("User", UserSchema);
export default User;
