import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Star, ArrowRight, Shield, Zap, Users, Target, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"

const services = [
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description:
      "Comprehensive security audits, threat detection, and protection systems to safeguard your digital assets.",
  },
  {
    icon: Zap,
    title: "Custom Software Development",
    description:
      "Tailored software solutions built with cutting-edge technologies to streamline your business operations.",
  },
  {
    icon: Users,
    title: "IT Consulting",
    description: "Strategic technology consulting to optimize your infrastructure and drive digital transformation.",
  },
  {
    icon: Target,
    title: "Cloud Migration",
    description: "Seamless migration to cloud platforms with enhanced scalability, security, and cost efficiency.",
  },
]

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    content:
      "Task Force transformed our entire IT infrastructure. Their expertise and professionalism exceeded our expectations.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Michael Chen",
    role: "CEO, InnovateLab",
    content:
      "The cybersecurity solutions provided by Task Force gave us peace of mind and protected our valuable data assets.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Director, GrowthCo",
    content: "Their custom software development helped us automate processes and increase efficiency by 40%.",
    rating: 5,
    image: "/placeholder.svg?height=60&width=60",
  },
]

const blogPosts = [
  {
    title: "The Future of Cybersecurity in 2024",
    excerpt: "Exploring emerging threats and advanced protection strategies for modern businesses.",
    date: "March 15, 2024",
    slug: "future-of-cybersecurity-2024",
  },
  {
    title: "Cloud Migration Best Practices",
    excerpt: "A comprehensive guide to successfully migrating your business to the cloud.",
    date: "March 10, 2024",
    slug: "cloud-migration-best-practices",
  },
  {
    title: "Custom Software vs Off-the-Shelf Solutions",
    excerpt: "Understanding when to invest in custom development for your business needs.",
    date: "March 5, 2024",
    slug: "custom-software-vs-off-shelf",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* About Us Section */}
      <section id="about-us" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-semibold text-[#1A1A1A] mb-6 font-poppins">About Task Force</h2>
              <p className="text-lg text-[#1A1A1A] mb-6 font-inter leading-relaxed">
                We are a premier software company dedicated to delivering innovative technology solutions that drive
                business growth and digital transformation. With over a decade of experience, our team of experts
                specializes in cybersecurity, custom software development, and IT consulting.
              </p>
              <p className="text-lg text-[#1A1A1A] mb-8 font-inter leading-relaxed">
                Our mission is to empower businesses with cutting-edge technology solutions that are secure, scalable,
                and tailored to their unique needs.
              </p>
              <Link href="/about">
                <Button className="bg-[#007F5F] hover:bg-[#006B51] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#FFB300]/20">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#007F5F]/20 to-[#FFB300]/20 rounded-2xl blur-xl"></div>
              <Image
                src="/about.webp?height=400&width=500"
                alt="Task Force Team"
                width={500}
                height={400}
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-br from-[#F5F5DC] to-[#F0F0D0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#1A1A1A] mb-4 font-poppins">Our Services</h2>
            <p className="text-xl text-[#1A1A1A] font-inter max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group bg-[#F5F5DC]/60 backdrop-blur-sm border border-[#007F5F]/20 hover:border-[#FFB300]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#007F5F]/10"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-[#007F5F]/10 rounded-full group-hover:bg-[#FFB300]/20 transition-colors duration-300">
                      <service.icon className="h-8 w-8 text-[#007F5F] group-hover:text-[#FFB300] transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4 font-poppins">{service.title}</h3>
                  <p className="text-[#1A1A1A] font-inter leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-[#007F5F] hover:bg-[#006B51] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#FFB300]/20">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#1A1A1A] mb-4 font-poppins">What Our Clients Say</h2>
            <p className="text-xl text-[#1A1A1A] font-inter">Trusted by leading companies worldwide</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-[#F5F5DC]/60 backdrop-blur-sm border border-[#007F5F]/20 hover:border-[#FFB300]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#007F5F]/10"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-[#FFB300] fill-current" />
                    ))}
                  </div>
                  <p className="text-[#1A1A1A] mb-6 font-inter leading-relaxed italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-[#1A1A1A] font-poppins">{testimonial.name}</h4>
                      <p className="text-[#007F5F] font-inter">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section id="blog" className="py-20 px-4 bg-gradient-to-br from-[#F5F5DC] to-[#F0F0D0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#1A1A1A] mb-4 font-poppins">Latest Insights</h2>
            <p className="text-xl text-[#1A1A1A] font-inter">
              Stay updated with the latest technology trends and insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="group bg-[#F5F5DC]/60 backdrop-blur-sm border border-[#007F5F]/20 hover:border-[#FFB300]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#007F5F]/10"
              >
                <CardContent className="p-8">
                  <div className="flex items-center text-[#007F5F] mb-4 font-inter">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#007F5F] mb-4 font-poppins group-hover:text-[#FFB300] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-[#1A1A1A] mb-6 font-inter leading-relaxed">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#007F5F] font-semibold hover:text-[#FFB300] transition-colors duration-300 font-inter inline-flex items-center"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/blog">
              <Button className="bg-[#007F5F] hover:bg-[#006B51] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#FFB300]/20">
                View All Posts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#1A1A1A] mb-4 font-poppins">Ready to Get Started?</h2>
            <p className="text-xl text-[#1A1A1A] font-inter">Let's discuss how we can help transform your business</p>
          </div>

          <Card className="bg-[#F5F5DC]/60 backdrop-blur-sm border border-[#007F5F]/20">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#1A1A1A] font-semibold mb-2 font-inter">Name</label>
                    <Input
                      className="bg-white/80 border-[#007F5F]/30 focus:border-[#FFB300] transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-[#1A1A1A] font-semibold mb-2 font-inter">Email</label>
                    <Input
                      type="email"
                      className="bg-white/80 border-[#007F5F]/30 focus:border-[#FFB300] transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[#1A1A1A] font-semibold mb-2 font-inter">Company</label>
                  <Input
                    className="bg-white/80 border-[#007F5F]/30 focus:border-[#FFB300] transition-colors duration-300"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-[#1A1A1A] font-semibold mb-2 font-inter">Message</label>
                  <Textarea
                    className="bg-white/80 border-[#007F5F]/30 focus:border-[#FFB300] transition-colors duration-300 min-h-[120px]"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <div className="text-center">
                  <Button className="bg-[#007F5F] hover:bg-[#006B51] text-white px-12 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#FFB300]/20">
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
