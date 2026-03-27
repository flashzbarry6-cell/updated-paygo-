import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { CheckCircle, XCircle, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Payment {
  id: string;
  user_id: string;
  receipt_url: string | null;
  amount: number | null;
  status: string | null;
  created_at: string | null;
  profiles?: { full_name: string | null; email: string | null } | null;
}

const AdminPayments = () => {
  const { status } = useParams<{ status: string }>();
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const fetchPayments = async () => {
    setLoading(true);
    const query = supabase
      .from("payments")
      .select("*, profiles!payments_user_id_fkey(full_name, email)")
      .order("created_at", { ascending: false });

    if (status) {
      query.eq("status", status);
    }

    const { data, error } = await query;
    if (!error) {
      setPayments((data as unknown as Payment[]) || []);
    }
    setLoading(false);
  };

  useEffect(() => { fetchPayments(); }, [status]);

  const generateKey = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let key = "PG-";
    for (let i = 0; i < 16; i++) {
      key += chars.charAt(Math.floor(Math.random() * chars.length));
      if ((i + 1) % 4 === 0 && i < 15) key += "-";
    }
    return key;
  };

  const handleApprove = async (payment: Payment) => {
    const { error: payErr } = await supabase
      .from("payments")
      .update({ status: "approved" })
      .eq("id", payment.id);

    if (payErr) {
      toast.error("Failed to approve payment");
      return;
    }

    const keyValue = generateKey();
    await supabase.from("keys").insert({
      user_id: payment.user_id,
      key_value: keyValue,
    });

    await supabase
      .from("profiles")
      .update({ has_key: true })
      .eq("user_id", payment.user_id);

    toast.success("Payment approved & key generated!");
    fetchPayments();
  };

  const handleReject = async (paymentId: string) => {
    const { error } = await supabase
      .from("payments")
      .update({ status: "rejected" })
      .eq("id", paymentId);

    if (error) {
      toast.error("Failed to reject payment");
    } else {
      toast.success("Payment rejected");
      fetchPayments();
    }
  };

  const statusLabel = status ? status.charAt(0).toUpperCase() + status.slice(1) : "All";

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
        <h1 className="text-2xl font-bold text-foreground">{statusLabel} Payments</h1>
        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-primary/20">
                  <th className="text-left p-4 text-muted-foreground font-medium">User</th>
                  <th className="text-left p-4 text-muted-foreground font-medium">Amount</th>
                  <th className="text-left p-4 text-muted-foreground font-medium">Receipt</th>
                  <th className="text-left p-4 text-muted-foreground font-medium">Status</th>
                  <th className="text-left p-4 text-muted-foreground font-medium">Date</th>
                  {status === "pending" && (
                    <th className="text-left p-4 text-muted-foreground font-medium">Actions</th>
                  )}
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id} className="border-b border-border/30 hover:bg-muted/30 transition-colors">
                    <td className="p-4">
                      <div>
                        <p className="text-foreground font-medium">
                          {(payment.profiles as any)?.full_name || "Unknown"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {(payment.profiles as any)?.email || "—"}
                        </p>
                      </div>
                    </td>
                    <td className="p-4 text-foreground">₦{(payment.amount || 0).toLocaleString()}</td>
                    <td className="p-4">
                      {payment.receipt_url ? (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setPreviewUrl(payment.receipt_url)}
                          className="gap-1 text-primary"
                        >
                          <Eye size={14} /> View
                        </Button>
                      ) : (
                        <span className="text-muted-foreground">None</span>
                      )}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          payment.status === "approved"
                            ? "bg-green-500/20 text-green-400"
                            : payment.status === "rejected"
                            ? "bg-red-500/20 text-red-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {payment.status}
                      </span>
                    </td>
                    <td className="p-4 text-muted-foreground">
                      {payment.created_at ? new Date(payment.created_at).toLocaleDateString() : "—"}
                    </td>
                    {status === "pending" && (
                      <td className="p-4 flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => handleApprove(payment)}
                          className="gap-1 bg-green-600 hover:bg-green-700"
                        >
                          <CheckCircle size={14} /> Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleReject(payment.id)}
                          className="gap-1"
                        >
                          <XCircle size={14} /> Reject
                        </Button>
                      </td>
                    )}
                  </tr>
                ))}
                {payments.length === 0 && (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-muted-foreground">
                      No {statusLabel.toLowerCase()} payments
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Receipt Preview Modal */}
      {previewUrl && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setPreviewUrl(null)}
        >
          <div className="glass-card p-4 max-w-lg max-h-[80vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <img src={previewUrl} alt="Receipt" className="w-full rounded-lg" />
            <Button
              className="w-full mt-4"
              variant="outline"
              onClick={() => setPreviewUrl(null)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </AdminLayout>
  );
};

export default AdminPayments;
