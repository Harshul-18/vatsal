
import { Award } from "lucide-react";

const ExtraCurricular = () => {
  const activities = [
    "Part of Sampann Seva (Sankalp Foundation)",
    "Part of DISHA Foundation of NATWEST GROUP",
    "Directorial Committee Chair of Rotaract Club of Delhi Yuva (July 1, 2023 - June 30, 2024)",
    "Charter Secretary of Rotaract Club of Delhi Yuva (July 1, 2022 - June 30, 2023)",
    "Director of Community Service, Rotaract Club of New Delhi (July 1, 2019 - June 30, 2020)",
    "Director of Membership and Professional Development, Rotaract Club of New Delhi (July 1, 2018 - June 30, 2019)"
  ];

  return (
    <section className="py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title mb-12">Extra Curricular Activities</h2>
        
        <div className="bg-background rounded-lg shadow-sm p-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-medium">Community Involvement</h3>
          </div>
          
          <ul className="space-y-4">
            {activities.map((activity, index) => (
              <li 
                key={index} 
                className="flex items-start opacity-0 animate-slide-in" 
                style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: "forwards" }}
              >
                <span className="mr-2 text-primary text-lg">•</span>
                <span className="text-muted-foreground">{activity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricular;
