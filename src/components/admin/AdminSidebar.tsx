import { useLocation, useNavigate } from "react-router-dom";
import { LayoutDashboard, Users, CreditCard, Ban, Megaphone, LogOut, Clock, CheckCircle, XCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const menuItems = [
  { title: "Dashboard", path: "/admin", icon: LayoutDashboard },
  { title: "Users", path: "/admin/users", icon: Users },
  { title: "Pending", path: "/admin/payments/pending", icon: Clock },
  { title: "Approved", path: "/admin/payments/approved", icon: CheckCircle },
  { title: "Rejected", path: "/admin/payments/rejected", icon: XCircle },
  { title: "Banned Users", path: "/admin/banned", icon: Ban },
  { title: "Broadcast", path: "/admin/broadcast", icon: Megaphone },
];

const AdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <aside className="w-64 min-h-screen bg-card/80 backdrop-blur-xl border-r border-primary/20 flex flex-col">
      <div className="p-6 border-b border-primary/20">
        <h1 className="text-xl font-bold text-foreground">
          Pay<span className="text-primary">Go</span> Admin
        </h1>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-primary/20 text-primary border border-primary/30"
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              }`}
            >
              <item.icon size={18} />
              {item.title}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-primary/20">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/10 transition-all"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
