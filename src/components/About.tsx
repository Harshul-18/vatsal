
import { Briefcase, GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-accent/50 py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title mb-12">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-background rounded-lg shadow-sm p-6 card-hover opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium">Experience</h3>
            </div>
            <p className="text-muted-foreground">
              Currently working as a Senior Operation Analyst at Natwest Group, with prior experience in business development and management.
            </p>
          </div>
          
          <div className="bg-background rounded-lg shadow-sm p-6 card-hover opacity-0 animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium">Education</h3>
            </div>
            <p className="text-muted-foreground">
              Pursuing MBA at Indian Institute of Foreign Trade (IIFT) with a background in Business Administration and specialized training.
            </p>
          </div>
          
          <div className="bg-background rounded-lg shadow-sm p-6 card-hover opacity-0 animate-fade-up" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium">Certifications</h3>
            </div>
            <p className="text-muted-foreground">
              Certified in various relevant fields including Project Management, Financial Risk Management, and Advanced Excel.
            </p>
          </div>
        </div>
        
        <div className="mt-12 bg-background rounded-lg shadow-sm p-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
          <p className="mb-4">
            I am a dedicated finance professional with a strong background in banking operations and regulatory compliance. Currently working as a Senior Operation Analyst at Natwest Group, I specialize in payments reconciliation and investigations.
          </p>
          <p>
            With expertise in project management, data analysis, and risk assessment, I am committed to maintaining operational accuracy while delivering exceptional customer service. I am currently pursuing an MBA in International Business to further enhance my skills and knowledge in the global financial sector.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
