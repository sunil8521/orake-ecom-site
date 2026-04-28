import { auth } from "@/lib/auth";
import { headers } from "next/headers";

/**
 * Get the current Better Auth session from server-side API routes.
 * Returns the session object or null if not authenticated.
 */
export async function getSession() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return session;
}
