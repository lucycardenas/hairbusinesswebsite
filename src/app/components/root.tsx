import { Outlet, Link, useLocation } from "react-router";
import { Menu, X, Scissors } from "lucide-react";
import { useState } from "react";

export function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Booking", path: "/booking" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <Scissors className="w-8 h-8 text-primary" />
              <span className="text-2xl tracking-tight text-primary">Belle Hair Studio</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`transition-colors ${
                    isActive(item.path)
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block py-3 ${
                    isActive(item.path) ? "text-accent" : "text-foreground"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Scissors className="w-6 h-6 text-primary" />
                <span className="text-xl text-primary">Belle Hair Studio</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional hair care and styling services in a welcoming, modern environment.
              </p>
            </div>

            <div>
              <h3 className="mb-4">Hours</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Monday - Friday: 9am - 7pm</p>
                <p>Saturday: 10am - 6pm</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div>
              <h3 className="mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>123 Beauty Lane</p>
                <p>New York, NY 10001</p>
                <p>(555) 123-4567</p>
                <p>hello@bellehair.com</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Belle Hair Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
