import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, AlertTriangle } from "lucide-react";

interface ServiceNoticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: () => void;
}

const ServiceNoticeModal = ({ isOpen, onClose, onContinue }: ServiceNoticeModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-w-sm mx-auto bg-white rounded-2xl p-0 border-0 shadow-2xl">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              {/* Opay-style logo */}
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-3 shadow-lg">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center relative">
                  <div className="w-4 h-4 bg-green-500 rounded-full relative">
                    <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <h2 className="text-xl font-bold text-gray-800">Service Notice</h2>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Warning Section */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 p-5 mb-6 rounded-xl shadow-sm">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-0.5">
                <AlertTriangle className="w-4 h-4 text-red-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-red-800 font-bold text-lg mb-2">Opay Bank Service Temporarily Down</h3>
                <p className="text-red-700 text-sm leading-relaxed mb-3">
                  We're currently experiencing technical issues with Opay bank transfers. This is a temporary disruption and we're working to resolve it quickly.
                </p>
                <div className="bg-white/50 p-3 rounded-lg border border-red-100">
                  <p className="text-red-600 text-xs font-medium">
                    ⚡ Alternative: Please use other banks (GTBank, Access Bank, First Bank, etc.) for instant transfers
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-green-50 border border-green-200 p-4 mb-6 rounded-xl">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
              <div>
                <p className="text-green-800 text-sm font-medium mb-1">All Other Banks Working Normally</p>
                <p className="text-green-700 text-xs">Your payment will be processed instantly with any other bank</p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <Button 
            onClick={onContinue}
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-base py-4 rounded-xl font-semibold shadow-lg transition-all duration-200 transform hover:scale-[1.02]"
          >
            Continue with Other Banks
          </Button>
          
          {/* Footer */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">PayGo Financial Services - Secure & Fast Transfers</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceNoticeModal;