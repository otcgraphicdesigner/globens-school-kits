import { BadgeCheck, Clock, Headphones, IndianRupee, Package, RefreshCcw } from 'lucide-react';

const features = [
  {
    icon: BadgeCheck,
    title: '100% Genuine Products',
    description: 'All books are sourced directly from authorized publishers and distributors',
  },
  {
    icon: IndianRupee,
    title: 'Best Bundle Pricing',
    description: 'Save up to 20% when you buy complete book sets and stationery kits',
  },
  {
    icon: Clock,
    title: 'Quick Delivery',
    description: 'Get your order delivered within 3-5 business days across India',
  },
  {
    icon: Package,
    title: 'Secure Packaging',
    description: 'Books are carefully packed to ensure they reach you in perfect condition',
  },
  {
    icon: RefreshCcw,
    title: 'Easy Returns',
    description: 'Hassle-free return policy within 7 days of delivery',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Our customer support team is available to help you via phone and email',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Parents Trust Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We understand the importance of getting the right materials 
            for your child's education. Here's why thousands of parents choose us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:shadow-soft transition-all duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
