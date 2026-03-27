import { useEffect, useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Send, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Broadcast {
  id: string;
  message: string;
  created_at: string | null;
}

const AdminBroadcast = () => {
  const [message, setMessage] = useState("");
  const [broadcasts, setBroadcasts] = useState<Broadcast[]>([]);
  const [sending, setSending] = useState(false);

  const fetchBroadcasts = async () => {
    const { data } = await supabase
      .from("broadcasts")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(20);
    setBroadcasts(data || []);
  };

  useEffect(() => { fetchBroadcasts(); }, []);

  const handleSend = async () => {
    if (!message.trim()) {
      toast.error("Enter a message");
      return;
    }
    setSending(true);
    const { error } = await supabase.from("broadcasts").insert({ message: message.trim() });
    if (error) {
      toast.error("Failed to send broadcast");
    } else {
      toast.success("Broadcast sent to all users!");
      setMessage("");
      fetchBroadcasts();
    }
    setSending(false);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-foreground">Broadcast Message</h1>

        <div className="glass-card p-6 space-y-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your broadcast message..."
            className="w-full h-32 bg-muted/30 border border-primary/20 rounded-xl p-4 text-foreground placeholder:text-muted-foreground resize-none focus:outline-none focus:border-primary/50"
          />
          <Button
            onClick={handleSend}
            disabled={sending}
            className="bg-primary hover:bg-primary/90 gap-2"
          >
            <Send size={16} />
            {sending ? "Sending..." : "Send Broadcast"}
          </Button>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-semibold text-foreground">Recent Broadcasts</h2>
          {broadcasts.map((b) => (
            <div key={b.id} className="glass-card p-4 flex items-start justify-between">
              <div>
                <p className="text-foreground">{b.message}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {b.created_at ? new Date(b.created_at).toLocaleString() : ""}
                </p>
              </div>
            </div>
          ))}
          {broadcasts.length === 0 && (
            <p className="text-muted-foreground text-center py-8">No broadcasts yet</p>
          )}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminBroadcast;
