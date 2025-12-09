import { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ClassSelector } from '@/components/school/ClassSelector';
import { BundleCard } from '@/components/bundle/BundleCard';
import { Button } from '@/components/ui/button';
import { mockSchools, getClassesBySchool, getSectionsByClass, getBundlesByClass } from '@/data/mockData';
import { useSelection } from '@/context/SelectionContext';
import { useCart } from '@/context/CartContext';
import { ClassLevel, Section } from '@/types';
import { ArrowLeft, MapPin, ChevronRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SchoolDetail = () => {
  const { schoolId } = useParams<{ schoolId: string }>();
  const navigate = useNavigate();
  const { selection, setSchool, setClassLevel, setSection } = useSelection();
  const { addToCart, items } = useCart();

  const [showWardDialog, setShowWardDialog] = useState(false);
  const [pendingBundle, setPendingBundle] = useState<typeof bundles[0] | null>(null);
  const [wardName, setWardName] = useState('');

  const school = useMemo(() => 
    mockSchools.find(s => s.id === schoolId), 
    [schoolId]
  );

  useEffect(() => {
    if (school) {
      setSchool(school);
    }
  }, [school, setSchool]);

  const classes = useMemo(() => 
    school ? getClassesBySchool(school.id) : [],
    [school]
  );

  const sections = useMemo(() => 
    selection.classLevel ? getSectionsByClass(selection.classLevel.id) : [],
    [selection.classLevel]
  );

  const bundles = useMemo(() => 
    school && selection.classLevel 
      ? getBundlesByClass(school.id, selection.classLevel.id)
      : [],
    [school, selection.classLevel]
  );

  const handleClassSelect = (classLevel: ClassLevel) => {
    setClassLevel(classLevel);
  };

  const handleSectionSelect = (section: Section) => {
    setSection(section.id === selection.section?.id ? null : section);
  };

  const handleAddToCart = (bundle: typeof bundles[0]) => {
    setPendingBundle(bundle);
    setShowWardDialog(true);
  };

  const handleConfirmAddToCart = () => {
    if (pendingBundle && wardName.trim() && school && selection.classLevel) {
      const ward = {
        id: `ward-${Date.now()}`,
        userId: 'guest',
        name: wardName.trim(),
        schoolId: school.id,
        classId: selection.classLevel.id,
        sectionId: selection.section?.id,
      };
      addToCart(pendingBundle, ward);
      setShowWardDialog(false);
      setWardName('');
      setPendingBundle(null);
    }
  };

  const isInCart = (bundleId: string) => {
    return items.some(item => item.bundleId === bundleId);
  };

  if (!school) {
    return (
      <Layout>
        <div className="container py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">School not found</h1>
          <Button onClick={() => navigate('/schools')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Schools
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Breadcrumb & School Info */}
      <section className="bg-primary text-primary-foreground py-8 md:py-12">
        <div className="container">
          <button
            onClick={() => navigate('/schools')}
            className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Schools
          </button>

          <div className="flex items-start gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
              <span className="text-4xl">🏫</span>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{school.name}</h1>
              <div className="flex items-center gap-1.5 text-primary-foreground/70">
                <MapPin className="h-4 w-4" />
                <span>{school.address}, {school.city}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Class Selection */}
      <section className="py-8 md:py-12 bg-background border-b border-border">
        <div className="container">
          <ClassSelector
            classes={classes}
            sections={sections}
            selectedClass={selection.classLevel}
            selectedSection={selection.section}
            onClassSelect={handleClassSelect}
            onSectionSelect={handleSectionSelect}
          />
        </div>
      </section>

      {/* Bundles */}
      {selection.classLevel && (
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container">
            <div className="flex items-center gap-2 mb-8">
              <h2 className="text-2xl font-bold text-foreground">
                Available Bundles
              </h2>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
              <span className="text-muted-foreground">
                {selection.classLevel.name}
                {selection.section && ` - Section ${selection.section.name}`}
              </span>
            </div>

            {bundles.length === 0 ? (
              <div className="text-center py-12 bg-card rounded-2xl">
                <p className="text-muted-foreground">
                  No bundles available for this class yet. Please check back later.
                </p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {bundles.map((bundle) => (
                  <BundleCard
                    key={bundle.id}
                    bundle={bundle}
                    onAddToCart={() => handleAddToCart(bundle)}
                    isInCart={isInCart(bundle.id)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Ward Name Dialog */}
      <Dialog open={showWardDialog} onOpenChange={setShowWardDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Who is this for?</DialogTitle>
            <DialogDescription>
              Enter the name of the child this bundle is for. This helps us 
              keep track of orders for multiple children.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label htmlFor="wardName">Child's Name</Label>
              <Input
                id="wardName"
                placeholder="e.g., Rahul"
                value={wardName}
                onChange={(e) => setWardName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleConfirmAddToCart()}
              />
            </div>
            <div className="flex gap-3 justify-end">
              <Button variant="outline" onClick={() => setShowWardDialog(false)}>
                Cancel
              </Button>
              <Button 
                onClick={handleConfirmAddToCart}
                disabled={!wardName.trim()}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default SchoolDetail;
