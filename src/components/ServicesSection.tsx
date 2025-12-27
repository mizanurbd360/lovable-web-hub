import { Bot, MessageSquare, TrendingUp, Workflow, Headphones } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Automation",
    description: "Leverage cutting-edge AI tools to automate repetitive tasks and boost productivity with intelligent solutions.",
    color: "primary",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp & Messenger Bot",
    description: "Custom chatbot development for WhatsApp and Facebook Messenger to automate customer engagement 24/7.",
    color: "accent",
  },
  {
    icon: TrendingUp,
    title: "Social Media Growth",
    description: "Strategic social media marketing to grow your online presence and reach your target audience effectively.",
    color: "primary",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamline your business processes with custom workflow automation that saves time and reduces errors.",
    color: "accent",
  },
  {
    icon: Headphones,
    title: "Tech Support",
    description: "Reliable technical support and consultation for all your automation and digital marketing needs.",
    color: "primary",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional services to help you automate, grow, and succeed in the digital world
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card rounded-2xl p-6 hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-14 h-14 rounded-xl ${
                  service.color === "primary" ? "bg-primary/20" : "bg-accent/20"
                } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <service.icon
                  className={`w-7 h-7 ${
                    service.color === "primary" ? "text-primary" : "text-accent"
                  }`}
                />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
