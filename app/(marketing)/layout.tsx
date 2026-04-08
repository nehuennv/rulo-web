import { FloatingNav } from "@/components/FloatingNav";
import { FloatingContact } from "@/components/FloatingContact";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <FloatingNav />
      <FloatingContact />
    </>
  );
}
