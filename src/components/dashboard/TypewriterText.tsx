
import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
}

const TypewriterText = ({ text, speed = 50 }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        // Reset and start over
        setCurrentIndex(0);
        setDisplayText("");
      }
    }, speed);

    return () => clearInterval(timer);
  }, [currentIndex, text, speed]);

  return <span>{displayText}</span>;
};

export default TypewriterText;
