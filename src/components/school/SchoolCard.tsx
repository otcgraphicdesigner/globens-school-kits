import { School } from '@/types';
import { MapPin, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SchoolCardProps {
  school: School;
}

export function SchoolCard({ school }: SchoolCardProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/schools/${school.id}`)}
      className="group w-full bg-card rounded-2xl p-6 shadow-soft hover:shadow-lifted transition-all duration-300 hover:-translate-y-1 text-left border border-transparent hover:border-primary/20"
    >
      <div className="flex items-start gap-4">
        {/* School Logo/Icon */}
        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
          {school.logo ? (
            <img src={school.logo} alt={school.name} className="w-12 h-12 object-contain" />
          ) : (
            <span className="text-3xl">🏫</span>
          )}
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors truncate">
            {school.name}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-2 truncate">
            {school.address}
          </p>

          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 shrink-0" />
            <span>{school.city}, {school.state}</span>
          </div>
        </div>

        <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
      </div>
    </button>
  );
}
