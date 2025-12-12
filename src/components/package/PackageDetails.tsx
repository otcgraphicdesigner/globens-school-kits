import { Package } from '@/types';
import { Book, BookOpen, Pencil } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface PackageDetailsProps {
  pkg: Package;
}

export const PackageDetails = ({ pkg }: PackageDetailsProps) => {
  return (
    <div className="bg-card rounded-2xl border border-border p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Package Contents</h3>
      
      <Accordion type="multiple" defaultValue={['textbooks', 'notebooks', 'stationery']} className="space-y-2">
        {/* Textbooks */}
        <AccordionItem value="textbooks" className="border rounded-xl px-4">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Book className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Textbooks</p>
                <p className="text-sm text-muted-foreground">{pkg.textbooks.length} books included</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2 pb-4">
              {pkg.textbooks.map((item) => (
                <div key={item.id} className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-foreground">{item.product.name}</p>
                    <p className="text-xs text-muted-foreground">{item.product.publisher}</p>
                  </div>
                  <span className="text-muted-foreground">×{item.quantity}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Notebooks */}
        <AccordionItem value="notebooks" className="border rounded-xl px-4">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Notebooks</p>
                <p className="text-sm text-muted-foreground">
                  {pkg.notebooks.reduce((sum, item) => sum + item.quantity, 0)} notebooks ({pkg.notebooks[0]?.product.brand})
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2 pb-4">
              {pkg.notebooks.map((item) => (
                <div key={item.id} className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-foreground">{item.product.name}</p>
                    <p className="text-xs text-muted-foreground">{item.product.description}</p>
                  </div>
                  <span className="text-muted-foreground">×{item.quantity}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Stationery */}
        <AccordionItem value="stationery" className="border rounded-xl px-4">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                <Pencil className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="text-left">
                <p className="font-medium text-foreground">Stationery</p>
                <p className="text-sm text-muted-foreground">
                  {pkg.stationery.length} items ({pkg.stationery[0]?.product.brand})
                </p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2 pb-4">
              {pkg.stationery.map((item) => (
                <div key={item.id} className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-foreground">{item.product.name}</p>
                    <p className="text-xs text-muted-foreground">{item.product.description}</p>
                  </div>
                  <span className="text-muted-foreground">×{item.quantity}</span>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
