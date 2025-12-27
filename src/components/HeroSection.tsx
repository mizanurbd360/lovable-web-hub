import { User } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-32 pb-20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Profile Photo Placeholder */}
          <div className="relative mb-8 animate-scale-in">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-primary to-accent p-1 animate-pulse-glow">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <User className="w-20 h-20 md:w-28 md:h-28 text-muted-foreground" />
              </div>
            </div>
            {/* Status Indicator */}
            <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 rounded-full border-4 border-background" />
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 animate-fade-up">
            <span className="gradient-text">MIZANUR</span>
            <br />
            <span className="text-foreground">RAHMAN</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-muted-foreground font-medium mb-8 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-primary">Digital Marketer</span>
            <span className="mx-3 text-accent">•</span>
            <span className="text-accent">AI Automation Builder</span>
            <span className="mx-3 text-primary">•</span>
            <span className="text-primary">Tech Learner</span>
          </p>

          {/* Location Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-border/50 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="text-2xl">🇧🇩</span>
            <span className="text-muted-foreground text-sm">Bangladesh</span>
          </div>

          {/* Scroll Indicator */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
