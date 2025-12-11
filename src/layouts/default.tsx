import { Navbar } from "@/components/navbar";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useEffect } from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { scrollOnLoad } = useSmoothScroll();

  useEffect(() => {
    scrollOnLoad();
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen scroll-smooth">
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow">
        {children}
      </main>
    </div>
  );
}
