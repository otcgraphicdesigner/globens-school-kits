import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, User, Menu, X, BookOpen, Phone } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function Header() {
  const { itemCount } = useCart();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-transform group-hover:scale-105">
            <BookOpen className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground leading-tight">
              Globe Nest
            </span>
            <span className="text-xs text-muted-foreground leading-tight">
              School Supplies
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/schools" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Browse Schools
          </Link>
          <Link 
            to="/about" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a 
            href="tel:+919876543210" 
            className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="h-4 w-4" />
            <span>+91 98765 43210</span>
          </a>

          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            onClick={() => navigate('/cart')}
          >
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-xs font-bold text-secondary-foreground">
                {itemCount}
              </span>
            )}
          </Button>

          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate('/account')}
            className="hidden sm:flex"
          >
            <User className="h-5 w-5" />
          </Button>

          <Button
            variant="default"
            size="sm"
            onClick={() => navigate('/schools')}
            className="hidden sm:flex"
          >
            Shop Now
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden border-t border-border bg-card overflow-hidden transition-all duration-300",
          isMenuOpen ? "max-h-64" : "max-h-0"
        )}
      >
        <nav className="container flex flex-col gap-2 py-4">
          <Link 
            to="/"
            className="px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/schools"
            className="px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Browse Schools
          </Link>
          <Link 
            to="/about"
            className="px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/account"
            className="px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            My Account
          </Link>
        </nav>
      </div>
    </header>
  );
}
