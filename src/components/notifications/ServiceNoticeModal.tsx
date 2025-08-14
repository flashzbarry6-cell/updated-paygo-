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
      <DialogContent className="w-full max-w-sm mx-auto bg-white rounded-2xl p-0 border-0">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] rounded-full flex items-center justify-center mr-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] rounded-full"></div>
                </div>
              </div>
              <h2 className="text-lg font-semibold text-gray-800">Service Notice</h2>
            </div>
            <X className="w-5 h-5 text-gray-400 cursor-pointer" onClick={onClose} />
          </div>

          {/* Warning Section */}
          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-4 rounded-r-lg">
            <div className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-orange-500 mr-3 mt-0.5" />
              <div>
                <h3 className="text-orange-800 font-semibold mb-2">Opay Bank Service Down</h3>
                <p className="text-orange-700 text-sm">
                  We're currently experiencing issues with Opay bank transfers. Please use other banks for your payments.
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            We apologize for any inconvenience. All other banks are working normally and your payment will be processed immediately.
          </p>

          {/* Action Button */}
          <Button 
            onClick={onContinue}
            className="w-full bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] hover:from-[#8b10e5] hover:to-[#e55a32] text-white text-base py-3 rounded-full"
          >
            I Understand
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceNoticeModal;