'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, AlertCircle, Bus, Hotel, Utensils, Building2, Shield, Users, Calendar, Ticket, Phone } from 'lucide-react';

export default function UdaanRegisterPage() {
  return (
    <>
      <header className="py-32 lg:py-40 bg-gradient-to-br from-black via-gray-900 to-black text-center relative overflow-hidden" data-ai-hint="industrial tour educational visit">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(247,37,133,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(247,37,133,0.05)_50%,transparent_70%)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="inline-block mb-4">
            <div className="absolute -inset-1 bg-accent/20 blur-lg rounded-full"></div>
            <h1 className="font-headline text-4xl md:text-6xl font-bold relative">Project <span className="text-accent drop-shadow-[0_0_15px_rgba(247,37,133,0.5)]">Udaan</span></h1>
          </div>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground">
            Industrial Visit to Mundra, Gujarat
          </p>
          <p className="mt-2 text-base text-muted-foreground">
            Organised by INFINITY in collaboration with the Adani Foundation
          </p>
          <div className="mt-4 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-accent">Home</Link>
            <span className="mx-2">/</span>
            <span>Project Udaan</span>
          </div>
        </div>
      </header>

      {/* Key Info Banner */}
      <section className="py-8 bg-gradient-to-r from-accent/10 via-accent/15 to-accent/10 border-y-2 border-accent/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(247,37,133,0.1),transparent)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center gap-2">
                <Calendar className="h-8 w-8 text-accent" />
                <p className="text-sm font-semibold text-foreground">24–27 January 2026</p>
                <p className="text-xs text-muted-foreground">4-Day Tour</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Ticket className="h-8 w-8 text-accent" />
                <p className="text-sm font-semibold text-foreground">Only 50 Slots</p>
                <p className="text-xs text-muted-foreground">First Come, First Served</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Building2 className="h-8 w-8 text-accent" />
                <p className="text-sm font-semibold text-foreground">Industrial Exposure</p>
                <p className="text-xs text-muted-foreground">Real-time Operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase mb-4">
                About <span className="text-accent">Project Udaan</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                A 4-day industrial exposure tour to explore India's major industries and real-time operations. 
                This visit gives students a rare opportunity to explore Adani Port, Adani Power, Adani Wilmar, 
                Adani Solar, and various large-scale industrial operations in Mundra, Gujarat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 lg:py-28 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase mb-4">
                What's <span className="text-accent">Included</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Travel & Transport */}
              <Card className="bg-secondary/20 border-primary/20 rounded-xl hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-accent/20 rounded-lg">
                      <Bus className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="font-headline text-xl">1. Travel & Transport</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Train travel LPU ↔️ Ahmedabad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>AC Bus: Ahmedabad → Mundra → Ahmedabad</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Internal industry travel</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Supervision by faculty & INFINITY coordinators</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Accommodation */}
              <Card className="bg-secondary/20 border-primary/20 rounded-xl hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-accent/20 rounded-lg">
                      <Hotel className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="font-headline text-xl">2. Accommodation</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Stay at Shanti Vihar Guest House</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>24×7 staff support & security</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Meals */}
              <Card className="bg-secondary/20 border-primary/20 rounded-xl hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-accent/20 rounded-lg">
                      <Utensils className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="font-headline text-xl">3. Meals</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Breakfast, Lunch & Dinner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Provided by Adani Foundation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Industrial Visits */}
              <Card className="bg-secondary/20 border-primary/20 rounded-xl hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-accent/20 rounded-lg">
                      <Building2 className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="font-headline text-xl">4. Industrial Visits</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Adani Port</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Adani Power</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Adani Wilmar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Adani Solar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Includes visitor passes & safety briefing</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* On-Ground Support */}
              <Card className="bg-secondary/20 border-primary/20 rounded-xl hover:border-accent/40 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-accent/20 rounded-lg">
                      <Shield className="h-8 w-8 text-accent" />
                    </div>
                    <CardTitle className="font-headline text-xl">5. On-Ground Support</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>Adani Foundation coordinators</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>INFINITY volunteers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>First aid & emergency assistance</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase mb-4">
                Why <span className="text-accent">Join</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-secondary/20 border-primary/20 rounded-xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <p className="text-foreground">Explore India's biggest industries</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary/20 border-primary/20 rounded-xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <p className="text-foreground">Learn real manufacturing & power processes</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary/20 border-primary/20 rounded-xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <p className="text-foreground">Strong resume-enhancing industrial exposure</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary/20 border-primary/20 rounded-xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <p className="text-foreground">Ideal for engineering, management, commerce & science students</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Registration & Contact Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-secondary/10 via-accent/5 to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(247,37,133,0.1),transparent)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase mb-4">
                Register <span className="text-accent">Now</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Limited seats—only 50 available. First come, first served!
              </p>
            </div>

            <Card className="bg-gradient-to-br from-secondary/30 to-secondary/10 border-2 border-accent/30 rounded-xl mb-8 shadow-xl shadow-accent/10 hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300">
              <CardHeader className="relative">
                <div className="absolute -top-1 -right-1 w-20 h-20 bg-accent/10 rounded-full blur-2xl"></div>
                <CardTitle className="font-headline text-2xl text-center relative z-10">Registration Form</CardTitle>
                <CardDescription className="text-center relative z-10">
                  Interested students please fill the form
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <Button 
                  asChild 
                  size="lg" 
                  className="font-headline uppercase font-semibold text-base bg-accent hover:bg-accent/90 shadow-[0_5px_15px_rgba(247,37,133,0.5)] hover:shadow-[0_8px_25px_rgba(247,37,133,0.6)] hover:-translate-y-1 transition-all duration-300"
                >
                  <Link href="https://forms.gle/sFiAVMkeH2Gxeqby9" target="_blank" rel="noopener noreferrer">
                    Register for Project Udaan
                  </Link>
                </Button>
                <p className="mt-4 text-sm text-muted-foreground">
                  Registration form will open in a new window
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/15 to-accent/5 border-2 border-accent/40 rounded-xl shadow-lg shadow-accent/10">
              <CardHeader>
                <div className="flex items-center gap-3 justify-center">
                  <Phone className="h-6 w-6 text-accent" />
                  <CardTitle className="font-headline text-2xl">Contact</CardTitle>
                </div>
                <CardDescription className="text-center">
                  For any queries, contact our coordinators
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-center">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Gaurav Kumar</p>
                    <a href="tel:7482881168" className="text-accent hover:underline">
                      7482881168
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Saksham Raj</p>
                    <a href="tel:9341479167" className="text-accent hover:underline">
                      93414 79167
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
