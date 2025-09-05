"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, TreePine, Recycle, Wallet, TrendingUp, Shield, Users, Globe } from "lucide-react"
import { useEffect, useRef } from "react"
import * as amazon from "../public/amazon.webp" 
//import { Users } from 'lucide-react';
export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    // Observe all elements with scroll-animate class
    const elements = document.querySelectorAll(".scroll-animate")
    elements.forEach((el) => observerRef.current?.observe(el))

    const slideElements = document.querySelectorAll(".slide-in-left")
    slideElements.forEach((el) => observerRef.current?.observe(el))

    const subtitleElement = document.querySelector(".fade-in-delayed")
    if (subtitleElement) {
      setTimeout(() => {
        subtitleElement.classList.add("animate-in")
      }, 5000)
    }

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <style jsx global>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .fade-in-delayed {
          opacity: 0;
          transform: translateX(-100px);
          transition: all 3s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        
        .fade-in-delayed.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        
        .scroll-animate-delay-1 {
          transition-delay: 0.1s;
        }
        
        .scroll-animate-delay-2 {
          transition-delay: 0.2s;
        }
        
        .scroll-animate-delay-3 {
          transition-delay: 0.3s;
        }
        
        .scroll-animate-delay-4 {
          transition-delay: 0.4s;
        }
        
        .scroll-animate-delay-5 {
          transition-delay: 0.5s;
        }
        
        .scroll-animate-delay-6 {
          transition-delay: 0.6s;
        }
        
        /* Added continuous floating and rotating animations for leaves */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(5deg); }
          50% { transform: translateY(-20px) rotate(0deg); }
          75% { transform: translateY(-10px) rotate(-5deg); }
        }
        
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(10deg); }
        }
        
        @keyframes drift {
          0% { transform: translateX(0px) translateY(0px) rotate(0deg); }
          25% { transform: translateX(10px) translateY(-5px) rotate(15deg); }
          50% { transform: translateX(-5px) translateY(-10px) rotate(-10deg); }
          75% { transform: translateX(-10px) translateY(-5px) rotate(20deg); }
          100% { transform: translateX(0px) translateY(0px) rotate(0deg); }
        }
        
        @keyframes sway {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(3deg) scale(1.05); }
          50% { transform: rotate(-2deg) scale(0.95); }
          75% { transform: rotate(4deg) scale(1.02); }
        }
        
        .leaf-float { animation: float 4s ease-in-out infinite; }
        .leaf-float-slow { animation: floatSlow 6s ease-in-out infinite; }
        .leaf-drift { animation: drift 8s ease-in-out infinite; }
        .leaf-sway { animation: sway 5s ease-in-out infinite; }
        
        /* Added testimonial carousel animations */
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        
        .marquee {
          animation: marquee 30s linear infinite;
        }
        
        .marquee:hover {
          animation-play-state: paused;
        }

        /* Added slide-in animations for How It Works cards */
        .slide-in-left {
          opacity: 0;
          transform: translateX(-100px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .slide-in-left.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        
        .slide-in-delay-1 {
          transition-delay: 0.2s;
        }
        
        .slide-in-delay-2 {
          transition-delay: 0.4s;
        }
        
        .slide-in-delay-3 {
          transition-delay: 0.6s;
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-green-800">CarbonTrade</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#marketplace" className="text-green-700 hover:text-green-900 transition-colors">
              Marketplace
            </a>
            <a href="#how-it-works" className="text-green-700 hover:text-green-900 transition-colors">
              How It Works 
            </a>
            <a href="#about" className="text-green-700 hover:text-green-900 transition-colors">
              About
            </a>
            <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50 bg-transparent">
              <Wallet className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100 to-emerald-100" />

        <div className="absolute top-10 left-10 opacity-8 leaf-float-slow" style={{ animationDelay: "0s" }}>
          <svg width="200" height="200" viewBox="0 0 200 200" className="text-green-400">
            <path
              d="M100 20C130 40 170 70 160 120C150 160 100 180 60 160C30 140 10 100 25 70C40 40 70 20 100 20Z"
              fill="currentColor"
            />
            <path
              d="M100 20 Q120 60 160 120 Q100 140 60 160 Q80 100 100 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              opacity="0.3"
            />
          </svg>
        </div>

        <div className="absolute bottom-20 right-16 opacity-6 leaf-drift" style={{ animationDelay: "2s" }}>
          <svg width="180" height="180" viewBox="0 0 180 180" className="text-emerald-500">
            <path
              d="M90 15C115 30 150 55 145 95C140 130 90 145 50 135C20 125 5 85 15 60C25 35 60 15 90 15Z"
              fill="currentColor"
            />
            <path
              d="M90 15 Q110 50 145 95 Q90 115 50 135 Q70 80 90 15"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              opacity="0.4"
            />
          </svg>
        </div>

        <div className="absolute top-1/3 right-1/3 opacity-10 leaf-sway" style={{ animationDelay: "4s" }}>
          <svg width="220" height="220" viewBox="0 0 220 220" className="text-green-600">
            <path
              d="M110 25C140 45 185 80 175 135C165 180 110 200 65 180C30 160 10 115 25 80C40 45 75 25 110 25Z"
              fill="currentColor"
            />
            <path
              d="M110 25 Q135 70 175 135 Q110 165 65 180 Q85 110 110 25"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.2"
            />
          </svg>
        </div>

        <div className="absolute top-10 right-10 w-32 h-32 bg-green-200/30 rounded-full flex items-center justify-center leaf-float">
          <Leaf className="w-5 h-5 text-white" />
        </div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-emerald-200/40 rounded-full blur-lg leaf-drift" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-green-300/20 rounded-full blur-md leaf-sway" />

        <div className="absolute top-32 left-1/4 leaf-float" style={{ animationDelay: "1s" }}>
          <Leaf className="w-4 h-4 text-green-400/60 rotate-45" />
        </div>

        <div className="absolute bottom-1/3 right-1/4 leaf-drift" style={{ animationDelay: "2s" }}>
          <Leaf className="w-6 h-6 text-emerald-500/50 -rotate-30" />
        </div>

        <div className="absolute top-1/4 right-1/3 leaf-float-slow" style={{ animationDelay: "0.5s" }}>
          <Leaf className="w-5 h-5 text-green-600/40 rotate-90" />
        </div>

        <div className="absolute bottom-40 left-1/5 leaf-sway" style={{ animationDelay: "3s" }}>
          <Leaf className="w-7 h-7 text-emerald-400/45 rotate-12" />
        </div>

        <div className="absolute top-20 right-2/3 leaf-drift" style={{ animationDelay: "1.5s" }}>
          <Leaf className="w-3 h-3 text-green-500/70 -rotate-60" />
        </div>

        <div className="absolute bottom-32 right-1/5 leaf-float" style={{ animationDelay: "2.5s" }}>
          <Leaf className="w-8 h-8 text-emerald-600/35 rotate-180" />
        </div>

        <div className="absolute top-1/4 right-1/4 opacity-15 leaf-sway" style={{ animationDuration: "4s" }}>
          <svg width="120" height="120" viewBox="0 0 120 120" className="text-green-600">
            <path
              d="M60 10C80 30 100 50 90 80C80 100 60 110 40 100C20 90 10 70 20 50C30 30 50 10 60 10Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div
          className="absolute bottom-1/4 left-1/4 opacity-12 rotate-45 leaf-float-slow"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" className="text-emerald-500">
            <path d="M40 5C55 15 70 30 65 50C60 65 40 70 25 65C10 60 2 32 8 32C13 18 30 8 45 8Z" fill="currentColor" />
          </svg>
        </div>

        <div
          className="absolute top-16 left-1/2 opacity-10 leaf-drift"
          style={{ animationDelay: "1.5s", animationDuration: "6s" }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100" className="text-green-500">
            <path d="M50 5C65 20 85 35 80 60C75 80 50 85 30 80C15 75 5 55 10 40C15 25 35 5 50 5Z" fill="currentColor" />
          </svg>
        </div>
        <div
          className="absolute bottom-32 right-16 opacity-8 rotate-12 leaf-float"
          style={{ animationDelay: "3s", animationDuration: "7s" }}
        >
          <svg width="90" height="90" viewBox="0 0 90 90" className="text-emerald-400">
            <path d="M45 8C58 18 75 28 72 48C68 65 45 72 28 68C12 64 2 32 8 32C13 18 30 8 45 8Z" fill="currentColor" />
          </svg>
        </div>

        <div
          className="absolute top-1/3 left-16 opacity-12 -rotate-30 leaf-sway"
          style={{ animationDelay: "0.5s", animationDuration: "8s" }}
        >
          <svg width="70" height="70" viewBox="0 0 70 70" className="text-green-400">
            <path d="M35 3C45 12 58 20 55 35C52 48 35 52 22 48C10 44 2 32 5 20C8 10 22 3 35 3Z" fill="currentColor" />
          </svg>
        </div>

        <div
          className="absolute bottom-1/3 right-1/3 opacity-10 rotate-75 leaf-float-slow"
          style={{ animationDelay: "4s", animationDuration: "5.5s" }}
        >
          <svg width="110" height="110" viewBox="0 0 110 110" className="text-emerald-600">
            <path d="M55 6C70 18 88 32 85 55C82 75 55 82 35 78C18 74 8 55 12 40C16 25 38 6 55 6Z" fill="currentColor" />
          </svg>
        </div>

        <div className="absolute top-20 right-1/3 opacity-15 leaf-drift" style={{ animationDelay: "2.5s" }}>
          <Leaf className="w-6 h-6 text-green-500 rotate-12" />
        </div>

        <div className="absolute bottom-40 left-1/3 opacity-12 leaf-float" style={{ animationDelay: "1s" }}>
          <Leaf className="w-8 h-8 text-emerald-400 -rotate-45" />
        </div>

        <div className="absolute top-40 left-20 opacity-10 leaf-sway" style={{ animationDelay: "3.5s" }}>
          <Leaf className="w-5 h-5 text-green-600 rotate-90" />
        </div>

        <div className="absolute top-60 right-20 opacity-8 leaf-float-slow" style={{ animationDelay: "4s" }}>
          <Leaf className="w-4 h-4 text-emerald-300 rotate-135" />
        </div>

        <div className="absolute bottom-60 left-2/3 opacity-12 leaf-drift" style={{ animationDelay: "0.8s" }}>
          <Leaf className="w-6 h-6 text-green-400 -rotate-90" />
        </div>

        <div className="absolute top-80 left-1/2 opacity-10 leaf-sway" style={{ animationDelay: "2.2s" }}>
          <Leaf className="w-5 h-5 text-emerald-500 rotate-225" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-100 text-green-800 border-green-200 hover:bg-green-200 scroll-animate">
              <Leaf className="w-3 h-3 mr-1" />
              Carbon Neutral Future
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-6 text-balance scroll-animate scroll-animate-delay-1">
              Trade Carbon Credits for a
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {" "}
                Sustainable Tomorrow
              </span>
            </h1>
            <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
              Join the world's most trusted carbon credit marketplace. Offset your emissions, support verified
              environmental projects, and make a real impact on climate change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-animate scroll-animate-delay-3">
              <Button
  size="lg"
  className="!bg-green-900 hover:!bg-green-800 text-white shadow-lg hover:shadow-xl hover:shadow-green-500/50 focus:ring-4 focus:ring-green-400 transition-all duration-300 border-0"
>
  <TreePine className="w-5 h-5 mr-2" />
  Start Trading
</Button>
              <button 
  data-slot="button" 
  className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-10 rounded-md px-6 has-[>svg]:px-4 border-green-300 text-green-700 hover:bg-green-50 bg-transparent 
  hover:shadow-lg hover:shadow-green-300/50 focus:ring-4 focus:ring-green-200">
  Learn More
</button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-br from-white via-green-50/30 to-emerald-50/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200 hover:bg-green-200 scroll-animate">
              <Leaf className="w-3 h-3 mr-1" />
              Simple Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4 scroll-animate">How It Works?</h2>
            
            <p className="text-lg text-green-700 max-w-2xl mx-auto text-pretty scroll-animate scroll-animate-delay-1 ">
              Simple, transparent, and secure carbon credit trading in three easy steps
            </p>
            <div className="flex justify-center mt-6 scroll-animate scroll-animate-delay-2">
              <div className="flex items-center gap-2 text-green-400">
                <Leaf className="w-4 h-4 rotate-12" />
                <div className="w-12 h-px bg-green-300"></div>
                <Leaf className="w-5 h-5" />
                <div className="w-12 h-px bg-green-300"></div>
                <Leaf className="w-4 h-4 -rotate-12" />
              </div>
            </div>
          </div>

          {/* <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group slide-in-left slide-in-delay-1 bg-green-100/60 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-green-200 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Wallet className="w-10 h-10 text-green-700" />
                </div>
                <CardTitle className="text-green-900 text-xl">Connect Your Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-green-800 text-center leading-relaxed text-base">
                  Securely connect your digital wallet to access the marketplace and manage your carbon credit portfolio
                  with enterprise-grade security
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group slide-in-left slide-in-delay-2 bg-green-100/60 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-green-200 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <TrendingUp className="w-10 h-10 text-green-700" />
                </div>
                <CardTitle className="text-green-900 text-xl">Browse & Trade  </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-green-800 text-center  text-base">
                  Explore verified carbon credits from renewable energy, reforestation, and other environmental projects
                  with transparent pricing and impact metrics */}
                {/* </CardDescription>
              </CardContent> */}
            {/* </Card>

            <Card className="border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group slide-in-left slide-in-delay-3 bg-green-100/60 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-gradient-to-br from-green-200 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Shield className="w-10 h-10 text-green-700" />
                </div>
                <CardTitle className="text-green-900 text-xl">Offset & Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-green-800 text-center leading-relaxed text-base">
                  Retire credits to offset your carbon footprint and receive verified certificates of your environmental
                  impact with detailed reporting
                </CardDescription>
              </CardContent>
            </Card>
          </div> */}






          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
  <Card className="border-green-300 hover:border-green-600 transition-all duration-200 hover:shadow-[0_0_50px_rgba(34,197,94,0.9)] hover:-translate-y-5 group slide-in-left slide-in-delay-1 bg-green-100/70 backdrop-blur-md">
    <CardHeader className="text-center pb-4">
      <div className="w-15 h-15 bg-gradient-to-br from-green-200 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-200 shadow-xl">
        <Wallet className="w-10 h-10 text-green-700 group-hover:text-green-900 transition-colors duration-200" />
      </div>
      <CardTitle className="text-green-900 text-xl group-hover:scale-110 transition-transform duration-200">Connect Your Wallet</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-green-800 text-center leading-relaxed text-base group-hover:text-green-900 transition-colors duration-200">
        Securely connect your digital wallet to access the marketplace and manage your carbon credit portfolio
        with enterprise-grade security
      </CardDescription>
    </CardContent>
  </Card>

  <Card className="border-green-300 hover:border-green-600 transition-all duration-200 hover:shadow-[0_0_50px_rgba(34,197,94,0.9)] hover:-translate-y-5 group slide-in-left slide-in-delay-2 bg-green-100/70 backdrop-blur-md">
    <CardHeader className="text-center pb-4">
      <div className="w-15 h-15 bg-gradient-to-br from-green-200 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-200 shadow-xl">
        <TrendingUp className="w-10 h-10 text-green-700 group-hover:text-green-900 transition-colors duration-200" />
      </div>
      <CardTitle className="text-green-900 text-xl group-hover:scale-110 transition-transform duration-200">Browse & Trade</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-green-800 text-center text-base group-hover:text-green-900 transition-colors duration-200">
        Explore verified carbon credits from renewable energy, reforestation, and other environmental projects
        with transparent pricing and impact metrics
      </CardDescription>
    </CardContent>
  </Card>

  <Card className="border-green-300 hover:border-green-600 transition-all duration-200 hover:shadow-[0_0_50px_rgba(34,197,94,0.9)] hover:-translate-y-5 group slide-in-left slide-in-delay-3 bg-green-100/70 backdrop-blur-md">
    <CardHeader className="text-center pb-4">
      <div className="w-15 h-15 bg-gradient-to-br from-green-200 to-emerald-200 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-200 shadow-xl">
        <Shield className="w-10 h-10 text-green-700 group-hover:text-green-900 transition-colors duration-200" />
      </div>
      <CardTitle className="text-green-900 text-xl group-hover:scale-110 transition-transform duration-200">Offset & Impact</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-green-800 text-center leading-relaxed text-base group-hover:text-green-900 transition-colors duration-200">
        Retire credits to offset your carbon footprint and receive verified certificates of your environmental
        impact with detailed reporting
      </CardDescription>
    </CardContent>
  </Card>
</div>





























        </div>
      </section>

      {/* Marketplace Preview */} 

      {/* start */}
     <section id="marketplace" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4 scroll-animate">
        Featured Carbon Credits
      </h2>
      <p className="text-lg text-green-700 max-w-2xl mx-auto text-pretty scroll-animate scroll-animate-delay-1">
        Discover high-quality, verified carbon credits from projects around the world
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {/* Amazon Reforestation */}
      <Card className="min-w-80 border-green-100 bg-gradient-to-br from-green-100 to-emerald-100 hover:shadow-xl hover:-translate-y-3 transition-all duration-500 ease-out group scroll-animate scroll-animate-delay-2 rounded-xl overflow-hidden">
        <div className="h-48 relative overflow-hidden group">
          <img
            src="/amazon.webp"
            alt="Amazon Reforestation"
            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-95 group-hover:scale-110 transition-opacity transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent"></div>
          <TreePine className="absolute bottom-2 right-2 w-8 h-8 text-green-200 group-hover:rotate-12 group-hover:scale-125 transition-all duration-500 ease-out" />
        </div>
        <CardHeader>
          <CardTitle className="text-green-900 text-lg">Amazon Reforestation</CardTitle>
          <CardDescription className="text-green-700">Brazil • Forestry</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-green-800">$12.50</span>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              Verified
            </Badge>
          </div>
          <p className="text-sm text-green-600 mt-2">per tonne CO₂</p>
        </CardContent>
      </Card>

      {/* Wind Energy */}
      <Card className="min-w-80 border-blue-100 bg-gradient-to-br from-blue-100 to-cyan-100 hover:shadow-xl hover:-translate-y-3 transition-all duration-500 ease-out group scroll-animate scroll-animate-delay-3 rounded-xl overflow-hidden">
        <div className="h-48 relative overflow-hidden group">
          <img
            src="/windmill3.webp"
            alt="Wind Energy"
            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-95 group-hover:scale-110 transition-opacity transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
          <Globe className="absolute bottom-2 right-2 w-8 h-8 text-blue-200 group-hover:rotate-12 group-hover:scale-125 transition-all duration-500 ease-out" />
        </div>
        <CardHeader>
          <CardTitle className="text-green-900 text-lg">Wind Energy Project</CardTitle>
          <CardDescription className="text-green-700">India • Renewable Energy</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-green-800">$8.75</span>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
              Verified
            </Badge>
          </div>
          <p className="text-sm text-green-600 mt-2">per tonne CO₂</p>
        </CardContent>
      </Card>

      {/* Waste Management */}
      <Card className="min-w-80 border-amber-100 bg-gradient-to-br from-amber-100 to-orange-100 hover:shadow-xl hover:-translate-y-3 transition-all duration-500 ease-out group scroll-animate scroll-animate-delay-4 rounded-xl overflow-hidden">
        <div className="h-48 relative overflow-hidden group">
          <img
            src="/Waste Management.webp"
            alt="Waste Management"
            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-95 group-hover:scale-110 transition-opacity transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent"></div>
          <Recycle className="absolute bottom-2 right-2 w-8 h-8 text-orange-200 group-hover:rotate-12 group-hover:scale-125 transition-all duration-500 ease-out" />
        </div>
        <CardHeader>
          <CardTitle className="text-green-900 text-lg">Waste Management</CardTitle>
          <CardDescription className="text-green-700">Kenya • Waste Reduction</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-green-800">$15.20</span>
            <Badge variant="secondary" className="bg-orange-100 text-orange-700">
              Verified
            </Badge>
          </div>
          <p className="text-sm text-green-600 mt-2">per tonne CO₂</p>
        </CardContent>
      </Card>
    </div>

    <div className="text-center mt-12">
      <Button
        size="lg"
        variant="outline"
       >
        View All Credits
      </Button>
    </div>
  </div>
</section>


                
             

          

      {/* end */}







































      {/* Testimonial Carousel Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            {/* <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4 scroll-animate">
              Trusted by Leading Companies 


         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-leaf w-5 h-5">
  <path d="M2 22s6-7 10-11a7 7 0 0 1 10 10c-4 4-11 10-11 10z" />
</svg>



            </h2> */}

            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4 scroll-animate flex items-center justify-center gap-2">
  <span>Trusted by Leading Companies</span>
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-leaf w-5 h-5"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</h2>


            <p className="text-lg text-green-700 max-w-2xl mx-auto text-pretty scroll-animate scroll-animate-delay-1">
              Join thousands of organizations making a real environmental impact through verified carbon credits
            </p>
          </div>

          {/* Testimonial Marquee */}
          <div className="relative">
            {/* Gradient overlays for smooth fade effect */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

            <div className="flex overflow-hidden">
              <div className="flex gap-6 marquee">
                {/* First set of testimonials */}
                <Card className="min-w-80 border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">T</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">TechCorp</h4>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-600">Verified Purchase</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-green-800 font-medium mb-2">"We offset 2,500 tons of CO₂ in 2024"</p>
                    <p className="text-sm text-green-600">Supporting reforestation projects across South America</p>
                  </CardContent>
                </Card>

                <Card className="min-w-80 border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">E</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">EcoManufacturing</h4>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-600">Verified Purchase</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-green-800 font-medium mb-2">"Carbon neutral operations since 2023"</p>
                    <p className="text-sm text-green-600">1,800 tons offset through renewable energy credits</p>
                  </CardContent>
                </Card>

                <Card className="min-w-80 border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">G</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">GreenLogistics</h4>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-600">Verified Purchase</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-green-800 font-medium mb-2">"3,200 tons CO₂ offset in Q4 2024"</p>
                    <p className="text-sm text-green-600">Investing in wind energy projects worldwide</p>
                  </CardContent>
                </Card>

                <Card className="min-w-80 border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">S</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">SustainableTech</h4>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-600">Verified Purchase</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-green-800 font-medium mb-2">"Achieved net-zero emissions goal"</p>
                    <p className="text-sm text-green-600">4,100 tons offset through verified forest conservation</p>
                  </CardContent>
                </Card>

                <Card className="min-w-80 border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">C</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">CleanEnergy Co</h4>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-600">Verified Purchase</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-green-800 font-medium mb-2">"1,950 tons CO₂ neutralized monthly"</p>
                    <p className="text-sm text-green-600">Supporting waste-to-energy initiatives globally</p>
                  </CardContent>
                </Card>

                <Card className="min-w-80 border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">I</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">InnovateCorp</h4>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-600">Verified Purchase</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-green-800 font-medium mb-2">"Leading our industry in sustainability"</p>
                    <p className="text-sm text-green-600">2,800 tons offset through ocean conservation projects</p>
                  </CardContent>
                </Card>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex gap-6 marquee">
                <Card className="min-w-80 border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">T</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">TechCorp</h4>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-600">Verified Purchase</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-green-800 font-medium mb-2">"We offset 2,500 tons of CO₂ in 2024"</p>
                    <p className="text-sm text-green-600">Supporting reforestation projects across South America</p>
                  </CardContent>
                </Card>

                <Card className="min-w-80 border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">E</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">EcoManufacturing</h4>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-600">Verified Purchase</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-green-800 font-medium mb-2">"Carbon neutral operations since 2023"</p>
                    <p className="text-sm text-green-600">1,800 tons offset through renewable energy credits</p>
                  </CardContent>
                </Card>

                <Card className="min-w-80 border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">G</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">GreenLogistics</h4>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-600">Verified Purchase</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-green-800 font-medium mb-2">"3,200 tons CO₂ offset in Q4 2024"</p>
                    <p className="text-sm text-green-600">Investing in wind energy projects worldwide</p>
                  </CardContent>
                </Card>

                <Card className="min-w-80 border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">S</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">SustainableTech</h4>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-600">Verified Purchase</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-green-800 font-medium mb-2">"Achieved net-zero emissions goal"</p>
                    <p className="text-sm text-green-600">4,100 tons offset through verified forest conservation</p>
                  </CardContent>
                </Card>

                <Card className="min-w-80 border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">C</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">CleanEnergy Co</h4>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-600">Verified Purchase</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-green-800 font-medium mb-2">"1,950 tons CO₂ neutralized monthly"</p>
                    <p className="text-sm text-green-600">Supporting waste-to-energy initiatives globally</p>
                  </CardContent>
                </Card>

                <Card className="min-w-80 border-green-100 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-white font-bold text-lg">I</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-900">InnovateCorp</h4>
                        <div className="flex items-center gap-2">
                          <Shield className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-600">Verified Purchase</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-green-800 font-medium mb-2">"Leading our industry in sustainability"</p>
                    <p className="text-sm text-green-600">2,800 tons offset through ocean conservation projects</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Decorative leaf divider */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2 text-green-400">
              <Leaf className="w-4 h-4 rotate-12" />
              <Leaf className="w-5 h-5" />
              <Leaf className="w-4 h-4 -rotate-12" />
            </div>
          </div>
        </div>
      </section>

      {/* Connect Wallet CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 scroll-animate">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wallet className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-green-900 mb-4">Ready to Make an Impact?</h3>
              <p className="text-lg text-green-700 mb-8 max-w-2xl mx-auto text-pretty leading-relaxed">
                Connect your wallet and start trading carbon credits today. Every purchase supports verified
                environmental projects and helps build a sustainable future.
              </p>
              <Button
                size="lg"
                className="!bg-green-900 hover:!bg-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0"
              >
                <Wallet className="w-5 h-5 mr-2" />
                Connect Wallet Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-semibold">CarbonTrade</span>
              </div>
              <p className="text-green-200 text-sm leading-relaxed">
                Building a sustainable future through transparent carbon credit trading.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-green-200">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Marketplace
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Verification
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-green-200">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                  <Users className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                  <Leaf className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-green-800 mt-8 pt-8 text-center text-sm text-green-200">
            <p>&copy; 2024 CarbonTrade. All rights reserved. Building a sustainable future together.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

