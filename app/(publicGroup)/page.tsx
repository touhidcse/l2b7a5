import Link from "next/link";
import { ArrowRight, Award, Clock, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IService, IUser } from "@/lib/types";
import { getMe } from "@/service/getMe";
import { getServices } from "./_actions/getService";
import { ServiceCard } from "./_components/services/ServiceCard";


export default async function HomePage() {
  const user = (await getMe()) as IUser;
  
  // Call your server action directly
  const response = await getServices({ query: { limit: "9" } });
  
  // Extract services array depending on backend response shape
  const rawServices: IService[] = response?.data || response || [];

  // Sort by highest technician rating and keep top 9
  const topServices = rawServices
    .sort(
      (a, b) =>
        (Number(b.technician?.rating) || 0) - (Number(a.technician?.rating) || 0)
    )
    .slice(0, 9);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 via-background to-background py-16 md:py-24">
        <div className="container px-4 mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
            <Wrench className="w-4 h-4" /> Trusted Local Repair & Maintenance
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Expert Handyman & Repair Services, <span className="text-primary">On Demand</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with top-rated technicians for home repairs, maintenance, and installations. Quality service guaranteed.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild className="gap-2">
              <Link href="#top-services">
                Explore Services <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            {!user?.role && (
              <Button size="lg" variant="outline" asChild>
                <Link href="/login">Get Started</Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Highlights Banner */}
      <section className="border-y bg-muted/40 py-8">
        <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex items-center justify-center gap-3">
            <Award className="w-6 h-6 text-primary" />
            <div className="text-left">
              <h4 className="font-semibold text-sm">Top Rated Experts</h4>
              <p className="text-xs text-muted-foreground">Vetted and verified professionals</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <div className="text-left">
              <h4 className="font-semibold text-sm">Guaranteed Quality</h4>
              <p className="text-xs text-muted-foreground">100% satisfaction promised</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Clock className="w-6 h-6 text-primary" />
            <div className="text-left">
              <h4 className="font-semibold text-sm">Quick Turnaround</h4>
              <p className="text-xs text-muted-foreground">Prompt & flexible scheduling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top 9 Services Section */}
      <section id="top-services" className="py-16 container px-4 mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Top Rated Services</h2>
            <p className="text-muted-foreground mt-1">
              Handpicked solutions from our highest-rated technicians
            </p>
          </div>
          <Button variant="ghost" asChild className="self-start md:self-auto gap-1">
            <Link href="/services">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {topServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {topServices.map((service: IService) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border rounded-lg bg-muted/20">
            <p className="text-muted-foreground">No services available at the moment.</p>
          </div>
        )}
      </section>
    </div>
  );
}