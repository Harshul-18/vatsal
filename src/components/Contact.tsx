import { Mail, Phone, MapPin } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const Contact = () => {
  const { theme } = useTheme();
  
  return (
    <section id="contact" className="py-16 sm:py-24 bg-accent/50">
      <div className="section-container">
        <h2 className="section-title mb-12">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-background rounded-lg shadow-sm p-6 card-hover flex flex-col items-center text-center opacity-0 animate-fade-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Email</h3>
            <a 
              href="mailto:nanda30vatsal06.2000@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              nanda30vatsal06.2000@gmail.com
            </a>
          </div>
          
          <div className="bg-background rounded-lg shadow-sm p-6 card-hover flex flex-col items-center text-center opacity-0 animate-fade-up" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Phone</h3>
            <a 
              href="tel:+919540740086" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              +91-9540740086
            </a>
          </div>
          
          <div className="bg-background rounded-lg shadow-sm p-6 card-hover flex flex-col items-center text-center opacity-0 animate-fade-up" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-medium mb-2">Address</h3>
            <p className="text-muted-foreground">
              New Delhi, India
            </p>
          </div>
        </div>
        
        <div className="bg-background rounded-lg shadow-sm p-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
          <h3 className="text-xl font-medium text-center mb-6">Send Me a Message</h3>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className={`w-full rounded-md border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
                    theme === "dark" 
                      ? "bg-[#221F26] text-white" 
                      : "bg-[#D3E4FD] text-foreground"
                  }`}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className={`w-full rounded-md border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
                    theme === "dark" 
                      ? "bg-[#221F26] text-white" 
                      : "bg-[#D3E4FD] text-foreground"
                  }`}
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className={`w-full rounded-md border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
                  theme === "dark" 
                    ? "bg-[#221F26] text-white" 
                    : "bg-[#D3E4FD] text-foreground"
                }`}
                placeholder="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className={`w-full rounded-md border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary ${
                  theme === "dark" 
                    ? "bg-[#221F26] text-white" 
                    : "bg-[#D3E4FD] text-foreground"
                }`}
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
