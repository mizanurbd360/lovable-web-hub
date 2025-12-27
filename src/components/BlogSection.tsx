import { Calendar, ArrowRight, FileText } from "lucide-react";

const blogPosts = [
  {
    title: "Getting Started with AI Automation",
    excerpt: "Learn how to leverage AI tools to automate your daily tasks and boost productivity.",
    date: "Coming Soon",
    category: "AI",
  },
  {
    title: "WhatsApp Bot Best Practices",
    excerpt: "Essential tips for building effective WhatsApp automation bots for your business.",
    date: "Coming Soon",
    category: "Automation",
  },
  {
    title: "Social Media Growth Hacks",
    excerpt: "Proven strategies to grow your social media presence organically.",
    date: "Coming Soon",
    category: "Marketing",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            Latest <span className="gradient-text">Blog</span> Posts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and tips on automation, AI, and digital marketing
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="glass-card rounded-2xl overflow-hidden hover-lift group cursor-pointer"
            >
              {/* Placeholder Image */}
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                <FileText className="w-16 h-16 text-muted-foreground/50" />
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium bg-accent/80 text-accent-foreground rounded-full">
                  {post.category}
                </span>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>

                <h3 className="text-lg font-heading font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Coming Soon Note */}
        <div className="text-center mt-12 glass-card rounded-xl p-6 max-w-md mx-auto">
          <p className="text-muted-foreground">
            Blog posts are coming soon! Stay tuned for valuable content on automation and digital marketing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
