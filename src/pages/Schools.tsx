import { useState, useMemo } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SchoolCard } from '@/components/school/SchoolCard';
import { mockSchools } from '@/data/mockData';
import { Input } from '@/components/ui/input';
import { Search, MapPin } from 'lucide-react';

const Schools = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSchools = useMemo(() => {
    if (!searchQuery.trim()) return mockSchools;
    
    const query = searchQuery.toLowerCase();
    return mockSchools.filter(
      school =>
        school.name.toLowerCase().includes(query) ||
        school.city.toLowerCase().includes(query) ||
        school.state.toLowerCase().includes(query) ||
        school.pincode.includes(query)
    );
  }, [searchQuery]);

  // Group schools by city
  const schoolsByCity = useMemo(() => {
    const grouped: Record<string, typeof mockSchools> = {};
    filteredSchools.forEach(school => {
      if (!grouped[school.city]) {
        grouped[school.city] = [];
      }
      grouped[school.city].push(school);
    });
    return grouped;
  }, [filteredSchools]);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Find Your School
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Search for your child's school to browse available book bundles and stationery kits.
            </p>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by school name, city, or pincode..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-card text-foreground border-0 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Schools List */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          {filteredSchools.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No schools found
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                We couldn't find any schools matching "{searchQuery}". 
                Try a different search term or check back later.
              </p>
            </div>
          ) : (
            <div className="space-y-12">
              {Object.entries(schoolsByCity).map(([city, schools]) => (
                <div key={city}>
                  <div className="flex items-center gap-2 mb-6">
                    <MapPin className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-semibold text-foreground">
                      {city}
                    </h2>
                    <span className="text-sm text-muted-foreground">
                      ({schools.length} {schools.length === 1 ? 'school' : 'schools'})
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {schools.map((school) => (
                      <SchoolCard key={school.id} school={school} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Schools;
