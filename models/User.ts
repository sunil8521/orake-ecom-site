import mongoose, { Schema, models, model } from "mongoose";

/**
 * This model is a Mongoose wrapper around better-auth's `user` collection.
 * It does NOT own or manage this collection — better-auth does.
 * It exists solely so that `ref: "User"` in Cart, Order, Wishlist, Rating models
 * can resolve correctly for `.populate()` calls.
 *
 * Collection name is explicitly set to "user" (the 3rd arg) to match better-auth.
 */
export interface IUser {
  _id: mongoose.Types.ObjectId;
  name: string;           // better-auth uses `name` (not `fullName`)
  email: string;
  emailVerified: boolean;
  image?: string;
  phone?: string;
  role: "user" | "admin";
  isDelete: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String },
    email: { type: String },
    emailVerified: { type: Boolean, default: false },
    image: { type: String },
    phone: { type: String },
    role: { type: String, enum: ["user", "admin"], default: "user" },
    isDelete: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    // Do NOT add any pre-save hooks — better-auth manages this collection
  }
);

// 3rd arg "user" = forces Mongoose to use the `user` collection (better-auth's table)
// NOT `users` (the old orphaned collection)
const User = models.User || model<IUser>("User", UserSchema, "user");
export default User;
