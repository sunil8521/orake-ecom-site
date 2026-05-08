'use server';

export async function verifyAdminPasskey(key: string): Promise<{ success: boolean }> {
  const correct = process.env.ADMIN_PASSKEY;
  if (!correct) {
    console.error("ADMIN_PASSKEY is not set in environment variables.");
    return { success: false };
  }
  return { success: key.trim() === correct.trim() };
}
