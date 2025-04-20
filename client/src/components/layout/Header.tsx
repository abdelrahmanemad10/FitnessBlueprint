import { useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="relative overflow-hidden">
      <div className="relative h-screen max-h-[700px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 to-background z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
          alt="Fitness Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <nav className="absolute top-0 left-0 right-0 z-20 py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-white flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="font-display text-dark text-xl font-bold">AI</span>
              </div>
              <span className="font-display text-2xl tracking-wider">TRAINER</span>
            </Link>

            <div className="hidden md:flex space-x-8">
              <a href="#program" className="text-white hover:text-primary transition-colors">
                Program
              </a>
              <a href="#schedule" className="text-white hover:text-primary transition-colors">
                Schedule
              </a>
              <a href="#gallery" className="text-white hover:text-primary transition-colors">
                Gallery
              </a>
              <a href="#contact" className="text-white hover:text-primary transition-colors">
                Contact
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white"
                onClick={toggleMobileMenu}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="mt-4 p-4 bg-card rounded-lg max-w-7xl mx-auto md:hidden">
              <div className="flex justify-end mb-2">
                <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <div className="flex flex-col space-y-4">
                <a
                  href="#program"
                  className="text-white hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Program
                </a>
                <a
                  href="#schedule"
                  className="text-white hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Schedule
                </a>
                <a
                  href="#gallery"
                  className="text-white hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Gallery
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
