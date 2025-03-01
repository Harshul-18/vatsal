
const Experience = () => {
  const experiences = [
    {
      company: "NATWEST GROUP",
      title: "Senior Operation Analyst (Payments Reconciliation & Investigations)",
      period: "Aug 2022 - Present",
      responsibilities: [
        "Built strong connections with colleagues and customers, offering trusted advice, driving improvements, and staying adaptable, aligned with NatWest's core values.",
        "Provided expert support on banking and credit card services, earning customer trust and satisfaction.",
        "Implemented fraud detection protocols to safeguard against fraudulent activities, ensuring security for customers and the company.",
        "Ensured compliance with ORAR policies and accounting standards, maintaining operational accuracy.",
        "Contributed to efficiency by supporting new banking initiatives.",
        "Investigated payment discrepancies thoroughly, ensuring accurate resolution.",
        "Collaborated across teams to address process bottlenecks, enhancing efficiency.",
        "Delivered excellent customer service, addressing inquiries promptly, training new team members, and staying updated on policies."
      ]
    },
    {
      company: "THINK AND LEARN PVT. LTD.",
      title: "Business Development Executive",
      period: "Feb 2022 - Mar 2022",
      responsibilities: [
        "Developed strategies to acquire and retain clients for educational products.",
        "Worked on achieving sales targets while maintaining excellent client relationships.",
        "Collaborated with teams to implement effective marketing campaigns."
      ]
    },
    {
      company: "PARV TRADE LINKS PVT. LTD",
      title: "Management Assistant",
      period: "May 2021 - Dec 2021",
      responsibilities: [
        "Coordinated financial activities, prepared reports, managed correspondence, and provided crucial administrative support to streamline operations.",
        "Assisted in organizing meetings, maintaining records, ensuring effective communication among team members, and optimizing finance department efficiency."
      ]
    },
    {
      company: "SHARPER IMAGE FLOORS PVT. LTD.",
      title: "Business Operation Intern",
      period: "2020",
      responsibilities: [
        "Supported day-to-day operations, coordinated projects, and liaised with clients and vendors in the interior design field.",
        "Assisted in project scheduling, managed administrative tasks, ensuring smooth business functioning, and gained industry insight."
      ]
    },
    {
      company: "PERFECT FINANCE (NBFC)",
      title: "Sales & Research Intern",
      period: "2019",
      responsibilities: [
        "Assisted in market research, analyzed client needs, and supported sales initiatives.",
        "Identified potential leads, conducted market analysis, and contributed to strategic sales strategies within the financial industry."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="section-container">
        <h2 className="section-title mb-12">Professional Experience</h2>
        
        <div className="relative border-l-2 border-primary/30 pl-8 ml-4 md:ml-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="mb-12 last:mb-0 opacity-0 animate-fade-up" 
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: "forwards" }}
            >
              <div className="absolute w-5 h-5 bg-primary rounded-full -left-[11px] mt-1.5 shadow"></div>
              <div className="bg-background rounded-lg shadow-sm p-6 card-hover border border-border/30">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <h3 className="text-xl font-medium mb-1 md:mb-0">{exp.company}</h3>
                  <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">{exp.period}</span>
                </div>
                <h4 className="text-lg text-primary mb-4">{exp.title}</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
