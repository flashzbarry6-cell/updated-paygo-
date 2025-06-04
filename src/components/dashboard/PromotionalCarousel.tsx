
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
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [promotions.length]);

  return (
    <div className="mb-4">
      <h3 className="text-lg font-semibold mb-3 px-1">Current Promotions</h3>
      <div className="relative overflow-hidden rounded-xl h-30">
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
            </div>
          ))}
        </div>
        
        {/* Dots indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
