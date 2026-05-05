import { getAdminOrders } from "@/lib/data/admin-orders";
import AdminOrdersClient from "./AdminOrdersClient";

export default async function AdminOrdersPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; status?: string; page?: string }>;
}) {
  const params = await searchParams;
  
  const search = params.search || "";
  const status = params.status || "All";
  const page = Number(params.page) || 1;

  const initialData = await getAdminOrders({ search, status, page, limit: 8 });

  return (
    <AdminOrdersClient 
      initialOrders={initialData.orders}
      total={initialData.total}
      totalPages={initialData.totalPages}
      currentPage={initialData.page}
      currentSearch={search}
      currentStatus={status}
    />
  );
}
