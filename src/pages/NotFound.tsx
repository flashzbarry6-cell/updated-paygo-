
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-400 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Page Not Found</h2>
        <p className="text-gray-500 mb-8">The page you're looking for doesn't exist.</p>
        <Button 
          onClick={() => navigate("/dashboard")}
          className="bg-[#9b87f5] hover:bg-[#8b77e5] text-white"
        >
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
