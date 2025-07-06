import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NotificationProvider } from "@/contexts/NotificationContext";
import { WelcomeBonusProvider } from "@/contexts/WelcomeBonusContext";
import WelcomeBonusNotification from "@/components/notifications/WelcomeBonusNotification";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import TransferBank from "./pages/TransferBank";
import TransferSuccess from "./pages/TransferSuccess";
import UpgradeAccount from "./pages/UpgradeAccount";
import UpgradeBenefits from "./pages/UpgradeBenefits";
import BuyPayId from "./pages/BuyPayId";
import PaymentConfirmation from "./pages/PaymentConfirmation";
import PaymentReceived from "./pages/PaymentReceived";
import PaymentVerificationFailed from "./pages/PaymentVerificationFailed";
import Data from "./pages/Data";
import Airtime from "./pages/Airtime";
import Support from "./pages/Support";
import Loan from "./pages/Loan";
import About from "./pages/About";
import Refer from "./pages/Refer";
import History from "./pages/History";
import NotificationSettings from "./pages/NotificationSettings";
import NotFound from "./pages/NotFound";
import LiveChat from "./pages/LiveChat";
import Profile from "./pages/Profile";
import ProfileInformation from "./pages/ProfileInformation";
import PreparePayment from "./pages/PreparePayment";
import BankTransfer from "./pages/BankTransfer";
import PaymentFailed from "./pages/PaymentFailed";
import UpgradePayment from "./pages/UpgradePayment";
import UpgradePreparePayment from "./pages/UpgradePreparePayment";
import UpgradeBankTransfer from "./pages/UpgradeBankTransfer";
import UpgradePaymentConfirmation from "./pages/UpgradePaymentConfirmation";
import UpgradePaymentFailed from "./pages/UpgradePaymentFailed";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <NotificationProvider>
      <WelcomeBonusProvider>
        <Toaster />
        <Sonner />
        <WelcomeBonusNotification />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transfer" element={<TransferBank />} />
            <Route path="/transfer-success" element={<TransferSuccess />} />
            <Route path="/upgrade-account" element={<UpgradeAccount />} />
            <Route path="/upgrade-benefits/:level" element={<UpgradeBenefits />} />
            <Route path="/upgrade-payment/:level" element={<UpgradePayment />} />
            <Route path="/upgrade-prepare-payment" element={<UpgradePreparePayment />} />
            <Route path="/upgrade-bank-transfer" element={<UpgradeBankTransfer />} />
            <Route path="/upgrade-payment-confirmation" element={<UpgradePaymentConfirmation />} />
            <Route path="/upgrade-payment-failed" element={<UpgradePaymentFailed />} />
            <Route path="/buy-pay-id" element={<BuyPayId />} />
            <Route path="/prepare-payment" element={<PreparePayment />} />
            <Route path="/bank-transfer" element={<BankTransfer />} />
            <Route path="/payment-confirmation" element={<PaymentConfirmation />} />
            <Route path="/payment-received" element={<PaymentReceived />} />
            <Route path="/payment-failed" element={<PaymentFailed />} />
            <Route path="/payment-verification-failed" element={<PaymentVerificationFailed />} />
            <Route path="/data" element={<Data />} />
            <Route path="/airtime" element={<Airtime />} />
            <Route path="/support" element={<Support />} />
            <Route path="/loan" element={<Loan />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile-information" element={<ProfileInformation />} />
            <Route path="/refer" element={<Refer />} />
            <Route path="/history" element={<History />} />
            <Route path="/notification-settings" element={<NotificationSettings />} />
            <Route path="/live-chat" element={<LiveChat />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </WelcomeBonusProvider>
    </NotificationProvider>
  </QueryClientProvider>
);

export default App;
