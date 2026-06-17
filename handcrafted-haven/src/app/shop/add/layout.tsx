import ProtectedRoute from "@/app/ui/ProtectedRoute";

export default function ShopAddLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      {children}
    </ProtectedRoute>
  );
}