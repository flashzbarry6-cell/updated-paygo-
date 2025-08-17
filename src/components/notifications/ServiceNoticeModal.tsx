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
      <DialogContent className="w-full max-w-xs mx-auto bg-white rounded-xl p-0 border-0 shadow-lg">
        <div className="p-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              {/* Opay-style logo */}
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-2">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center relative">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full relative">
                    <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
              <h2 className="text-lg font-bold text-gray-800">Service Notice</h2>
            </div>
            <button 
              onClick={onClose}
              className="w-6 h-6 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          {/* Warning Section */}
          <div className="bg-red-50 border border-red-200 p-3 mb-4 rounded-lg">
            <div className="flex items-start">
              <AlertTriangle className="w-4 h-4 text-red-600 mr-2 mt-0.5" />
              <div className="flex-1">
                <h3 className="text-red-800 font-semibold text-sm mb-1">Opay Bank Service Down</h3>
                <p className="text-red-700 text-xs">
                  Please use other banks for transfers. All other banks working normally.
                </p>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <Button 
            onClick={onContinue}
            className="w-full bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] hover:from-[#8a1ce6] hover:to-[#ff5722] text-white text-sm py-2.5 rounded-lg font-medium"
          >
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceNoticeModal;