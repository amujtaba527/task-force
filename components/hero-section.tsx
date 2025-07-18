"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F5DC] via-[#F0F0D0] to-[#F5F5DC]">
        <div className="absolute inset-0">
          {/* Animated shapes */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#007F5F]/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-[#FFB300]/20 rounded-full blur-lg animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-[#007F5F]/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-[#FFB300]/15 rounded-full blur-xl animate-bounce"></div>

          {/* Geometric shapes */}
          <div className="absolute top-1/4 left-1/3 w-16 h-16 border-2 border-[#007F5F]/20 rotate-45 animate-spin"></div>
          <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-[#FFB300]/10 rotate-12 animate-pulse"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-[#007F5F]/10 text-[#007F5F] rounded-full text-sm font-semibold font-inter mb-6">
            🎯 Premium Software Solutions
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] mb-8 font-poppins leading-tight">
          Empower Your Business with
          <span className="block text-[#007F5F] mt-2">Task Force</span>
        </h1>

        <p className="text-xl md:text-2xl text-[#1A1A1A] mb-12 max-w-4xl mx-auto font-inter leading-relaxed">
          We deliver cutting-edge cybersecurity, custom software development, and IT consulting solutions that drive
          growth and digital transformation for forward-thinking businesses.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link href="/contact">
            <Button className="bg-[#007F5F] hover:bg-[#006B51] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#007F5F]/30 transform hover:scale-105">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>

          <Button
            variant="outline"
            className="border-2 border-[#007F5F] hover:border-[#FFB300] text-[#007F5F] hover:bg-[#007F5F] hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg bg-transparent"
            onClick={() => window.location.href = "#about-us"}
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#007F5F] font-poppins mb-2">100+</div>
            <div className="text-[#1A1A1A] font-inter">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#007F5F] font-poppins mb-2">5+</div>
            <div className="text-[#1A1A1A] font-inter">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#007F5F] font-poppins mb-2">99%</div>
            <div className="text-[#1A1A1A] font-inter">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#007F5F] font-poppins mb-2">24/7</div>
            <div className="text-[#1A1A1A] font-inter">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}
