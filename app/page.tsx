



"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, TreePine, Recycle, Wallet, TrendingUp, Shield, Globe } from "lucide-react"
import { useEffect, useRef } from "react"

export default function HomePage() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("animate-in")
      })
    }, { threshold: 0.1 })

    const elements = document.querySelectorAll(".scroll-animate, .slide-in-left")
    elements.forEach((el) => observerRef.current?.observe(el))
    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
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
        <a href="#marketplace" className="text-green-700 hover:text-green-900">Marketplace</a>
        <a href="#how-it-works" className="text-green-700 hover:text-green-900">How It Works</a>
        <a href="#about" className="text-green-700 hover:text-green-900">About</a>
        <Button variant="outline" className="border-green-300 text-green-700 hover:bg-green-50 bg-transparent">
          <Wallet className="w-4 h-4 mr-2" /> Connect Wallet
        </Button>
      </nav>
    </div>
  </header>

  {/* Hero Section */}
  <section
  className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-br from-green-700 via-emerald-200 to-green-900"
  style={{
    backgroundImage: "url('LargeLeavesBotanical.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Optional: semi-transparent overlay for contrast */}
  <div className="absolute inset-0 bg-black/20 pointer-events-none" />

  {/* Heading and badge on gradient background */}
  {/* <div className="relative z-10 w-full flex flex-col items-center mt-16">
    <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">Carbon Neutral Future</Badge>
  </div> */}

  {/* Blurred image with smooth transition, 1in inset */}
  <div className="absolute inset-[1in] flex items-center justify-center z-10">
    <div className="relative w-full h-full">
      <img
        src="/LargeLeavesBotanical.jpeg"
        alt="Blurred Overlay"
        className="w-full h-full object-cover rounded-3xl filter blur-lg"
        style={{ pointerEvents: "none" }}
      />
      {/* Radial gradient mask for smooth blur transition (no green border) */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.7) 100%)"
        }}
      />
    </div>
    {/* Overlayed content on top of blurred image */}
    <div className="absolute inset-0 flex flex-col items-center justify-center px-4 z-20">
      <div className="bg-black/40 rounded-3xl p-8 w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 text-center">
          Trade Carbon Credits for<br />
          <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            a Sustainable Tomorrow
          </span>
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto text-center drop-shadow-lg">
          Join the world's most trusted carbon credit marketplace. Offset your emissions, support verified projects, and
          make a real impact on climate change.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="!bg-green-900 hover:!bg-green-800 text-white">
            <TreePine className="w-5 h-5 mr-2" /> Start Trading
          </Button>
          <Button size="lg" variant="outline" className="border-green-300 text-green-700 hover:bg-green-50">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* How It Works Section */}
      <section
  id="how-it-works"
  className="h-screen flex items-center"
  style={{ backgroundColor: "#394C28" }}
>
  <div className="container mx-auto px-8 grid grid-cols-5 gap-12 h-full">
    {/* Left */}
    <div className="col-span-2 flex flex-col justify-center mt-[-3rem]">
      <h2 className="text-5xl md:text-6xl font-extrabold text-[#DFEBE4] mb-8">How It Works</h2>
      <p className="text-lg text-[#DFEBE4] leading-relaxed max-w-md">
        Simple, transparent, and secure carbon credit trading in three easy steps.
      </p>
    </div>

    {/* Right */}
    <div className="col-span-3 grid grid-cols-3 gap-8 h-full">
      {/* Step 1 - Hanging from top */}
      <div className="flex flex-col justify-start relative self-start h-[71.43vh]">
        <div className="bg-[#435839] p-10 pb-16 rounded-t-full shadow-xl h-full relative overflow-hidden flex flex-col justify-between">
          {/* Circle image top, fits perfectly */}
          <div className="w-full relative" style={{ height: '0', paddingBottom: '100%' }}>
            <img
              src="/connectwallet.webp"
              alt="Step 1"
              className="absolute left-0 top-0 w-full h-full rounded-full object-cover"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <h3 className="text-[#DFEBE4] text-2xl font-semibold mb-4 mt-12">Connect Wallet</h3>
            <p className="text-[#DFEBE4]">Securely connect your wallet to access the marketplace and manage your credits.</p>
          </div>
        </div>
      </div>

      {/* Step 2 - Hanging from bottom */}
      <div className="flex flex-col justify-end relative self-end h-[71.43vh]">
        <div className="bg-[#174D3F] p-10 pb-16 rounded-t-full shadow-xl h-full relative overflow-hidden flex flex-col justify-between">
          {/* Circle image top, fits perfectly */}
          <div className="w-full relative" style={{ height: '0', paddingBottom: '100%' }}>
            <img
              src="/trade.webp"
              alt="Step 2"
              className="absolute left-0 top-0 w-full h-full rounded-full object-cover"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <h3 className="text-[#DFEBE4] text-2xl font-semibold mb-4 mt-12">Browse & Trade</h3>
            <p className="text-[#DFEBE4]">Explore verified credits with transparent pricing and impact metrics.</p>
          </div>
        </div>
      </div>

      {/* Step 3 - Hanging from top */}
      <div className="flex flex-col justify-start relative self-start h-[71.43vh]">
        <div className="bg-[#435839] p-10 pt-16 rounded-b-full shadow-xl h-full relative overflow-hidden flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-semibold text-[#DFEBE4] mb-4">Offset & Impact</h3>
            <p className="text-[#DFEBE4]">Retire credits to offset your carbon footprint and get certificates.</p>
          </div>
          {/* Circle image bottom, fits perfectly */}
          <div className="w-full relative" style={{ height: '0', paddingBottom: '100%' }}>
            <img
              src="/impact.webp"
              alt="Step 3"
              className="absolute left-0 bottom-0 w-full h-full rounded-full object-cover"
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>




      {/* Marketplace Preview */}
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
  {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-leaf w-5 h-5"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg> */}
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
                  {/* <Users className="w-4 h-4" /> */}
                </div>
                <div className="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                  {/* <Globe className="w-4 h-4" /> */}
                </div>
                <div className="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                  {/* <Leaf className="w-4 h-4" /> */}
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


 