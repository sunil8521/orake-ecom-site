import { headers } from "next/headers";
import PasskeyGate from "@/components/admin/PasskeyGate";
import AdminClientLayout from "./AdminClientLayout";
import { Suspense } from "react";

async function AdminDynamicShell({ children }: { children: React.ReactNode }) {
  // Force dynamic rendering for all admin subroutes by accessing request headers.
  await headers();

  return (
    <PasskeyGate>
      <AdminClientLayout>
        {children}
      </AdminClientLayout>
    </PasskeyGate>
  );
}

export default function AdminServerLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <AdminDynamicShell>{children}</AdminDynamicShell>
    </Suspense>
  );
}
