const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        <p className="text-sm text-muted-foreground text-center">
          © {currentYear} Korean Writing Feedback AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
