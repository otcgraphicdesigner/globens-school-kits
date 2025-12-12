import { Package } from '@/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Crown, Package as PackageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PackageCardProps {
  pkg: Package;
  isSelected: boolean;
  onSelect: () => void;
}

const tierConfig = {
  basic: {
    icon: PackageIcon,
    color: 'bg-muted text-muted-foreground',
    border: 'border-border',
    badge: 'bg-muted text-muted-foreground',
    label: 'Value Pick',
  },
  standard: {
    icon: Star,
    color: 'bg-accent text-accent-foreground',
    border: 'border-accent',
    badge: 'bg-accent text-accent-foreground',
    label: 'Most Popular',
  },
  premium: {
    icon: Crown,
    color: 'bg-primary text-primary-foreground',
    border: 'border-primary',
    badge: 'bg-primary text-primary-foreground',
    label: 'Best Value',
  },
};

export const PackageCard = ({ pkg, isSelected, onSelect }: PackageCardProps) => {
  const config = tierConfig[pkg.tier];
  const TierIcon = config.icon;

  const notebookBrand = pkg.notebooks[0]?.product.brand || 'Standard';
  const stationeryBrand = pkg.stationery[0]?.product.brand || 'Standard';
  const totalNotebooks = pkg.notebooks.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div
      className={cn(
        'relative rounded-2xl border-2 bg-card p-6 transition-all duration-300',
        isSelected
          ? `${config.border} ring-2 ring-offset-2 ring-offset-background ${pkg.tier === 'premium' ? 'ring-primary' : pkg.tier === 'standard' ? 'ring-accent' : 'ring-muted-foreground'}`
          : 'border-border hover:border-muted-foreground/50',
        pkg.tier === 'standard' && 'scale-[1.02] shadow-elegant'
      )}
    >
      {/* Tier Badge */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <Badge className={cn('px-4 py-1 font-medium', config.badge)}>
          {config.label}
        </Badge>
      </div>

      {/* Header */}
      <div className="text-center pt-4 pb-6 border-b border-border">
        <div
          className={cn(
            'w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center',
            config.color
          )}
        >
          <TierIcon className="h-7 w-7" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-1">{pkg.name}</h3>
        <p className="text-sm text-muted-foreground">{pkg.description}</p>
      </div>

      {/* Pricing */}
      <div className="text-center py-6 border-b border-border">
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-4xl font-bold text-foreground">₹{pkg.price}</span>
          <span className="text-lg text-muted-foreground line-through">₹{pkg.mrp}</span>
        </div>
        <Badge variant="secondary" className="mt-2 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
          Save {pkg.discount}%
        </Badge>
      </div>

      {/* Contents Summary */}
      <div className="py-6 space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Textbooks</span>
          <span className="font-medium text-foreground">{pkg.textbooks.length} NCERT Books</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Notebooks</span>
          <span className="font-medium text-foreground">{totalNotebooks}× {notebookBrand}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Stationery</span>
          <span className="font-medium text-foreground">{stationeryBrand} Kit</span>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-3 pb-6">
        {pkg.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3 text-sm">
            <Check className={cn('h-4 w-4 shrink-0', pkg.tier === 'premium' ? 'text-primary' : 'text-green-500')} />
            <span className="text-foreground">{feature}</span>
          </div>
        ))}
      </div>

      {/* Select Button */}
      <Button
        className="w-full"
        variant={isSelected ? 'default' : pkg.tier === 'standard' ? 'default' : 'outline'}
        size="lg"
        onClick={onSelect}
      >
        {isSelected ? 'Selected' : 'Select Package'}
      </Button>
    </div>
  );
};
