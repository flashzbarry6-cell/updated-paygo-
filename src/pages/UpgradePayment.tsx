
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const UpgradePayment = () => {
  const navigate = useNavigate();
  const { level } = useParams<{ level: string }>();
  const [amount, setAmount] = useState("₦20,000");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("paygo-user");
    if (userData) {
      const user = JSON.parse(userData);
      setIsTyping(true);
      
      const nameText = user.name || "Charis Benjamin";
      let nameIndex = 0;
      const nameTimer = setInterval(() => {
        setFullName(nameText.slice(0, nameIndex + 1));
        nameIndex++;
        if (nameIndex >= nameText.length) {
          clearInterval(nameTimer);
          
          const emailText = user.email || "benjamincharis15@gmail.com";
          let emailIndex = 0;
          const emailTimer = setInterval(() => {
            setEmail(emailText.slice(0, emailIndex + 1));
            emailIndex++;
            if (emailIndex >= emailText.length) {
              clearInterval(emailTimer);
              setIsTyping(false);
            }
          }, 50);
        }
      }, 50);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/upgrade-prepare-payment", { state: { email: email, level: level } });
  };

  return (
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="relative z-10">
          <header className="bg-card/80 backdrop-blur-xl border-b border-primary/20 p-4 flex items-center">
            <ArrowLeft className="mr-3 cursor-pointer text-primary" onClick={() => navigate(`/upgrade-benefits/${level}`)} />
            <h1 className="text-xl font-bold text-foreground">Upgrade Payment</h1>
          </header>
          
          <div className="p-4 flex-1">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-muted-foreground text-sm font-medium">Amount</label>
                <Input 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="bg-input border-border rounded-xl h-12 text-foreground"
                  readOnly
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-muted-foreground text-sm font-medium">Full Name</label>
                <Input 
                  placeholder="Your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-input border-border rounded-xl h-12 text-foreground placeholder:text-muted-foreground"
                  readOnly={isTyping}
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-muted-foreground text-sm font-medium">Your Email Address</label>
                <Input 
                  type="email"
                  placeholder="email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-input border-border rounded-xl h-12 text-foreground placeholder:text-muted-foreground"
                  readOnly={isTyping}
                />
              </div>
              
              <div className="pt-4">
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-xl py-6 rounded-full btn-glow"
                  disabled={isTyping}
                >
                  Pay
                </Button>
              </div>
              
              <div className="text-center text-muted-foreground pt-4">
                <p className="text-sm">Your upgrade will be activated once payment is confirmed.</p>
              </div>
            </form>
          </div>
          
          <footer className="border-t border-border p-4 text-center text-muted-foreground">
            <p className="text-sm">PayGo Financial Services LTD</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default UpgradePayment;
