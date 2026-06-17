import ProtectedRoute from "@/app/ui/ProtectedRoute";

export default function ProfileEdit({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute>
      {children}
    </ProtectedRoute>
  );
}