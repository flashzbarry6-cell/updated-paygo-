import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Ban, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Profile {
  id: string;
  user_id: string;
  full_name: string | null;
  email: string | null;
  balance: number | null;
  status: string | null;
  has_key: boolean | null;
  created_at: string | null;
}

const AdminUsers = () => {
  const [users, setUsers] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .neq("status", "banned")
      .order("created_at", { ascending: false });
    if (!error) setUsers(data || []);
    setLoading(false);
  };

  useEffect(() => { fetchUsers(); }, []);

  const handleBan = async (userId: string) => {
    const { error } = await supabase
      .from("profiles")
      .update({ status: "banned" })
      .eq("user_id", userId);
    if (error) {
      toast.error("Failed to ban user");
    } else {
      toast.success("User banned successfully");
      fetchUsers();
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Users Management</h1>
        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="text-left p-4 text-muted-foreground font-medium">Name</th>
                  <th className="text-left p-4 text-muted-foreground font-medium">Email</th>
                  <th className="text-left p-4 text-muted-foreground font-medium">Balance</th>
                  <th className="text-left p-4 text-muted-foreground font-medium">Status</th>
                  <th className="text-left p-4 text-muted-foreground font-medium">Key</th>
                  <th className="text-left p-4 text-muted-foreground font-medium">Joined</th>
                  <th className="text-left p-4 text-muted-foreground font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4 text-foreground">{user.full_name || "—"}</td>
                    <td className="p-4 text-foreground">{user.email || "—"}</td>
                    <td className="p-4 text-foreground">₦{(user.balance || 0).toLocaleString()}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 rounded-full text-xs bg-green-500/20 text-green-400">
                        {user.status}
                      </span>
                    </td>
                    <td className="p-4">
                      {user.has_key ? (
                        <CheckCircle className="text-green-400" size={16} />
                      ) : (
                        <span className="text-muted-foreground">No</span>
                      )}
                    </td>
                    <td className="p-4 text-muted-foreground">
                      {user.created_at ? new Date(user.created_at).toLocaleDateString() : "—"}
                    </td>
                    <td className="p-4">
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => handleBan(user.user_id)}
                        className="gap-1"
                      >
                        <Ban size={14} /> Ban
                      </Button>
                    </td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-muted-foreground">No users found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminUsers;
