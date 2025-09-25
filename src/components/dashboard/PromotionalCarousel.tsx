
import { useState, useEffect } from "react";

const PromotionalCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotions = [
    {
      id: 1,
      title: "Game Day",
      description: "NASDEC Complex Lusaka",
      image: "/lovable-uploads/e163c715-9897-484b-9d98-c876dd692a88.png"
    },
    {
      id: 2,
      title: "Transact & Win",
      description: "Pay with PayGo and win great prizes",
      image: "/lovable-uploads/768e2174-6072-4370-8aa3-77d366e3af0d.png"
    },
    {
      id: 3,
      title: "Winners",
      description: "K20 airtime winners announced",
      image: "/lovable-uploads/3d173dfb-5e8b-4804-8e48-b57bc6124598.png"
    },
    {
      id: 4,
      title: "Smart Invest",
      description: "Start investing with as low as K50",
      image: "/lovable-uploads/5210f63f-6e77-4eae-9e29-78db2fe0e9e0.png"
    },
    {
      id: 5,
      title: "Weekly Jackpot",
      description: "Win up to K10,000 every week",
      image: "/lovable-uploads/a7bca988-9dbf-4cf6-9e23-6afca0f09ebb.png"
    },
    {
      id: 6,
      title: "Crypto Trading",
      description: "Trade Bitcoin & earn daily profits",
      image: "/lovable-uploads/30368476-1b01-4f2e-9284-5c5d1c602239.png"
    },
    {
      id: 7,
      title: "Savings Challenge",
      description: "Save K100 daily, win K50,000",
      image: "/lovable-uploads/1a6210e9-4170-4748-b97b-bdf41e69c68b.png"
    },
    {
      id: 8,
      title: "Refer & Earn",
      description: "Earn K200 for every successful referral",
      image: "/lovable-uploads/a7fcb042-8bad-43ed-9a4e-7d8555c7f2ca.png"
    },
    {
      id: 9,
      title: "We are hiring!",
      description: "Information Security Analyst position available",
      image: "/lovable-uploads/paygo-hiring.jpeg"
    },
    {
      id: 10,
      title: "Get your Virtual Card",
      description: "Download the PayGo app and get your virtual card today",
      image: "/lovable-uploads/paygo-virtual-card.jpeg"
    },
    {
      id: 11,
      title: "Download PayGo App",
      description: "Available on App Store & Google Play",
      image: "/lovable-uploads/paygo-download-app.jpeg"
    },
    {
      id: 12,
      title: "Agent Mobile App",
      description: "PayGo agent mobile app available on all stores",
      image: "/lovable-uploads/paygo-agent-app.jpeg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 3500); // Slightly faster rotation for more ads

    return () => clearInterval(timer);
  }, [promotions.length]);

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-3 px-1">Latest Promotions & Investments</h3>
      <div className="relative overflow-hidden rounded-t-2xl rounded-b-3xl h-48">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {promotions.map((promo) => (
            <div 
              key={promo.id} 
              className="min-w-full h-full relative"
            >
              <img 
                src={promo.image} 
                alt={promo.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-semibold text-lg">{promo.title}</h4>
                <p className="text-white/90 text-sm">{promo.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Dots indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {promotions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromotionalCarousel;
