const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="section-container">
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            <span className="font-heading font-semibold gradient-text">MIZANUR RAHMAN</span>
            <span className="mx-2">—</span>
            AI & Automation Enthusiast | Bangladesh
          </p>
          <p className="text-muted-foreground/60 text-xs mt-2">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
