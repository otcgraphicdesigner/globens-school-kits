import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Truck, Shield, BadgePercent } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden gradient-hero text-primary-foreground">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container relative py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 text-secondary">
              <BadgePercent className="h-4 w-4" />
              <span className="text-sm font-medium">Save up to 20% on bundles</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              School Books & Stationery,{' '}
              <span className="text-secondary">Delivered to Your Door</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-lg">
              Get the complete book set and stationery kit for your child's school. 
              Select your school, pick the class, and we'll handle the rest.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => navigate('/schools')}
                className="group"
              >
                Start Shopping
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline-light" 
                size="xl"
                onClick={() => navigate('/about')}
              >
                Learn More
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <CheckCircle2 className="h-5 w-5 text-secondary" />
                <span>100% Authentic Books</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Truck className="h-5 w-5 text-secondary" />
                <span>Free Delivery 500+</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Shield className="h-5 w-5 text-secondary" />
                <span>Secure Payments</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative animate-float">
              {/* Main Card */}
              <div className="bg-card text-card-foreground rounded-2xl shadow-elevated p-6 max-w-sm ml-auto">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Class 5 Bundle</h3>
                    <p className="text-sm text-muted-foreground">Delhi Public School</p>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Books (8)</span>
                    <span>₹450</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Stationery Kit</span>
                    <span>₹350</span>
                  </div>
                  <div className="flex justify-between text-sm text-success font-medium">
                    <span>Bundle Discount</span>
                    <span>-₹100</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <div>
                    <p className="text-sm text-muted-foreground">Total</p>
                    <p className="text-2xl font-bold">₹700</p>
                  </div>
                  <Button variant="gold" size="sm">
                    Add to Cart
                  </Button>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -left-4 bg-secondary text-secondary-foreground rounded-xl px-4 py-2 shadow-lg animate-pulse-soft">
                <span className="font-bold">20% OFF</span>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-8 -right-8 h-32 w-32 bg-secondary/20 rounded-full blur-3xl" />
              <div className="absolute -top-8 left-1/4 h-24 w-24 bg-accent/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
