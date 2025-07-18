import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, MessageSquare, Calendar } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@taskforce.com",
    description: "Send us an email anytime",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 6pm",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Tech Street, San Francisco, CA 94105",
    description: "Come say hello at our office",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon-Fri: 8am-6pm PST",
    description: "Weekend support available",
  },
]

const services = [
  "Cybersecurity Solutions",
  "Custom Software Development",
  "Cloud Migration & Management",
  "IT Consulting",
  "Data Analytics & BI",
  "Mobile Solutions",
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#F5F5DC] to-[#F0F0D0]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-8 font-poppins">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-[#1A1A1A] mb-12 max-w-4xl mx-auto font-inter leading-relaxed">
            Ready to transform your business? Let's discuss your project and explore how we can help you achieve your
            technology goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-[#F5F5DC]/60 backdrop-blur-sm border border-[#007F5F]/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <MessageSquare className="h-6 w-6 text-[#007F5F] mr-3" />
                  <h2 className="text-2xl font-semibold text-[#1A1A1A] font-poppins">Send us a Message</h2>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#1A1A1A] font-semibold mb-2 font-inter">First Name *</label>
                      <Input
                        className="bg-white/80 border-[#007F5F]/30 focus:border-[#FFB300] transition-colors duration-300"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[#1A1A1A] font-semibold mb-2 font-inter">Last Name *</label>
                      <Input
                        className="bg-white/80 border-[#007F5F]/30 focus:border-[#FFB300] transition-colors duration-300"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#1A1A1A] font-semibold mb-2 font-inter">Email *</label>
                      <Input
                        type="email"
                        className="bg-white/80 border-[#007F5F]/30 focus:border-[#FFB300] transition-colors duration-300"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-[#1A1A1A] font-semibold mb-2 font-inter">Phone</label>
                      <Input
                        type="tel"
                        className="bg-white/80 border-[#007F5F]/30 focus:border-[#FFB300] transition-colors duration-300"
                        placeholder="+1 (555) 123-4567"
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
                    <label className="block text-[#1A1A1A] font-semibold mb-2 font-inter">Service of Interest</label>
                    <Select>
                      <SelectTrigger className="bg-white/80 border-[#007F5F]/30 focus:border-[#FFB300] transition-colors duration-300">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service.toLowerCase().replace(/\s+/g, "-")}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-[#1A1A1A] font-semibold mb-2 font-inter">Project Budget</label>
                    <Select>
                      <SelectTrigger className="bg-white/80 border-[#007F5F]/30 focus:border-[#FFB300] transition-colors duration-300">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-10k">Under $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="over-100k">Over $100,000</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-[#1A1A1A] font-semibold mb-2 font-inter">Message *</label>
                    <Textarea
                      className="bg-white/80 border-[#007F5F]/30 focus:border-[#FFB300] transition-colors duration-300 min-h-[120px]"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                      required
                    />
                  </div>

                  <div className="text-center">
                    <Button className="bg-[#007F5F] hover:bg-[#006B51] text-white px-12 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#FFB300]/20 w-full md:w-auto">
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold text-[#1A1A1A] mb-6 font-poppins">Contact Information</h2>
                <p className="text-lg text-[#1A1A1A] font-inter leading-relaxed mb-8">
                  We're here to help and answer any questions you might have. We look forward to hearing from you.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="bg-[#F5F5DC]/60 backdrop-blur-sm border border-[#007F5F]/20 hover:border-[#FFB300]/40 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="p-3 bg-[#007F5F]/10 rounded-full mr-4 flex-shrink-0">
                          <info.icon className="h-6 w-6 text-[#007F5F]" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2 font-poppins">{info.title}</h3>
                          <p className="text-[#007F5F] font-semibold mb-1 font-inter">{info.details}</p>
                          <p className="text-[#1A1A1A] text-sm font-inter">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Schedule Meeting */}
              <Card className="bg-[#007F5F]/5 backdrop-blur-sm border border-[#007F5F]/20">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-8 w-8 text-[#007F5F] mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-[#1A1A1A] mb-2 font-poppins">Schedule a Consultation</h3>
                  <p className="text-[#1A1A1A] mb-4 font-inter">
                    Book a free 30-minute consultation to discuss your project
                  </p>
                  <Button className="bg-[#007F5F] hover:bg-[#006B51] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#FFB300]/20">
                    Book Meeting
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#F5F5DC] to-[#F0F0D0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#1A1A1A] mb-4 font-poppins">Frequently Asked Questions</h2>
            <p className="text-xl text-[#1A1A1A] font-inter">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            <Card className="bg-[#F5F5DC]/60 backdrop-blur-sm border border-[#007F5F]/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3 font-poppins">
                  How long does a typical project take?
                </h3>
                <p className="text-[#1A1A1A] font-inter leading-relaxed">
                  Project timelines vary depending on scope and complexity. Simple projects may take 4-8 weeks, while
                  complex enterprise solutions can take 3-6 months. We'll provide a detailed timeline during our initial
                  consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#F5F5DC]/60 backdrop-blur-sm border border-[#007F5F]/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3 font-poppins">
                  Do you provide ongoing support after project completion?
                </h3>
                <p className="text-[#1A1A1A] font-inter leading-relaxed">
                  Yes, we offer comprehensive support and maintenance packages. This includes bug fixes, security
                  updates, performance monitoring, and feature enhancements to ensure your solution continues to perform
                  optimally.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#F5F5DC]/60 backdrop-blur-sm border border-[#007F5F]/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3 font-poppins">
                  What industries do you work with?
                </h3>
                <p className="text-[#1A1A1A] font-inter leading-relaxed">
                  We work with businesses across various industries including healthcare, finance, e-commerce,
                  manufacturing, and technology. Our solutions are tailored to meet industry-specific requirements and
                  compliance standards.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#F5F5DC]/60 backdrop-blur-sm border border-[#007F5F]/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-3 font-poppins">
                  How do you ensure project security and data protection?
                </h3>
                <p className="text-[#1A1A1A] font-inter leading-relaxed">
                  Security is our top priority. We follow industry best practices, implement secure coding standards,
                  conduct regular security audits, and ensure compliance with relevant regulations like GDPR, HIPAA, and
                  SOC 2.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
