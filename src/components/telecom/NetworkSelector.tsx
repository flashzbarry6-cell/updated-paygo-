
import { Button } from "@/components/ui/button";

interface NetworkSelectorProps {
  selectedNetwork: string | null;
  onNetworkSelect: (network: string) => void;
}

const NetworkSelector = ({ selectedNetwork, onNetworkSelect }: NetworkSelectorProps) => {
  const networks = ["Airtel", "MTN", "Glo", "9mobile"];

  return (
    <div className="grid grid-cols-2 gap-3 mb-4">
      {networks.map((network) => (
        <button
          key={network}
          className={`p-4 rounded-full border ${
            selectedNetwork === network 
              ? network === "MTN" 
                ? "bg-purple-600 text-white" 
                : "bg-gray-100"
              : "bg-white"
          }`}
          onClick={() => onNetworkSelect(network)}
        >
          {network}
        </button>
      ))}
    </div>
  );
};

export default NetworkSelector;
