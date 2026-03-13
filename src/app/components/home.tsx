import { Link } from "react-router";
import { Calendar, Award, Heart } from "lucide-react";
import { Button } from "./ui/button";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600948836101-f9ffda59d250?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyJTIwc2Fsb24lMjBtb2Rlcm4lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzMzNzkwNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          }}
        >
          <div className="absolute inset-0 bg-white/70"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-5xl md:text-6xl mb-6 text-primary">
            Your Hair, Our Passion
          </h1>
          <p className="text-xl mb-8 text-foreground">
            Experience exceptional hair care in a serene, professional environment
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/booking">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6">
                Book Appointment
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" className="border-primary text-primary hover:bg-secondary px-8 py-6">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3">Expert Stylists</h3>
              <p className="text-muted-foreground">
                Our team brings years of experience and ongoing training in the latest techniques
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3">Premium Products</h3>
              <p className="text-muted-foreground">
                We use only the finest professional-grade products for your hair care needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3">Flexible Scheduling</h3>
              <p className="text-muted-foreground">
                Book online anytime with our easy scheduling system that fits your lifestyle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1541533848490-bc8115cd6522?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYWlyc3R5bGlzdCUyMGN1dHRpbmclMjBoYWlyfGVufDF8fHx8MTc3MzI5MDI2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Hairstylist at work"
                className="w-full h-[400px] object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl mb-6 text-primary">About Belle Hair Studio</h2>
              <p className="mb-4 text-foreground">
                Founded with a passion for excellence, Belle Hair Studio has been transforming
                hair and boosting confidence for over a decade. Our team of skilled stylists
                stays ahead of trends while honoring timeless techniques.
              </p>
              <p className="mb-6 text-foreground">
                We believe that great hair starts with listening to our clients. Every visit
                begins with a personalized consultation to understand your vision and recommend
                the best approach for your unique hair type and lifestyle.
              </p>
              <Link to="/contact">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl mb-6 text-white">Ready for a Fresh Look?</h2>
          <p className="text-xl mb-8 text-white/90">
            Book your appointment today and discover the difference professional care makes
          </p>
          <Link to="/booking">
            <Button
              size="lg"
              className="bg-white hover:bg-white/90 text-accent px-8 py-6"
            >
              Schedule Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
