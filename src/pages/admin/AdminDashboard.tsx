import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import StatsCard from "@/components/admin/StatsCard";
import { supabase } from "@/integrations/supabase/client";
import { Users, CreditCard, Clock, CheckCircle, XCircle, Ban } from "lucide-react";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalPayments: 0,
    pending: 0,
    approved: 0,
    rejected: 0,
    banned: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      const [users, payments, profiles] = await Promise.all([
        supabase.from("profiles").select("id", { count: "exact", head: true }),
        supabase.from("payments").select("id, status"),
        supabase.from("profiles").select("id", { count: "exact", head: true }).eq("status", "banned"),
      ]);

      const paymentData = payments.data || [];
      setStats({
        totalUsers: users.count || 0,
        totalPayments: paymentData.length,
        pending: paymentData.filter((p) => p.status === "pending").length,
        approved: paymentData.filter((p) => p.status === "approved").length,
        rejected: paymentData.filter((p) => p.status === "rejected").length,
        banned: profiles.count || 0,
      });
    };
    fetchStats();
  }, []);

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Dashboard Overview</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatsCard title="Total Users" value={stats.totalUsers} icon={Users} />
          <StatsCard title="Total Payments" value={stats.totalPayments} icon={CreditCard} />
          <StatsCard title="Pending Payments" value={stats.pending} icon={Clock} />
          <StatsCard title="Approved Payments" value={stats.approved} icon={CheckCircle} />
          <StatsCard title="Rejected Payments" value={stats.rejected} icon={XCircle} />
          <StatsCard title="Banned Users" value={stats.banned} icon={Ban} />
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
