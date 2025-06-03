
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PromotionalCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotions = [
    {
      id: 1,
      image: "/lovable-uploads/5210f63f-6e77-4eae-9e29-78db2fe0e9e0.png",
      title: "Game Day - NASDEC Complex Lusaka"
    },
    {
      id: 2,
      image: "/lovable-uploads/1a6210e9-4170-4748-b97b-bdf41e69c68b.png",
      title: "Transact & Win"
    },
    {
      id: 3,
      image: "/lovable-uploads/30368476-1b01-4f2e-9284-5c5d1c602239.png",
      title: "Winners of K20 Airtime"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % promotions.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [promotions.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promotions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promotions.length) % promotions.length);
  };

  return (
    <div className="relative overflow-hidden rounded-xl">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {promotions.map((promo) => (
          <div key={promo.id} className="w-full flex-shrink-0">
            <img 
              src={promo.image} 
              alt={promo.title}
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-opacity"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {promotions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-[#9b87f5]' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PromotionalCarousel;
