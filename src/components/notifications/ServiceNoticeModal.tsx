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
      <DialogContent className="w-full max-w-xs mx-auto bg-card rounded-2xl p-0 border border-primary/20 shadow-lg">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-2">
                <AlertTriangle className="w-4 h-4 text-primary" />
              </div>
              <h2 className="text-lg font-bold text-foreground">Service Notice</h2>
            </div>
            <button 
              onClick={onClose}
              className="w-6 h-6 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          <div className="bg-destructive/10 border border-destructive/20 p-3 mb-4 rounded-xl">
            <div className="flex items-start">
              <AlertTriangle className="w-4 h-4 text-destructive mr-2 mt-0.5" />
              <div className="flex-1">
                <h3 className="text-destructive font-semibold text-sm mb-1">Opay Bank Service Down</h3>
                <p className="text-destructive/80 text-xs">
                  Please use other banks for transfers. All other banks working normally.
                </p>
              </div>
            </div>
          </div>

          <Button 
            onClick={onContinue}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm py-2.5 rounded-full font-medium btn-glow"
          >
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceNoticeModal;
