import { getAdminUsers } from "@/lib/data/admin-users";
import AdminUsersClient from "./AdminUsersClient";

export default async function AdminUsersPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; role?: string; provider?: string; showDeleted?: string; page?: string }>;
}) {
  const params = await searchParams;
  
  const search = params.search || "";
  const role = params.role || "all";
  const provider = params.provider || "all";
  const showDeleted = params.showDeleted === "true";
  const page = Number(params.page) || 1;

  // Next.js Server Component — fetched securely on the server
  const initialData = await getAdminUsers({ search, role, provider, showDeleted, page, limit: 8 });

  return (
    <AdminUsersClient 
      initialUsers={initialData.users}
      total={initialData.total}
      totalPages={initialData.totalPages}
      currentPage={initialData.page}
      currentSearch={search}
      currentRole={role}
      currentProvider={provider}
      currentShowDeleted={showDeleted}
    />
  );
}
