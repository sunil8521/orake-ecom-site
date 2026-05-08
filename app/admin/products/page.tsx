import { getAdminProducts } from "@/lib/data/admin-products";
import AdminProductsClient from "./AdminProductsClient";

export default async function AdminProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; page?: string }>;
}) {
  const params = await searchParams;
  
  const search = params.search || "";
  const page = Number(params.page) || 1;

  // Next.js Server Component — fetched securely on the server
  const initialData = await getAdminProducts({ search, page, limit: 8 });

  return (
    <AdminProductsClient 
      initialProducts={initialData.products}
      total={initialData.total}
      totalPages={initialData.totalPages}
      currentPage={initialData.page}
      currentSearch={search}
    />
  );
}
