import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Award, Heart, Target, Lightbulb, Shield, Truck, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
const stats = [{
  value: '50+',
  label: 'Partner Schools'
}, {
  value: '10,000+',
  label: 'Happy Parents'
}, {
  value: '25,000+',
  label: 'Students Served'
}, {
  value: '99%',
  label: 'Satisfaction Rate'
}];
const values = [{
  icon: Target,
  title: 'Our Mission',
  description: 'To simplify the back-to-school experience for parents by providing complete, school-approved book bundles and stationery kits delivered right to their doorstep.'
}, {
  icon: Lightbulb,
  title: 'Our Vision',
  description: 'To become India\'s most trusted platform for educational supplies, empowering every child with the right tools for academic success.'
}, {
  icon: Heart,
  title: 'Our Values',
  description: 'Quality, convenience, and trust drive everything we do. We believe every child deserves access to proper educational materials.'
}];
const features = [{
  icon: BookOpen,
  title: 'School-Approved Bundles',
  description: 'Every bundle is curated according to official school book lists, ensuring your child has exactly what they need.'
}, {
  icon: Shield,
  title: 'Quality Guaranteed',
  description: 'We partner only with authorized publishers and reputed stationery brands to deliver authentic, high-quality products.'
}, {
  icon: Truck,
  title: 'Doorstep Delivery',
  description: 'Skip the crowded bookshops. We deliver complete packages directly to your home, properly packaged and on time.'
}, {
  icon: Award,
  title: 'Best Prices',
  description: 'Our bundle pricing offers better value than buying individual items, with transparent pricing and no hidden costs.'
}];
const team = [{
  name: 'Rajesh Kumar',
  role: 'Founder & CEO',
  image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  bio: 'Former education consultant with 15 years of experience in the Indian education sector.'
}, {
  name: 'Priya Sharma',
  role: 'Head of Operations',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
  bio: 'Supply chain expert who ensures every order reaches families on time.'
}, {
  name: 'Amit Patel',
  role: 'Head of Partnerships',
  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  bio: 'Building relationships with schools across India to expand our network.'
}];
const About = () => {
  return <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/10">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
        </div>
        
        <div className="container relative py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              About Globe Nest
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Making Back-to-School{' '}
              <span className="text-primary">Effortless</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We understand the chaos of the new academic year. That's why we created Globe Nest — 
              your one-stop destination for complete school book bundles and stationery kits.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Born from a Parent's Frustration
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  It was the summer of 2025 when our founder, Sandeep, spent an entire weekend running between bookshops trying to complete his daughter's school book list. Half the books were out of stock, the prices varied wildly, and by the end, he was exhausted and frustrated.
                </p>
                <p>
                  That's when the idea struck — what if there was a simpler way? A platform 
                  where parents could simply select their school and class, and receive a 
                  complete, verified bundle of books and stationery delivered to their doorstep?
                </p>
                <p>Today, Glow Nest partners with over 50 schools across major Indian cities, serving thousands of families every academic year. We've transformed a stressful chore into a seamless, three-click experience.</p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-foreground">Started in 2025</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-foreground">HYDERABAD based</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-foreground">Parent-founded</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop" alt="Students with books" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-2xl shadow-xl border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">10,000+</p>
                    <p className="text-sm text-muted-foreground">Happy Families</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Drives Us
            </h2>
            <p className="text-muted-foreground">
              Our core principles guide every decision we make
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => <div key={index} className="bg-card rounded-3xl p-8 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 bg-secondary/20 text-secondary-foreground rounded-full text-sm font-medium mb-4">
              Why Globe Nest
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">The Glow Nest Advantage</h2>
            <p className="text-muted-foreground">
              Here's why thousands of parents trust us every year
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => <div key={index} className="group p-6 rounded-2xl border border-border bg-card hover:bg-primary hover:border-primary transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary-foreground/20 flex items-center justify-center mb-4 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary-foreground mb-2 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">
                  {feature.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet the People Behind Globe Nest
            </h2>
            <p className="text-muted-foreground">
              A passionate team dedicated to making education accessible
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => <div key={index} className="text-center group">
                <div className="relative mb-6 inline-block">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mx-auto ring-4 ring-background shadow-xl group-hover:ring-primary/20 transition-all duration-300">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground">
                  {member.bio}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary/80 p-8 md:p-12 lg:p-16">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
            </div>
            
            <div className="relative max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
                Ready to Experience the Difference?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Join thousands of parents who've made back-to-school stress-free. 
                Find your school and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="text-base">
                  <Link to="/schools">
                    Browse Schools
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>;
};
export default About;