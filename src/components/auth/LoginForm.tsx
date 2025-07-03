
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login - in a real app, this would call an API
    setTimeout(() => {
      // Simple validation
      if (!email || !password) {
        toast.error("Please fill in all fields");
        setIsLoading(false);
        return;
      }
      
      // Store user info in localStorage (just for demo purposes)
      localStorage.setItem("paygo-user", JSON.stringify({
        name: email.split('@')[0],
        email: email,
        isLoggedIn: true
      }));
      
      // Set flag to indicate user just logged in
      localStorage.setItem("paygo-just-logged-in", "true");
      
      // Clear onboarding flag to show it again
      localStorage.removeItem("paygo-onboarding-completed");
      
      // Show login success notification
      toast.success("Login successful! Welcome back.", {
        description: "You've successfully logged into your PayGo account."
      });
      
      navigate("/dashboard");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-full h-12 px-4"
        />
      </div>
      <div>
        <Input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-full h-12 px-4"
        />
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-black hover:bg-gray-800 text-white py-5 rounded-full text-lg"
      >
        {isLoading ? "Loading..." : "Login"}
      </Button>
      <div className="text-center mt-4">
        <Link to="/register" className="text-paygo-purple text-base hover:underline">
          Don't have an account? Register
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
