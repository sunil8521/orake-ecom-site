import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LayoutContent from "@/components/LayoutContent";

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <LayoutContent>
        {children}
      </LayoutContent>
    </Providers>
  );
}
