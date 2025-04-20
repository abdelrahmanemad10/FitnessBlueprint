import { Link } from "wouter";
import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Link href="/" className="text-white flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="font-display text-dark text-xl font-bold">AI</span>
            </div>
            <span className="font-display text-2xl tracking-wider">TRAINER</span>
          </Link>

          <div className="flex space-x-6 mt-6 md:mt-0">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube className="text-xl" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="text-xl" />
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="text-xl" />
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-display text-xl mb-4">ABOUT US</h4>
              <p className="text-muted-foreground text-sm">
                AI Trainer is a free platform dedicated to helping you achieve your fitness goals through
                AI-powered training methods, personalized guidance, and a supportive community.
              </p>
            </div>

            <div>
              <h4 className="font-display text-xl mb-4">QUICK LINKS</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#program" className="text-muted-foreground hover:text-primary transition-colors">
                    Training Program
                  </a>
                </li>
                <li>
                  <a href="#schedule" className="text-muted-foreground hover:text-primary transition-colors">
                    Weekly Schedule
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-xl mb-4">RESOURCES</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Nutrition Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Exercise Library
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    Recovery Tips
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-xl mb-4">CONTACT</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <Mail className="text-primary h-4 w-4 mt-1 mr-3" />
                  <span className="text-muted-foreground">support@ai-trainer.com</span>
                </li>
                <li className="flex items-start">
                  <Phone className="text-primary h-4 w-4 mt-1 mr-3" />
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="text-primary h-4 w-4 mt-1 mr-3" />
                  <span className="text-muted-foreground">AI Cloud, Digital Avenue, Virtual Space</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()} AI Trainer. Free for everyone, forever.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
