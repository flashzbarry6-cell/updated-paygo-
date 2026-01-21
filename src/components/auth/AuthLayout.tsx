import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AuthLayoutProps {
  children: ReactNode;
  heading: string;
}

const AuthLayout = ({ children, heading }: AuthLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-subtle-glow relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      {/* Help text in top right */}
      <div className="absolute top-6 right-4 z-10">
        <Link to="#" className="text-primary text-sm font-medium hover:text-primary/80 transition-colors">
          Need Help?
        </Link>
      </div>
      
      <div className="flex flex-col items-center justify-center flex-grow px-4 py-8 relative z-10">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center animate-fade-up">
            <div className="w-full max-w-[180px] mx-auto mb-6 overflow-hidden">
              <img 
                src="/lovable-uploads/63dcf04b-d54d-4fae-b4d5-6146cba42114.png" 
                alt="PayGo Logo" 
                className="w-full h-auto animate-float"
              />
            </div>
            <h2 className="text-lg font-medium text-muted-foreground">{heading}</h2>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
