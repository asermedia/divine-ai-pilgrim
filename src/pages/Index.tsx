import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CheckCircle2, Clock, Heart, MapPin, Shield, Users, Sparkles, TrendingUp, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Chatbot } from "@/components/Chatbot";
import templeHero from "@/assets/temple-hero.jpg";
import temple1 from "@/assets/temple-1.jpg";
import temple2 from "@/assets/temple-2.jpg";
import temple3 from "@/assets/temple-3.jpg";
import temple4 from "@/assets/temple-4.jpg";
import pauseVideo from "@/assets/pause_video.mp4";

const Index = () => {
  const navigate = useNavigate();
  
  const scrollToCTA = () => {
    document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen font-poppins">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${templeHero})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--sacred-gold)/0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--primary)/0.2),transparent_50%)]" />
        
        {/* Login Buttons */}
        <div className="absolute top-6 right-6 z-10 flex gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="lg">
                Login as Devotee
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Welcome to UPOS</DialogTitle>
                <DialogDescription>
                  Are you a devotee looking to avail the UPOS services?
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 pt-4">
                <Button size="lg" onClick={() => navigate('/register')}>
                  Yes, Register Now
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigate('/login')}>
                  Already have an account? Login
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" size="lg">
                Login as Temple
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Temple Registration</DialogTitle>
                <DialogDescription>
                  Are you a temple looking to join UPOS?
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 pt-4">
                <Button size="lg" onClick={() => navigate('/register')}>
                  Yes, Register Temple
                </Button>
                <Button variant="outline" size="lg" onClick={() => navigate('/login')}>
                  Already registered? Login
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-primary text-primary-foreground px-6 py-2 text-sm font-medium">
              🙏 Made with ❤️ in India
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
              India's First AI-Powered Pilgrimage OS
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A new way to experience darshan — plan, book, and give with peace and transparency.
            </p>
            
            <Button 
              onClick={scrollToCTA}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Join Early Access
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-slide-up">
            <h2 className="text-4xl font-bold mb-8 text-foreground">
              We Understand Your Journey
            </h2>
            <div className="prose prose-lg mx-auto text-muted-foreground space-y-6">
              <p className="text-lg leading-relaxed">
                Every devotee knows the struggle — endless queues under the scorching sun, confusion about darshan timings, dealing with middlemen who charge extra, and never knowing if your donation truly reached the temple.
              </p>
              <p className="text-lg leading-relaxed">
                Your faith deserves better. Your time is precious. Your intentions are pure.
              </p>
              <p className="text-lg font-semibold text-primary">
                That's exactly why we built the Unified Pilgrimage OS — to bring order, faith, and joy back to the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          {/* Stat */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <div className="inline-block bg-primary/10 px-8 py-6 rounded-2xl border-2 border-primary/20">
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">2.5 Hours</p>
              <p className="text-muted-foreground">Average queue time for a 15-second darshan</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Ramesh Kumar</p>
                    <p className="text-sm text-muted-foreground">Devotee from Delhi</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Finally, a platform that respects my time and faith. Planned my entire Char Dham yatra in minutes!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Priya Sharma</p>
                    <p className="text-sm text-muted-foreground">Family Organizer</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Booking for 15 family members was seamless. No middlemen, no confusion, just pure devotion."
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Pandit Vishwanath</p>
                    <p className="text-sm text-muted-foreground">Temple Administrator</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "This system brought transparency and efficiency to our temple operations. Devotees are happier than ever."
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Temple Logos */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-6">Trusted by temples and devotees across India</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <Badge variant="outline" className="px-4 py-2">🕉️ Tirupati Temple</Badge>
              <Badge variant="outline" className="px-4 py-2">🙏 Vaishno Devi</Badge>
              <Badge variant="outline" className="px-4 py-2">🔱 Kedarnath</Badge>
              <Badge variant="outline" className="px-4 py-2">🌺 Shirdi Sai</Badge>
              <Badge variant="outline" className="px-4 py-2">🪷 Golden Temple</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Temples Gallery */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Experience Sacred Destinations</h2>
            <p className="text-xl text-muted-foreground">Connect with India's most revered pilgrimage sites</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-square">
                <img 
                  src={temple1} 
                  alt="Tirupati Balaji Temple with golden gopuram" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex items-end p-6">
                <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                  <h3 className="text-xl font-bold text-foreground mb-1">Tirupati Balaji</h3>
                  <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Sacred abode in Andhra Pradesh
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-square">
                <img 
                  src={temple2} 
                  alt="Vaishno Devi cave temple with mountain backdrop" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex items-end p-6">
                <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                  <h3 className="text-xl font-bold text-foreground mb-1">Vaishno Devi</h3>
                  <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Divine cave shrine in Jammu
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-square">
                <img 
                  src={temple3} 
                  alt="Golden Temple Amritsar reflecting in sacred pool" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex items-end p-6">
                <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                  <h3 className="text-xl font-bold text-foreground mb-1">Golden Temple</h3>
                  <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Serene sanctuary in Amritsar
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="aspect-square">
                <img 
                  src={temple4} 
                  alt="Kedarnath temple in Himalayan mountains" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent flex items-end p-6">
                <div className="transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                  <h3 className="text-xl font-bold text-foreground mb-1">Kedarnath</h3>
                  <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Himalayan spiritual destination
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">See UPOS in Action</h2>
            <p className="text-xl text-muted-foreground">Watch how we're transforming the pilgrimage experience</p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20">
              <video 
                className="w-full h-full object-cover" 
                controls
              >
                <source src={pauseVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* AI Advantage Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">The UPOS Advantage</h2>
            <p className="text-xl text-muted-foreground">Experience the difference AI-powered planning makes</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Old System */}
              <Card className="bg-muted/50 border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                    ❌ Old System
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-destructive mr-3">•</span>
                      <span className="text-muted-foreground">Hours wasted in unpredictable queues</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-destructive mr-3">•</span>
                      <span className="text-muted-foreground">No clarity on timings or crowd</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-destructive mr-3">•</span>
                      <span className="text-muted-foreground">Middlemen charging 20-50% extra</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-destructive mr-3">•</span>
                      <span className="text-muted-foreground">Zero donation transparency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-destructive mr-3">•</span>
                      <span className="text-muted-foreground">Difficult to plan multi-temple visits</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* UPOS */}
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/30 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
                    ✨ With UPOS
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-0.5" />
                      <span className="text-foreground font-medium">AI predicts best darshan times</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-0.5" />
                      <span className="text-foreground font-medium">Real-time queue & crowd updates</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-0.5" />
                      <span className="text-foreground font-medium">Zero middlemen, transparent pricing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-0.5" />
                      <span className="text-foreground font-medium">100% traceable digital donations</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-3 mt-0.5" />
                      <span className="text-foreground font-medium">Complete yatra planned in minutes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Powerful Features for Modern Devotees</h2>
            <p className="text-xl text-muted-foreground">Everything you need for a peaceful pilgrimage</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">AI Darshan Planner</h3>
                <p className="text-muted-foreground">
                  Smart recommendations based on crowd patterns, weather, and auspicious timings for the perfect darshan experience.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Real-Time Queue Forecasts</h3>
                <p className="text-muted-foreground">
                  Know exactly how long you'll wait. Live updates help you choose the best time to visit and avoid crowds.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Smart Donation Tracking</h3>
                <p className="text-muted-foreground">
                  Every rupee is tracked digitally. Receive instant receipts and see exactly where your contribution goes.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Verified Priest Booking</h3>
                <p className="text-muted-foreground">
                  Book authenticated priests directly for pujas and rituals. No agents, fair pricing, complete transparency.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Temple Admin Dashboard</h3>
                <p className="text-muted-foreground">
                  Manage crowds, track donations, coordinate staff — all from one powerful, easy-to-use dashboard.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Multilingual Voice Concierge</h3>
                <p className="text-muted-foreground">
                  Get help in your language. Voice-guided assistance in 15+ Indian languages for everyone's convenience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Transparent & Fair Pricing</h2>
            <p className="text-xl text-muted-foreground">No hidden charges. No middlemen.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-6 font-bold text-lg text-foreground">Feature</th>
                    <th className="text-left py-4 px-6 font-bold text-lg text-muted-foreground">Current System</th>
                    <th className="text-left py-4 px-6 font-bold text-lg text-primary">UPOS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-secondary/30 transition-colors">
                    <td className="py-4 px-6 font-medium text-foreground">Middleman Fees</td>
                    <td className="py-4 px-6 text-muted-foreground">Pay 20–50% extra</td>
                    <td className="py-4 px-6 text-primary font-semibold">Zero middlemen, transparent pricing</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-secondary/30 transition-colors">
                    <td className="py-4 px-6 font-medium text-foreground">Planning Tools</td>
                    <td className="py-4 px-6 text-muted-foreground">No planning tools</td>
                    <td className="py-4 px-6 text-primary font-semibold">AI itinerary included</td>
                  </tr>
                  <tr className="hover:bg-secondary/30 transition-colors">
                    <td className="py-4 px-6 font-medium text-foreground">Donation Tracking</td>
                    <td className="py-4 px-6 text-muted-foreground">No donation tracking</td>
                    <td className="py-4 px-6 text-primary font-semibold">100% transparent digital donations</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12 text-center">
              <Card className="inline-block bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary/30">
                <CardContent className="p-8">
                  <p className="text-2xl font-bold text-primary mb-2">UPOS Early Access Pricing Coming Soon</p>
                  <p className="text-muted-foreground">Join the waitlist to get special launch pricing</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Onboarding Journey */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Your Journey Starts Here</h2>
            <p className="text-xl text-muted-foreground">Simple steps to join the future of pilgrimage</p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Sign Up</h3>
              <p className="text-muted-foreground">
                Create your account in seconds with just your email
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Share Your Destination</h3>
              <p className="text-muted-foreground">
                Tell us your favorite pilgrimage spot and we'll personalize your experience
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Get Early Access</h3>
              <p className="text-muted-foreground">
                Join our pilot program and be among the first to experience UPOS
              </p>
            </div>
          </div>

          {/* Mock Welcome Email */}
          <Card className="max-w-2xl mx-auto border-2 shadow-xl">
            <CardContent className="p-8">
              <div className="border-b pb-4 mb-4">
                <p className="text-sm text-muted-foreground mb-1">Welcome Email Preview</p>
                <p className="text-lg font-bold text-foreground">🙏 Welcome to UPOS Family!</p>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>Namaste Devotee,</p>
                <p>
                  We're honored to have you join the Unified Pilgrimage Operating System. Your journey towards seamless, 
                  joyful darshan experiences starts now.
                </p>
                <p>
                  You've shared <span className="font-semibold text-primary">Tirupati</span> as your favorite destination. 
                  We're already preparing personalized recommendations just for you!
                </p>
                <p className="font-semibold text-foreground">
                  You're now on the pilot list. We'll notify you as soon as we launch. 🎉
                </p>
                <p>With devotion,<br />Team UPOS</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section id="early-access" className="py-20 bg-gradient-to-br from-primary via-accent to-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Pilgrimage?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of devotees who are already experiencing the future of darshan. 
              No more chaos, no more confusion — just pure devotion and peace of mind.
            </p>
            
            <Card className="bg-card/95 backdrop-blur text-foreground border-2">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Get Early Access</h3>
                <p className="text-muted-foreground mb-6">
                  Be among the first to experience UPOS. Limited spots available for our pilot program.
                </p>
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your interest! We will contact you soon.'); }}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full px-6 py-4 rounded-lg border-2 border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Your favorite pilgrimage destination"
                    required
                    className="w-full px-6 py-4 rounded-lg border-2 border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold"
                  >
                    Join the Waitlist
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <p className="text-2xl font-bold text-primary mb-2">UPOS</p>
            <p className="text-muted-foreground">Unified Pilgrimage Operating System</p>
          </div>
          <p className="text-muted-foreground">
            © 2025 Unified Pilgrimage OS • Made with ❤️ in India
          </p>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
};

export default Index;
