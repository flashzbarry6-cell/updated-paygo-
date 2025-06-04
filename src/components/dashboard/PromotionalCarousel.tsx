
import { useState, useEffect } from "react";

const PromotionalCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotions = [
    {
      id: 1,
      title: "Get 20% Off Data",
      description: "Limited time offer on all data bundles",
      bgColor: "bg-gradient-to-r from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Free Airtime Bonus",
      description: "Buy airtime and get 5% extra",
      bgColor: "bg-gradient-to-r from-green-500 to-blue-500"
    },
    {
      id: 3,
      title: "Refer & Earn",
      description: "Earn rewards for every friend you refer",
      bgColor: "bg-gradient-to-r from-orange-500 to-red-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [promotions.length]);

  return (
    <div className="mb-4">
      <div className="relative overflow-hidden rounded-xl h-30"> {/* Reduced from h-32 to h-30 */}
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {promotions.map((promo) => (
            <div 
              key={promo.id} 
              className={`min-w-full h-full ${promo.bgColor} text-white p-4 flex flex-col justify-center`}
            >
              <h3 className="text-lg font-bold mb-1">{promo.title}</h3>
              <p className="text-sm opacity-90">{promo.description}</p>
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
