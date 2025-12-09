import { Bundle } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Package, BookOpen, Pencil, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BundleCardProps {
  bundle: Bundle;
  onAddToCart: () => void;
  isInCart?: boolean;
}

const bundleTypeConfig = {
  books: {
    icon: BookOpen,
    label: 'Book Set',
    color: 'bg-primary/10 text-primary',
  },
  stationery: {
    icon: Pencil,
    label: 'Stationery Kit',
    color: 'bg-accent/20 text-accent',
  },
  combined: {
    icon: Package,
    label: 'Complete Package',
    color: 'bg-secondary/20 text-secondary-foreground',
  },
};

export function BundleCard({ bundle, onAddToCart, isInCart }: BundleCardProps) {
  const config = bundleTypeConfig[bundle.type];
  const Icon = config.icon;

  return (
    <div className={cn(
      "group bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-lifted hover:border-primary/20",
      bundle.type === 'combined' && "ring-2 ring-secondary/50"
    )}>
      {/* Header with Type Badge */}
      <div className="relative p-6 pb-0">
        {bundle.discount > 0 && (
          <div className="absolute top-4 right-4">
            <Badge className="bg-secondary text-secondary-foreground font-bold">
              {bundle.discount}% OFF
            </Badge>
          </div>
        )}

        <div className={cn("w-14 h-14 rounded-xl flex items-center justify-center mb-4", config.color)}>
          <Icon className="w-7 h-7" />
        </div>

        <Badge variant="secondary" className="mb-3">
          {config.label}
        </Badge>

        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {bundle.name}
        </h3>

        <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
          {bundle.description}
        </p>
      </div>

      {/* Items Preview */}
      <div className="px-6 py-4 bg-muted/30">
        <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wider">
          Includes {bundle.items.length} items
        </p>
        <div className="flex flex-wrap gap-1.5">
          {bundle.items.slice(0, 4).map((item) => (
            <span
              key={item.id}
              className="text-xs px-2 py-1 rounded-md bg-background border border-border text-muted-foreground"
            >
              {item.product.name.length > 20 
                ? item.product.name.substring(0, 20) + '...' 
                : item.product.name}
            </span>
          ))}
          {bundle.items.length > 4 && (
            <span className="text-xs px-2 py-1 rounded-md bg-background border border-border text-muted-foreground">
              +{bundle.items.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Footer with Price and CTA */}
      <div className="p-6 pt-4 flex items-end justify-between gap-4">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-foreground">₹{bundle.price}</span>
            {bundle.mrp > bundle.price && (
              <span className="text-sm text-muted-foreground line-through">₹{bundle.mrp}</span>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {bundle.stock > 0 ? `${bundle.stock} in stock` : 'Out of stock'}
          </p>
        </div>

        <Button
          variant={isInCart ? "secondary" : bundle.type === 'combined' ? "gold" : "default"}
          onClick={onAddToCart}
          disabled={bundle.stock === 0 || isInCart}
          className="shrink-0"
        >
          {isInCart ? (
            <>
              <Check className="h-4 w-4" />
              Added
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
