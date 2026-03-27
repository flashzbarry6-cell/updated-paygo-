import { ReactNode } from "react";
import AdminSidebar from "./AdminSidebar";
import { useAdmin } from "@/hooks/useAdmin";

const AdminLayout = ({ children }: { children: ReactNode }) => {
  const { isLoading } = useAdmin();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          <p className="text-muted-foreground">Verifying admin access...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-subtle-glow">
      <AdminSidebar />
      <main className="flex-1 p-6 overflow-auto">{children}</main>
    </div>
  );
};

export default AdminLayout;
