import MainLayout from "@/components/MainLayout";
import AuthModal from "@/components/Auth/AuthModal";
import SignupPopup from "@/components/SignupPopup";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainLayout>{children}</MainLayout>
      <AuthModal />
      <SignupPopup />
      <ScrollToTopButton />
    </>
  );
}
