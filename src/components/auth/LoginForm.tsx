import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogIn, Mail, Lock } from "lucide-react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      if (!email || !password) {
        toast.error("Please fill in all fields");
        setIsLoading(false);
        return;
      }
      
      localStorage.setItem("paygo-user", JSON.stringify({
        name: email.split('@')[0],
        email: email,
        isLoggedIn: true
      }));
      
      localStorage.setItem("paygo-just-logged-in", "true");
      localStorage.removeItem("paygo-onboarding-completed");
      
      toast.success("Login successful! Welcome back.", {
        description: "You've successfully logged into your PayGo account."
      });
      
      navigate("/dashboard");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
        <Input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="glass-card rounded-full h-12 pl-12 pr-4 bg-card/60 border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary focus:shadow-glow-sm transition-all"
        />
      </div>
      <div className="relative">
        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
        <Input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="glass-card rounded-full h-12 pl-12 pr-4 bg-card/60 border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary focus:shadow-glow-sm transition-all"
        />
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-pink hover:opacity-90 text-foreground py-5 rounded-full text-lg font-medium shadow-button btn-glow disabled:opacity-50 transition-all flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-foreground border-t-transparent rounded-full animate-spin" />
        ) : (
          <>
            <LogIn size={18} />
            Login
          </>
        )}
      </Button>
      <div className="text-center mt-6">
        <Link to="/register" className="text-primary text-sm font-medium hover:text-primary/80 transition-colors">
          Don't have an account? <span className="underline">Register</span>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
