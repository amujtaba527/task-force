import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Award, Zap, Shield, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "We prioritize the security and privacy of our clients' data in every solution we deliver.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay at the forefront of technology to provide cutting-edge solutions that drive results.",
  },
  {
    icon: Heart,
    title: "Client-Centric",
    description: "Our clients' success is our success. We build lasting partnerships based on trust and results.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards of quality in everything we do, from code to customer service.",
  },
]

const team = [
  {
    name: "Alex Johnson",
    role: "CEO & Founder",
    image: "/placeholder.svg?height=300&width=300",
    bio: "15+ years in enterprise software development and cybersecurity.",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Former Google engineer with expertise in cloud architecture and AI.",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Security",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Cybersecurity expert with government and Fortune 500 experience.",
  },
  {
    name: "Emily Davis",
    role: "Lead Developer",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Full-stack developer specializing in scalable web applications.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#F5F5DC] to-[#F0F0D0]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-8 font-poppins">About Task Force</h1>
          <p className="text-xl md:text-2xl text-[#1A1A1A] mb-12 max-w-4xl mx-auto font-inter leading-relaxed">
            We're a team of passionate technologists dedicated to transforming businesses through innovative software
            solutions and uncompromising security.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-semibold text-[#1A1A1A] mb-6 font-poppins">Our Story</h2>
              <p className="text-lg text-[#1A1A1A] mb-6 font-inter leading-relaxed">
                Founded in 2014, Task Force emerged from a simple belief: every business deserves access to
                enterprise-grade technology solutions, regardless of size or industry. What started as a small team of
                developers has grown into a comprehensive technology partner for businesses worldwide.
              </p>
              <p className="text-lg text-[#1A1A1A] mb-6 font-inter leading-relaxed">
                Over the years, we've helped hundreds of companies navigate digital transformation, secure their digital
                assets, and build custom solutions that drive real business results. Our commitment to excellence and
                innovation has made us a trusted partner in the technology landscape.
              </p>
              <p className="text-lg text-[#1A1A1A] mb-8 font-inter leading-relaxed">
                Today, we continue to push the boundaries of what's possible, combining cutting-edge technology with
                deep industry expertise to deliver solutions that not only meet current needs but anticipate future
                challenges.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#007F5F]/20 to-[#FFB300]/20 rounded-2xl blur-xl"></div>
              <Image
                src="/about-story.webp?height=500&width=600"
                alt="Task Force Office"
                width={600}
                height={500}
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#F5F5DC] to-[#F0F0D0]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-[#F5F5DC]/60 backdrop-blur-sm border border-[#007F5F]/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-[#007F5F] mr-4" />
                  <h3 className="text-2xl font-semibold text-[#1A1A1A] font-poppins">Our Mission</h3>
                </div>
                <p className="text-lg text-[#1A1A1A] font-inter leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, enhance security, and
                  create competitive advantages in an increasingly digital world.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#F5F5DC]/60 backdrop-blur-sm border border-[#007F5F]/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-[#007F5F] mr-4" />
                  <h3 className="text-2xl font-semibold text-[#1A1A1A] font-poppins">Our Vision</h3>
                </div>
                <p className="text-lg text-[#1A1A1A] font-inter leading-relaxed">
                  To be the leading technology partner that businesses trust to navigate digital transformation, secure
                  their future, and unlock their full potential through innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#1A1A1A] mb-4 font-poppins">Our Values</h2>
            <p className="text-xl text-[#1A1A1A] font-inter max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group bg-[#F5F5DC]/60 backdrop-blur-sm border border-[#007F5F]/20 hover:border-[#FFB300]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#007F5F]/10"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-[#007F5F]/10 rounded-full group-hover:bg-[#FFB300]/20 transition-colors duration-300">
                      <value.icon className="h-8 w-8 text-[#007F5F] group-hover:text-[#FFB300] transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4 font-poppins">{value.title}</h3>
                  <p className="text-[#1A1A1A] font-inter leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#F5F5DC] to-[#F0F0D0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#1A1A1A] mb-4 font-poppins">Meet Our Team</h2>
            <p className="text-xl text-[#1A1A1A] font-inter">The experts behind our success</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-[#F5F5DC]/60 backdrop-blur-sm border border-[#007F5F]/20 hover:border-[#FFB300]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#007F5F]/10"
              >
                <CardContent className="p-6 text-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2 font-poppins">{member.name}</h3>
                  <p className="text-[#007F5F] font-semibold mb-4 font-inter">{member.role}</p>
                  <p className="text-[#1A1A1A] font-inter text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#1A1A1A] mb-6 font-poppins">Ready to Work Together?</h2>
          <p className="text-xl text-[#1A1A1A] mb-8 font-inter">
            Let's discuss how we can help transform your business with our expertise and innovation.
          </p>
          <Link href="/contact">
            <Button className="bg-[#007F5F] hover:bg-[#006B51] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#FFB300]/20">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
