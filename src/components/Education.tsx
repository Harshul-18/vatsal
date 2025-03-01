
import { Calendar, MapPin } from "lucide-react";

const Education = () => {
  const educationItems = [
    {
      institution: "Indian Institute of Foreign Trade (IIFT)",
      location: "Delhi, India",
      degree: "Master of Business Administration in International Business (Part Time)",
      period: "2024 - Present"
    },
    {
      institution: "Gitarattan International Business School",
      location: "Rohini, Delhi, India",
      degree: "Bachelor of Business Administration",
      period: "2018 - 2021"
    },
    {
      institution: "Language Expert",
      location: "Dwarka, Delhi, India",
      degree: "Diploma in French Language (A1 Level)",
      period: "2019 - 2020"
    },
    {
      institution: "Adarsh Public School",
      location: "Vikas Puri, Delhi, India",
      degree: "Class 12th (Commerce with Maths)",
      period: "2017 - 2018"
    }
  ];

  return (
    <section id="education" className="py-16 sm:py-24 bg-accent/50">
      <div className="section-container">
        <h2 className="section-title mb-12">Education</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-background rounded-lg shadow-sm p-6 card-hover border border-border/30 opacity-0 animate-fade-up" 
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <h3 className="text-xl font-medium mb-2">{item.institution}</h3>
              <h4 className="text-lg text-primary mb-4">{item.degree}</h4>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground">
                <div className="flex items-center mb-2 sm:mb-0">
                  <MapPin className="h-4 w-4 mr-1.5" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1.5" />
                  <span>{item.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
