
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  heading: string;
}

const AuthLayout = ({ children, heading }: AuthLayoutProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#FFF1F3]">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="bg-paygo-gradient w-full max-w-[300px] mx-auto rounded-lg p-4 mb-6">
            <h1 className="text-4xl font-bold text-white">PayGo</h1>
          </div>
          <h2 className="text-2xl font-medium text-gray-600">{heading}</h2>
        </div>
        {children}
      </div>
      <div className="mt-auto py-4 text-gray-600">
        <p>PayGo Financial Services LTD</p>
      </div>
    </div>
  );
};

export default AuthLayout;
