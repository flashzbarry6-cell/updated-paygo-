
import TypewriterText from "./TypewriterText";

const AnnouncementBanner = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-center py-3 px-4 mx-3 mt-3 rounded-lg">
      <div className="text-sm sm:text-base font-medium">
        <TypewriterText 
          text="🚀 Great News! Payment processing is now lightning fast! Make your payments and get verified instantly!" 
          speed={100}
        />
      </div>
    </div>
  );
};

export default AnnouncementBanner;
