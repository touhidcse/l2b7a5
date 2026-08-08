import Link from "next/link";
import { Wrench, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-background px-4 py-16">
      <div className="max-w-md w-full text-center space-y-8">
        
        {/* Animated Brand/Broken Icon */}
        <div className="relative mx-auto w-24 h-24 flex items-center justify-center">
          <div className="absolute inset-0 bg-primary/10 rounded-full animate-ping opacity-75" />
          <div className="relative p-5 bg-card border border-border rounded-full shadow-sm text-primary">
            <Wrench className="w-10 h-10 rotate-45" />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary">
            404 Error
          </span>
          <h1 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Page Not Found
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
            Sorry, we couldn’t find the page or repair service you were looking for. It might have been moved or removed.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity shadow-sm"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-secondary text-secondary-foreground font-medium text-sm hover:bg-secondary/80 transition-colors border border-border/50"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore Services</span>
          </Link>
        </div>

      </div>
    </main>
  );
}