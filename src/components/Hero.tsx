
import { ArrowDownCircle } from "lucide-react";
import { WavyBackground } from "./ui/wavy-background";
import { useTheme } from "./ThemeProvider";

const Hero = () => {
  const { theme } = useTheme();
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-8 relative">
      <WavyBackground 
        containerClassName="min-h-screen absolute inset-0"
        className="max-w-6xl w-full mx-auto"
        colors={theme === "dark" 
          ? ["#4c8bf5", "#60a5fa", "#93c5fd", "#bae6fd", "#38bdf8"] 
          : ["#60a5fa", "#93c5fd", "#bae6fd", "#dbeafe", "#eff6ff"]}
        backgroundFill={theme === "dark" ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.8)"}
        blur={10}
        speed="slow"
        waveWidth={50}
      />
      
      <div className="section-container flex flex-col items-center text-center z-10">
        <div className="mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary/20 to-primary/40 flex items-center justify-center">
            <div className="w-28 h-28 rounded-full bg-background flex items-center justify-center">
              <span className="text-4xl font-light text-primary">VN</span>
            </div>
          </div>
        </div>
        
        <h1 className="mb-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
          Vatsal Nanda
        </h1>
        
        <h2 className={`text-xl md:text-2xl mb-6 ${theme === "dark" ? "text-white" : "text-black"} drop-shadow-md opacity-0 animate-fade-up`} style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
          Senior Analyst at Natwest Group
        </h2>
        
        <p className={`max-w-xl ${theme === "dark" ? "text-white" : "text-black"} drop-shadow-md mb-8 opacity-0 animate-fade-up`} style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
          Finance professional with expertise in payment reconciliation, investigations, and regulatory compliance.
        </p>
        
        <div className="flex gap-4 opacity-0 animate-fade-up" style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}>
          <a 
            href="#contact" 
            className="px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Contact Me
          </a>
          <a 
            href="#about" 
            className="px-6 py-3 rounded-full border border-border hover:bg-accent transition-colors flex items-center gap-2"
          >
            Learn More <ArrowDownCircle className="h-4 w-4" />
          </a>
        </div>
        
        <div className="w-full max-w-md mt-16 opacity-0 animate-fade-up" style={{ animationDelay: "1.1s", animationFillMode: "forwards" }}>
          <div className="flex justify-center">
            <a 
              href="#about" 
              className={`animate-bounce flex flex-col items-center ${theme === "dark" ? "text-white" : "text-black"} hover:text-foreground transition-colors`}
            >
              <span className="text-sm mb-2 drop-shadow-md">Scroll Down</span>
              <ArrowDownCircle className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
