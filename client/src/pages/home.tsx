import { Link } from "wouter";
import { ArrowRight, Zap, Shield, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "x402Pay - Decentralized Micropayments for IoT on Solana";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950/20 to-black">
      <section className="min-h-screen flex items-center justify-center px-8 py-32">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm mb-4" data-testid="badge-version">
            <span className="text-sm font-medium bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Version 1.0
            </span>
            <span className="text-sm text-muted-foreground">November 2025</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight" data-testid="text-hero-title">
            <span className="bg-gradient-to-r from-purple-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">
              x402Pay
            </span>
          </h1>
          
          <p className="text-3xl md:text-4xl font-semibold text-foreground max-w-4xl mx-auto">
            Decentralized Micropayments for IoT on Solana
          </p>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Empowering Machine-to-Machine Economy with Get-as-You-Go Payments
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 max-w-4xl mx-auto">
            <div className="p-6 rounded-xl border border-purple-500/20 bg-purple-500/5 backdrop-blur-sm space-y-2" data-testid="card-feature-speed">
              <Zap className="w-8 h-8 text-teal-400 mx-auto" />
              <div className="text-3xl font-bold text-foreground">40,000 TPS</div>
              <div className="text-sm text-muted-foreground">Solana Speed</div>
            </div>
            
            <div className="p-6 rounded-xl border border-teal-500/20 bg-teal-500/5 backdrop-blur-sm space-y-2" data-testid="card-feature-cost">
              <Shield className="w-8 h-8 text-blue-400 mx-auto" />
              <div className="text-3xl font-bold text-foreground">$0.00005</div>
              <div className="text-sm text-muted-foreground">Per Transaction</div>
            </div>
            
            <div className="p-6 rounded-xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm space-y-2" data-testid="card-feature-time">
              <Layers className="w-8 h-8 text-purple-400 mx-auto" />
              <div className="text-3xl font-bold text-foreground">&lt;1 sec</div>
              <div className="text-sm text-muted-foreground">Settlement Time</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/executive-summary">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-teal-600 hover-elevate active-elevate-2" data-testid="button-get-started">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            
            <Link href="/chat">
              <Button size="lg" variant="outline" className="border-purple-500/30 backdrop-blur-sm hover-elevate active-elevate-2" data-testid="button-try-demo">
                Try Demo
              </Button>
            </Link>
          </div>
          
          <div className="pt-16 space-y-4">
            <p className="text-sm font-medium text-muted-foreground">Built by</p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span>Dr. Sarah Chen, CTO</span>
              <span className="text-muted-foreground/50">•</span>
              <span>Marcus Rodriguez, Head of Blockchain</span>
              <span className="text-muted-foreground/50">•</span>
              <span>Dr. Aisha Patel, IoT Architect</span>
              <span className="text-muted-foreground/50">•</span>
              <span>James Liu, Product Strategy</span>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 px-8 border-t border-purple-500/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            The Future of IoT Payments
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Unlike traditional "pay-as-you-go" models requiring upfront payments or subscriptions, x402 Sol enables a "get-as-you-go" paradigm where users and machines instantly receive services upon request, with micropayments settled sub-second via Solana's high throughput. No pre-funding needed beyond wallet balance — reactive and frictionless.
          </p>
          <div className="pt-4">
            <Link href="/x402-sol">
              <Button variant="ghost" className="text-purple-400 hover-elevate" data-testid="link-learn-protocol">
                Learn about x402 Sol Protocol
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
