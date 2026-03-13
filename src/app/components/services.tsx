import { Check } from "lucide-react";

export function Services() {
  const services = [
    {
      category: "Hair Cutting",
      items: [
        { name: "Women's Haircut", price: "$65", description: "Includes consultation, cut, and style" },
        { name: "Men's Haircut", price: "$45", description: "Classic or modern cuts with styling" },
        { name: "Children's Haircut", price: "$35", description: "Ages 12 and under" },
        { name: "Bang Trim", price: "$15", description: "Quick touch-up between cuts" },
      ],
    },
    {
      category: "Hair Coloring",
      items: [
        { name: "Full Color", price: "$95+", description: "All-over color transformation" },
        { name: "Root Touch-Up", price: "$75", description: "Refresh your roots" },
        { name: "Highlights/Lowlights", price: "$120+", description: "Partial or full head" },
        { name: "Balayage", price: "$150+", description: "Hand-painted highlights" },
        { name: "Color Correction", price: "Consultation", description: "Complex color fixes" },
      ],
    },
    {
      category: "Styling Services",
      items: [
        { name: "Blowout", price: "$45", description: "Professional styling and finish" },
        { name: "Special Event Styling", price: "$85+", description: "Updos and formal styles" },
        { name: "Braiding", price: "$50+", description: "Various braiding styles" },
        { name: "Hair Extensions", price: "Consultation", description: "Temporary or permanent options" },
      ],
    },
    {
      category: "Treatments",
      items: [
        { name: "Deep Conditioning", price: "$35", description: "Intensive moisture treatment" },
        { name: "Keratin Treatment", price: "$200+", description: "Smoothing and frizz control" },
        { name: "Scalp Treatment", price: "$45", description: "Healthy scalp, healthy hair" },
        { name: "Olaplex Treatment", price: "$50", description: "Bond-building repair" },
      ],
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl mb-4 text-primary">Our Services</h1>
          <p className="text-xl text-foreground max-w-2xl mx-auto">
            From precision cuts to stunning color, we offer comprehensive hair care services
            tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((serviceCategory) => (
              <div
                key={serviceCategory.category}
                className="bg-white border border-border rounded-lg p-8"
              >
                <h2 className="text-2xl mb-6 text-primary border-b border-border pb-4">
                  {serviceCategory.category}
                </h2>
                <div className="space-y-6">
                  {serviceCategory.items.map((item) => (
                    <div key={item.name} className="flex gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="text-foreground">{item.name}</h3>
                          <span className="text-accent ml-2">{item.price}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8 text-center text-primary">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="mb-3 text-primary">Complimentary Consultation</h3>
              <p className="text-foreground">
                Every service begins with a personalized consultation to understand your
                hair goals and recommend the best approach.
              </p>
            </div>
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="mb-3 text-primary">Premium Products</h3>
              <p className="text-foreground">
                We exclusively use professional-grade products from trusted brands to
                ensure the health and beauty of your hair.
              </p>
            </div>
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="mb-3 text-primary">Aftercare Guidance</h3>
              <p className="text-foreground">
                Leave with personalized tips and product recommendations to maintain
                your style at home.
              </p>
            </div>
            <div className="bg-white border border-border rounded-lg p-6">
              <h3 className="mb-3 text-primary">Satisfaction Guaranteed</h3>
              <p className="text-foreground">
                Your happiness is our priority. If you're not completely satisfied,
                we'll make it right.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
