
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate registration - in a real app, this would call an API
    setTimeout(() => {
      // Simple validation
      if (!name || !email || !password) {
        toast.error("Please fill in all fields");
        setIsLoading(false);
        return;
      }
      
      // Store user info in localStorage (just for demo purposes)
      localStorage.setItem("paygo-user", JSON.stringify({
        name: name,
        email: email,
        isLoggedIn: true
      }));
      
      toast.success("Registration successful!");
      navigate("/dashboard");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-16 px-6 rounded-full bg-white text-lg"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-16 px-6 rounded-full bg-white text-lg"
        />
      </div>
      <div>
        <Input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="h-16 px-6 rounded-full bg-white text-lg"
        />
      </div>
      <div className="pt-2">
        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-black hover:bg-gray-800 text-white py-8 rounded-full text-xl font-medium"
        >
          {isLoading ? "Loading..." : "Register"}
        </Button>
      </div>
      <div className="text-center mt-6">
        <Link to="/login" className="text-paygo-purple text-lg font-medium hover:underline">
          Already have an account? Login
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
