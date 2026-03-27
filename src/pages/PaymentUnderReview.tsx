import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const PaymentUnderReview = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/dashboard");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="flex justify-center min-h-screen bg-subtle-glow">
      <div className="w-full max-w-sm bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        <div className="relative z-10">
          <header className="glass p-3 flex items-center">
            <ArrowLeft className="mr-3 cursor-pointer text-primary" onClick={() => navigate("/dashboard")} />
            <h1 className="text-lg font-bold text-foreground">Payment Status</h1>
          </header>

          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center min-h-[70vh]">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 animate-glow-pulse">
              <Clock className="text-primary" size={40} />
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-3">Payment Under Review</h2>
            <p className="text-muted-foreground mb-2 text-sm">
              Your payment is being reviewed by our team.
            </p>
            <p className="text-muted-foreground mb-8 text-sm">
              You will be notified once it's approved.
            </p>

            <p className="text-xs text-muted-foreground mb-6">
              Redirecting to dashboard in <span className="text-primary font-bold">{countdown}s</span>
            </p>

            <Button
              onClick={() => navigate("/dashboard")}
              className="w-full bg-primary hover:bg-primary/90 rounded-full py-5 gap-2 btn-glow"
            >
              <Home size={18} />
              Back to Dashboard
            </Button>
          </div>

          <footer className="border-t border-border p-3 text-center">
            <p className="text-sm text-muted-foreground">PayGo Financial Services LTD</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PaymentUnderReview;
