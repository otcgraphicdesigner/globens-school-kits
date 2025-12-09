import { ClassLevel, Section } from '@/types';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface ClassSelectorProps {
  classes: ClassLevel[];
  sections: Section[];
  selectedClass: ClassLevel | null;
  selectedSection: Section | null;
  onClassSelect: (classLevel: ClassLevel) => void;
  onSectionSelect: (section: Section) => void;
}

export function ClassSelector({
  classes,
  sections,
  selectedClass,
  selectedSection,
  onClassSelect,
  onSectionSelect,
}: ClassSelectorProps) {
  return (
    <div className="space-y-6">
      {/* Class Selection */}
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-4">Select Class</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {classes.map((classLevel) => (
            <button
              key={classLevel.id}
              onClick={() => onClassSelect(classLevel)}
              className={cn(
                "p-4 rounded-xl border-2 text-center transition-all duration-200 hover:shadow-soft",
                selectedClass?.id === classLevel.id
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border bg-card hover:border-primary/30"
              )}
            >
              <span className="font-semibold">{classLevel.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Section Selection (if class is selected and sections exist) */}
      {selectedClass && sections.length > 0 && (
        <div className="animate-fade-up">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Select Section <span className="text-muted-foreground font-normal">(Optional)</span>
          </h3>
          <div className="flex flex-wrap gap-3">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionSelect(section)}
                className={cn(
                  "w-14 h-14 rounded-xl border-2 flex items-center justify-center transition-all duration-200 hover:shadow-soft",
                  selectedSection?.id === section.id
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-border bg-card hover:border-primary/30"
                )}
              >
                <span className="text-lg font-semibold">{section.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Continue prompt */}
      {selectedClass && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4">
          <ChevronRight className="h-4 w-4" />
          <span>
            {sections.length > 0 && !selectedSection 
              ? "You can skip section selection and continue to view bundles"
              : "Continue below to view available bundles"
            }
          </span>
        </div>
      )}
    </div>
  );
}
