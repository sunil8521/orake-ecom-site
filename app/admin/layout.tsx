import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import AdminClientLayout from "./AdminClientLayout";

export default async function AdminServerLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();

  // If there's no session, or if the user is not an admin, redirect them.
  // Note: session could be null if they are deleted, because we updated getSession()
  if (!session || !session.user || (session.user as any).role !== "admin") {
    redirect("/");
  }

  // Pass down the session to the client layout if needed, or just wrap it.
  return (
    <AdminClientLayout session={session}>
      {children}
    </AdminClientLayout>
  );
}
