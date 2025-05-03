
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: ReactNode;
  heading: string;
}

const AuthLayout = ({ children, heading }: AuthLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFF1F3]">
      {/* Help text in top right */}
      <div className="absolute top-8 right-6">
        <Link to="#" className="text-paygo-purple text-xl font-medium">
          Need Help?
        </Link>
      </div>
      
      <div className="flex flex-col items-center justify-center flex-grow px-4 pt-16 pb-12">
        <div className="w-full max-w-md">
          <div className="mb-12 text-center">
            <div className="w-full max-w-[300px] mx-auto mb-8">
              <img 
                src="/lovable-uploads/a7bca988-9dbf-4cf6-9e23-6afca0f09ebb.png" 
                alt="PayGo Logo" 
                className="w-full h-auto"
              />
            </div>
            <h2 className="text-2xl font-medium text-gray-600">{heading}</h2>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
