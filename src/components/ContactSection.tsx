import { Mail, MessageCircle, Linkedin, Facebook } from "lucide-react";

const contactLinks = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat on WhatsApp",
    href: "https://wa.me/message/DOL6DGZ5VYBOC1",
    color: "bg-green-500/20 text-green-400 hover:bg-green-500/30",
  },
  {
    icon: Mail,
    label: "Email",
    value: "mizanur360pro@gmail.com",
    href: "mailto:mizanur360pro@gmail.com",
    color: "bg-primary/20 text-primary hover:bg-primary/30",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "Mizanur Automation",
    href: "https://www.facebook.com/mizanur.automation",
    color: "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Mizanur Rahman",
    href: "https://www.linkedin.com/in/mizanur-rahman-1b3b20392/",
    color: "bg-sky-500/20 text-sky-400 hover:bg-sky-500/30",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let's connect! Feel free to reach out through any of these platforms
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-4">
            {contactLinks.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card rounded-xl p-5 flex items-center gap-4 hover-lift transition-colors ${contact.color}`}
              >
                <div className="w-12 h-12 rounded-xl bg-background/50 flex items-center justify-center">
                  <contact.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{contact.label}</p>
                  <p className="font-medium text-foreground">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-12 glass-card rounded-xl p-8">
            <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
              Let's Work Together
            </h3>
            <p className="text-muted-foreground mb-6">
              Have a project in mind? I'd love to hear about it and discuss how I can help.
            </p>
            <a
              href="https://wa.me/message/DOL6DGZ5VYBOC1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-foreground font-medium rounded-xl hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Start a Conversation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
