import { ExternalLink, Folder } from "lucide-react";

const portfolioItems = [
  {
    title: "WhatsApp Automation Bot",
    category: "Automation",
    description: "Custom WhatsApp bot for automated customer support and lead generation.",
  },
  {
    title: "E-commerce Workflow",
    category: "Workflow",
    description: "Complete automation workflow for order processing and inventory management.",
  },
  {
    title: "Social Media Campaign",
    category: "Marketing",
    description: "Successful digital marketing campaign achieving 200% growth in engagement.",
  },
  {
    title: "AI Chatbot Integration",
    category: "AI",
    description: "Intelligent chatbot powered by AI for seamless customer interactions.",
  },
  {
    title: "Messenger Marketing Funnel",
    category: "Automation",
    description: "Automated messenger funnel for lead nurturing and conversion.",
  },
  {
    title: "Business Process Automation",
    category: "Workflow",
    description: "End-to-end business automation reducing manual work by 70%.",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent projects and successful automation implementations
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden hover-lift group cursor-pointer"
            >
              {/* Placeholder Image Area */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                <Folder className="w-16 h-16 text-muted-foreground/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                
                {/* Category Badge */}
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-primary/80 text-foreground rounded-full">
                  {item.category}
                </span>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <ExternalLink className="w-8 h-8 text-foreground" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* More Coming Soon */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            More projects coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
