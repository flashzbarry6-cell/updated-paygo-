
import TypewriterText from "./TypewriterText";

const AnnouncementBanner = () => {
  return (
    <div className="bg-gradient-to-r from-[#9b20f5] to-[#ff6f43] text-white text-center py-2 px-3 mx-3 mt-2 rounded-lg">
      <div className="text-xs sm:text-sm font-medium">
        <TypewriterText 
          text="🚀 Great News! Payment processing is now lightning fast! Make your payments and get verified instantly!" 
          speed={100}
        />
      </div>
    </div>
  );
};

export default AnnouncementBanner;
