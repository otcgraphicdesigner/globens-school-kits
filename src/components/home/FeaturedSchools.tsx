import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { mockSchools } from '@/data/mockData';

export function FeaturedSchools() {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Partner Schools
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We work with top schools across India to bring you 
              the exact books and supplies your child needs.
            </p>
          </div>
          <Button 
            variant="outline" 
            onClick={() => navigate('/schools')}
            className="group"
          >
            View All Schools
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {mockSchools.map((school, index) => (
            <button
              key={school.id}
              onClick={() => navigate(`/schools/${school.id}`)}
              className="group bg-card rounded-2xl p-6 shadow-soft hover:shadow-lifted transition-all duration-300 hover:-translate-y-1 text-left"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* School Icon/Logo Placeholder */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <span className="text-2xl">🏫</span>
              </div>

              <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {school.name}
              </h3>

              <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                <span>{school.city}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
