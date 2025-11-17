
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: ReactNode;
  heading: string;
}

const AuthLayout = ({ children, heading }: AuthLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#E91E63]">
      {/* Help text in top right */}
      <div className="absolute top-6 right-4">
        <Link to="#" className="text-paygo-purple text-lg font-medium">
          Need Help?
        </Link>
      </div>
      
      <div className="flex flex-col items-center justify-center flex-grow px-4 py-8">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <div className="w-full max-w-[200px] mx-auto mb-6 overflow-hidden">
              <img 
                src="/lovable-uploads/63dcf04b-d54d-4fae-b4d5-6146cba42114.png" 
                alt="PayGo Logo" 
                className="w-full h-auto animate-[slide-in-right_1.5s_ease-in-out_infinite_alternate]"
              />
            </div>
            <h2 className="text-xl font-medium text-gray-600">{heading}</h2>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
