import PasskeyGate from "@/components/admin/PasskeyGate";
import AdminClientLayout from "./AdminClientLayout";

export default function AdminServerLayout({ children }: { children: React.ReactNode }) {
  return (
    <PasskeyGate>
      <AdminClientLayout>
        {children}
      </AdminClientLayout>
    </PasskeyGate>
  );
}
