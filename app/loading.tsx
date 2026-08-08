import React from "react";
import { Loader2, Wrench } from "lucide-react";

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-sm transition-all">
      <div className="flex flex-col items-center gap-4 rounded-2xl bg-card p-8 shadow-lg border border-border/50">
        
        {/* Animated Brand Icon Stack */}
        <div className="relative flex items-center justify-center">
          <div className="p-3 bg-primary/10 rounded-xl text-primary">
            <Wrench className="w-8 h-8 animate-pulse" />
          </div>
          <Loader2 className="absolute -inset-2 h-16 w-16 animate-spin text-primary/40" />
        </div>

        {/* Text Details */}
        <div className="space-y-1 text-center">
          <h3 className="text-base font-semibold text-foreground tracking-wide">
            Fix It Now
          </h3>
          <p className="text-xs text-muted-foreground animate-pulse">
            Loading resources, please wait...
          </p>
        </div>

      </div>
    </div>
  );
}