const tickerItems = [
  "আমি মিজানুর রহমান – AI Automation Builder, Digital Marketer এবং টেকনোলজি লার্নার",
  "আমি WhatsApp & Messenger Automation, AI Tools এবং Workflow Automation নিয়ে কাজ করি",
  "আমি মানুষের জন্য দরকারি সফটওয়্যার, অ্যাপ এবং অটোমেশন সলিউশন শেয়ার করি",
];

const NewsTicker = () => {
  return (
    <div className="fixed top-16 md:top-20 left-0 right-0 z-40 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 border-y border-primary/30 overflow-hidden">
      <div className="relative flex items-center h-10">
        {/* Breaking News Badge */}
        <div className="absolute left-0 z-10 bg-gradient-to-r from-primary to-accent px-4 py-2 flex items-center gap-2 shadow-lg">
          <span className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
          <span className="font-bengali font-semibold text-foreground text-sm whitespace-nowrap">
            ব্রেকিং নিউজ
          </span>
        </div>

        {/* Scrolling Text */}
        <div className="flex ticker-scroll ml-32 md:ml-40">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span
              key={index}
              className="font-bengali text-foreground/90 text-sm whitespace-nowrap mx-12"
            >
              {item}
              <span className="mx-8 text-accent">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
