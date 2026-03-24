
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
          className={`p-3 rounded-full border transition-all text-sm font-medium ${
            selectedNetwork === network 
              ? "bg-primary text-primary-foreground border-primary glow-soft" 
              : "bg-card border-border text-foreground hover:border-primary/50"
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
