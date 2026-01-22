import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CreditCard } from "lucide-react";
import { toast } from "sonner";

const BuyPayId = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("₦6,500");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Typewriter effect for name and email
  useEffect(() => {
    const userData = localStorage.getItem("paygo-user");
    if (userData) {
      const user = JSON.parse(userData);
      setIsTyping(true);
      
      // Type name
      const nameText = user.name || "Charis Benjamin";
      let nameIndex = 0;
      const nameTimer = setInterval(() => {
        setFullName(nameText.slice(0, nameIndex + 1));
        nameIndex++;
        if (nameIndex >= nameText.length) {
          clearInterval(nameTimer);
          
          // Type email after name is complete
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
    
    if (!fullName || !email) {
      toast.error("Please fill all fields");
      return;
    }

    // Navigate to preparing payment page
    navigate("/prepare-payment", { state: { email: email } });
  };

  return (
    <div className="flex justify-center min-h-screen bg-background">
      <div className="w-full max-w-sm bg-card-dark">
        <header className="bg-gradient-pink p-4 text-white flex items-center shadow-glow">
          <ArrowLeft className="mr-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => navigate("/dashboard")} />
          <h1 className="text-lg font-bold">Buy PAY ID</h1>
        </header>
        
        <div className="p-6 flex-1">
          {/* Icon */}
          <div className="flex justify-center mb-6 animate-fade-up">
            <div className="w-20 h-20 bg-gradient-pink rounded-full flex items-center justify-center shadow-glow">
              <CreditCard className="w-10 h-10 text-white" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2 animate-fade-up" style={{ animationDelay: '50ms' }}>
              <label className="text-muted-foreground text-sm uppercase tracking-wider">Amount</label>
              <Input 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="h-14 bg-card-dark border-border/50 rounded-xl text-foreground text-lg font-semibold focus:border-primary focus:ring-primary/20"
                readOnly
              />
            </div>
            
            <div className="space-y-2 animate-fade-up" style={{ animationDelay: '100ms' }}>
              <label className="text-muted-foreground text-sm uppercase tracking-wider">Full Name</label>
              <Input 
                placeholder="Your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="h-14 bg-card-dark border-border/50 rounded-xl text-foreground text-lg focus:border-primary focus:ring-primary/20"
                readOnly={isTyping}
              />
            </div>
            
            <div className="space-y-2 animate-fade-up" style={{ animationDelay: '150ms' }}>
              <label className="text-muted-foreground text-sm uppercase tracking-wider">Your Email Address</label>
              <Input 
                type="email"
                placeholder="email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 bg-card-dark border-border/50 rounded-xl text-foreground text-lg focus:border-primary focus:ring-primary/20"
                readOnly={isTyping}
              />
            </div>
            
            <div className="pt-4 animate-fade-up" style={{ animationDelay: '200ms' }}>
              <Button 
                type="submit" 
                className="w-full bg-gradient-pink hover:opacity-90 text-white text-lg py-6 rounded-full shadow-button btn-glow"
                disabled={isTyping}
              >
                Pay
              </Button>
            </div>
            
            <div className="text-center text-muted-foreground pt-4 animate-fade-up" style={{ animationDelay: '250ms' }}>
              <p className="text-sm">Your PAY ID will be displayed on the app once your payment is confirmed.</p>
            </div>
          </form>
        </div>
        
        <footer className="bg-card-dark border-t border-border/20 p-4 text-center text-muted-foreground">
          <p className="text-sm">PayGo Financial Services LTD</p>
        </footer>
      </div>
    </div>
  );
};

export default BuyPayId;