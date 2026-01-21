import TypewriterText from "./TypewriterText";

const AnnouncementBanner = () => {
  return (
    <div className="bg-gradient-pink text-foreground text-center py-2.5 px-4 animate-fade-up">
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
