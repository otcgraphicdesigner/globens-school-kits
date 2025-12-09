import { School, BookOpen, ShoppingCart, Truck } from 'lucide-react';

const steps = [
  {
    icon: School,
    title: 'Select Your School',
    description: 'Choose from our list of partnered schools across India',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: BookOpen,
    title: 'Pick Class & Bundle',
    description: 'Select the class and choose from book or stationery bundles',
    color: 'bg-secondary/20 text-secondary-foreground',
  },
  {
    icon: ShoppingCart,
    title: 'Add to Cart',
    description: 'Review your selection and add to cart with just one click',
    color: 'bg-accent/20 text-accent',
  },
  {
    icon: Truck,
    title: 'Doorstep Delivery',
    description: 'Get your order delivered right to your doorstep',
    color: 'bg-success/20 text-success',
  },
];

export function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting your child's school supplies has never been easier. 
            Just follow these simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-border" />
                </div>
              )}

              <div className="relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-lifted transition-all duration-300 group-hover:-translate-y-1">
                {/* Step Number */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-bold shadow-md">
                  {index + 1}
                </div>

                <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-4`}>
                  <step.icon className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
