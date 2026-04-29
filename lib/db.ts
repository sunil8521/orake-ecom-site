import mongoose from "mongoose";
import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI || "";

let _client: MongoClient | null = null;
export let client: MongoClient | null = null;
export let db: ReturnType<MongoClient["db"]> | null = null;

if (MONGODB_URI) {
  client = new MongoClient(MONGODB_URI);
  db = client.db();
}

export async function getClient(): Promise<MongoClient> {
  if (!MONGODB_URI) {
    throw new Error("Please define MONGODB_URI in .env.local");
  }

  if (!_client) {
    _client = new MongoClient(MONGODB_URI);
    await _client.connect();
  }

  return _client;
}

export async function getDb() {
  const c = await getClient();
  return c.db();

}

// ─── Mongoose Connection (for app models: User, Product, Cart, etc.) ───
let cached = (global as any).mongoose || { conn: null, promise: null };

export async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error("Please define MONGODB_URI in .env.local");
  }

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  (global as any).mongoose = cached;
  return cached.conn;
}
