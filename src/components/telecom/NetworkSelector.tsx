interface NetworkSelectorProps {
  selectedNetwork: string | null;
  onNetworkSelect: (network: string) => void;
}

const NetworkSelector = ({ selectedNetwork, onNetworkSelect }: NetworkSelectorProps) => {
  const networks = [
    { name: "Airtel", color: "from-red-500 to-red-600" },
    { name: "MTN", color: "from-yellow-400 to-yellow-500" },
    { name: "Glo", color: "from-green-500 to-green-600" },
    { name: "9mobile", color: "from-green-400 to-green-500" }
  ];

  return (
    <div className="grid grid-cols-2 gap-3 mb-4">
      {networks.map((network) => (
        <button
          key={network.name}
          className={`p-4 rounded-2xl border transition-all duration-200 ${
            selectedNetwork === network.name 
              ? "bg-gradient-pink text-white border-primary shadow-glow"
              : "glass-card text-foreground border-border/50 hover:border-primary"
          }`}
          onClick={() => onNetworkSelect(network.name)}
        >
          <span className="font-semibold">{network.name}</span>
        </button>
      ))}
    </div>
  );
};

export default NetworkSelector;