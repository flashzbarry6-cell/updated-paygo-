
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NotificationProvider } from "@/contexts/NotificationContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import TransferBank from "./pages/TransferBank";
import BuyPayId from "./pages/BuyPayId";
import PaymentConfirmation from "./pages/PaymentConfirmation";
import Data from "./pages/Data";
import Airtime from "./pages/Airtime";
import Support from "./pages/Support";
import Loan from "./pages/Loan";
import About from "./pages/About";
import Refer from "./pages/Refer";
import History from "./pages/History";
import NotificationSettings from "./pages/NotificationSettings";
import NotFound from "./pages/NotFound";
import LiveChat from "./pages/LiveChat"; // Add this import

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <NotificationProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transfer" element={<TransferBank />} />
            <Route path="/buy-pay-id" element={<BuyPayId />} />
            <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
            <Route path="/data" element={<Data />} />
            <Route path="/airtime" element={<Airtime />} />
            <Route path="/support" element={<Support />} />
            <Route path="/loan" element={<Loan />} />
            <Route path="/about" element={<About />} />
            <Route path="/refer" element={<Refer />} />
            <Route path="/history" element={<History />} />
            <Route path="/notification-settings" element={<NotificationSettings />} />
            <Route path="/live-chat" element={<LiveChat />} /> {/* Add this route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </NotificationProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
