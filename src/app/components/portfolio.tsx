export function Portfolio() {
  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1735424080768-8730f9c8a0e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoYWlyc3R5bGUlMjB3b21hbnxlbnwxfHx8fDE3NzMzNzkwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Modern Bob",
      category: "Haircut & Style",
    },
    {
      image: "https://images.unsplash.com/photo-1712213396688-c6f2d536671f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwY29sb3JpbmclMjBzYWxvbnxlbnwxfHx8fDE3NzMzNjQ3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Balayage Highlights",
      category: "Color",
    },
    {
      image: "https://images.unsplash.com/photo-1612690207805-a3c172ea6e8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFpZGVkJTIwaGFpciUyMHN0eWxlfGVufDF8fHx8MTc3MzM3OTA1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Braided Updo",
      category: "Special Event",
    },
    {
      image: "https://images.unsplash.com/photo-1712641966810-611ff1503c6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXJseSUyMGhhaXIlMjBzdHlsaW5nfGVufDF8fHx8MTc3MzMzNjUxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Natural Curls",
      category: "Styling",
    },
    {
      image: "https://images.unsplash.com/photo-1541533848490-bc8115cd6522?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyc3R5bGlzdCUyMGN1dHRpbmclMjBoYWlyfGVufDF8fHx8MTc3MzI5MDI2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Precision Cut",
      category: "Haircut",
    },
    {
      image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBtb2Rlcm4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMzNzkwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Salon Experience",
      category: "Studio",
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-4 text-primary">Our Portfolio</h1>
          <p className="text-xl text-foreground max-w-2xl mx-auto">
            Explore our recent work and get inspired for your next hair transformation
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-white border border-border"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-1 text-primary">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-12 text-center text-primary">Client Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-border rounded-lg p-6">
              <p className="mb-4 text-foreground italic">
                "Belle Hair Studio completely transformed my look! The stylists really
                listened to what I wanted and delivered beyond my expectations."
              </p>
              <p className="text-primary">— Sarah M.</p>
            </div>
            <div className="bg-white border border-border rounded-lg p-6">
              <p className="mb-4 text-foreground italic">
                "I've been coming here for years and wouldn't trust anyone else with my
                hair. Professional, friendly, and always on point."
              </p>
              <p className="text-primary">— Jessica L.</p>
            </div>
            <div className="bg-white border border-border rounded-lg p-6">
              <p className="mb-4 text-foreground italic">
                "The best balayage I've ever had! The color is so natural and beautiful.
                I get compliments everywhere I go."
              </p>
              <p className="text-primary">— Michelle K.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
