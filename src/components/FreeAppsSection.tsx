import { Download, Copy, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const apps = [
  {
    name: "Adobe Photoshop Premium",
    description: "Professional photo editing software",
    link: "#",
  },
  {
    name: "Adobe Illustrator",
    description: "Vector graphics editor",
    link: "#",
  },
  {
    name: "Microsoft Office Suite",
    description: "Complete office productivity suite",
    link: "#",
  },
  {
    name: "Adobe Premiere Pro",
    description: "Professional video editing software",
    link: "#",
  },
  {
    name: "Adobe After Effects",
    description: "Motion graphics and visual effects",
    link: "#",
  },
  {
    name: "CorelDRAW Graphics Suite",
    description: "Professional graphic design software",
    link: "#",
  },
  {
    name: "Filmora Pro",
    description: "Easy-to-use video editor",
    link: "#",
  },
  {
    name: "IDM (Internet Download Manager)",
    description: "Fast download accelerator",
    link: "#",
  },
];

const FreeAppsSection = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopyLink = (link: string, index: number) => {
    navigator.clipboard.writeText(link);
    setCopiedIndex(index);
    toast.success("Link copied to clipboard!");
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="apps" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Free Premium</span> Software & Apps
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I provide useful premium software completely free for everyone. Download and enjoy!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        {/* Apps List - Simple Clean Style */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl overflow-hidden">
            {apps.map((app, index) => (
              <div
                key={index}
                className={`flex flex-col sm:flex-row sm:items-center justify-between p-5 ${
                  index !== apps.length - 1 ? "border-b border-border/50" : ""
                } hover:bg-muted/30 transition-colors duration-200`}
              >
                <div className="mb-3 sm:mb-0">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-heading font-semibold text-foreground">
                      {app.name}
                    </h3>
                    <span className="px-2 py-0.5 text-xs font-bold bg-green-500/20 text-green-400 rounded-md uppercase tracking-wider">
                      FREE
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">
                    {app.description}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={app.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-foreground font-medium text-sm rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </a>
                  <button
                    onClick={() => handleCopyLink(app.link, index)}
                    className="inline-flex items-center justify-center w-10 h-10 bg-muted/50 text-muted-foreground hover:text-foreground rounded-lg transition-colors"
                    title="Copy Link"
                  >
                    {copiedIndex === index ? (
                      <Check className="w-4 h-4 text-green-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-muted-foreground text-sm mt-6">
            More apps will be added regularly. Stay tuned!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FreeAppsSection;
