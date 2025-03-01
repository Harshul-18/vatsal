
import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

type TubeLightProps = {
  position: "left" | "right";
};

const TubeLight = ({ position }: TubeLightProps) => {
  const { theme } = useTheme();
  const [isBlinking, setIsBlinking] = useState(true);
  const [isOn, setIsOn] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      // Reset state when switching to dark mode
      setIsBlinking(true);
      setIsOn(false);
      
      // Start blinking sequence
      const blinkInterval = setInterval(() => {
        setIsOn(prev => !prev);
      }, 200);
      
      // Stop blinking after 1.2 seconds and stay on
      setTimeout(() => {
        clearInterval(blinkInterval);
        setIsBlinking(false);
        setIsOn(true);
      }, 1200);
      
      return () => clearInterval(blinkInterval);
    }
  }, [theme]);

  if (theme !== "dark") return null;

  return (
    <div 
      className={`absolute top-0 h-full w-8 ${position === "left" ? "left-0" : "right-0"} pointer-events-none`}
      style={{ opacity: isOn ? 1 : 0.1 }}
    >
      <div className="relative h-full w-full">
        {/* Tube light */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[90%] w-3 rounded-full bg-white/20 backdrop-blur-sm shadow-[0_0_15px_5px_rgba(255,255,255,0.3)]"></div>
        </div>
        
        {/* Tube caps */}
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-5 h-3 bg-gray-600 rounded-t-sm"></div>
        <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-5 h-3 bg-gray-600 rounded-b-sm"></div>
        
        {/* Glow effect */}
        <div className={`absolute inset-0 bg-white/10 blur-xl transition-opacity duration-100 ${isOn ? 'opacity-100' : 'opacity-0'}`}></div>
      </div>
    </div>
  );
};

export default TubeLight;
