import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                <BookOpen className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight">Globe Nest</span>
                <span className="text-xs text-primary-foreground/70 leading-tight">
                  School Supplies
                </span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80 max-w-xs">
              Your trusted partner for school books and stationery. 
              Making education accessible, one bundle at a time.
            </p>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-primary-foreground/70 hover:text-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/schools" 
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Browse Schools
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/privacy" 
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/refund" 
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/shipping" 
                  className="text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>123 Education Lane, Sector 5, New Delhi - 110001</span>
              </li>
              <li>
                <a 
                  href="tel:+919876543210" 
                  className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:support@globenest.in" 
                  className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-secondary transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>support@globenest.in</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © 2024 Globe Nest Services. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" alt="Razorpay" className="h-6 opacity-70" />
              <span className="text-xs text-primary-foreground/40">Secure Payments</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
