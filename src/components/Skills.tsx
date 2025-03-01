
const Skills = () => {
  const skillCategories = [
    {
      name: "Professional Skills",
      skills: [
        "Project Management",
        "Regulatory Compliance",
        "Risk Assessment and Management",
        "Business Process Improvement",
        "Stakeholder Engagement",
        "Negotiation Skills"
      ]
    },
    {
      name: "Technical Skills",
      skills: [
        "Advanced Excel",
        "Data Visualization",
        "Data Analysis and Interpretation",
        "Agile Methodologies",
        "Banking Operations Management",
        "Microsoft Power BI"
      ]
    },
    {
      name: "Soft Skills",
      skills: [
        "Customer Relationship Management",
        "Interpersonal Skills",
        "Communication",
        "Team Leadership",
        "Problem Solving",
        "Adaptability"
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title mb-12">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-fade-up" 
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="bg-background rounded-lg shadow-sm p-6 card-hover border border-border/30 h-full">
                <h3 className="text-xl font-medium mb-6 text-center pb-2 border-b">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <div 
                      key={i} 
                      className="bg-accent rounded-full px-4 py-2 text-sm opacity-0 animate-scale-in" 
                      style={{ animationDelay: `${0.6 + i * 0.1}s`, animationFillMode: "forwards" }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-background rounded-lg shadow-sm p-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
          <h3 className="text-xl font-medium mb-6 text-center">Certifications</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 border border-border/30 rounded-lg">
              <p className="font-medium">Google Project Management</p>
              <p className="text-sm text-muted-foreground">Enrolled</p>
            </div>
            <div className="p-4 border border-border/30 rounded-lg">
              <p className="font-medium">Google Generative AI</p>
              <p className="text-sm text-muted-foreground">Enrolled</p>
            </div>
            <div className="p-4 border border-border/30 rounded-lg">
              <p className="font-medium">Conflict Management with Emotional Intelligence</p>
              <p className="text-sm text-muted-foreground">Certified</p>
            </div>
            <div className="p-4 border border-border/30 rounded-lg">
              <p className="font-medium">Financial Risk Management</p>
              <p className="text-sm text-muted-foreground">CAFTA Certified</p>
            </div>
            <div className="p-4 border border-border/30 rounded-lg">
              <p className="font-medium">Basic and Advanced Excel</p>
              <p className="text-sm text-muted-foreground">Certified</p>
            </div>
            <div className="p-4 border border-border/30 rounded-lg">
              <p className="font-medium">Microsoft Power BI</p>
              <p className="text-sm text-muted-foreground">Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
