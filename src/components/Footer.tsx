
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-medium">
              <span className="text-primary">Vatsal</span> Nanda
            </span>
          </div>
          
          <div className="text-muted-foreground text-sm">
            <p>&copy; {currentYear} Vatsal Nanda. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
