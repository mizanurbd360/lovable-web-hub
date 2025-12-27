import { GraduationCap, Code, Zap, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">About</span> Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-1">
              <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                <User className="w-32 h-32 text-muted-foreground" />
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-heading font-semibold text-foreground">
              Hi, I'm <span className="gradient-text">Mizanur Rahman</span>
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              I am a passionate Digital Marketer, AI Automation Builder, and WhatsApp & Messenger Automation Expert from Bangladesh. Currently pursuing my Diploma in Computer Technology (2024-2028), I combine my technical education with hands-on experience in modern automation technologies.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              As a Prompt Engineer, I specialize in creating intelligent automation solutions that help businesses streamline their operations. My expertise spans across AI tools, workflow automation, and social media marketing strategies that deliver real results.
            </p>

            {/* Stats/Highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="glass-card rounded-xl p-4 hover-lift">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Code className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">AI Builder</p>
                    <p className="text-muted-foreground text-sm">Automation Expert</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-4 hover-lift">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Prompt Engineer</p>
                    <p className="text-muted-foreground text-sm">AI Specialist</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-4 hover-lift">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">DCT Student</p>
                    <p className="text-muted-foreground text-sm">2024 - 2028</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-4 hover-lift">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <span className="text-lg">🇧🇩</span>
                  </div>
                  <div>
                    <p className="text-foreground font-semibold">Bangladesh</p>
                    <p className="text-muted-foreground text-sm">Based In</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
