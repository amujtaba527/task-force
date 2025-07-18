import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Code, Cloud, Users, Zap, Lock, Database, Smartphone, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const services = [
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    description: "Comprehensive security services to protect your digital assets and ensure business continuity.",
    features: [
      "Security Audits & Assessments",
      "Threat Detection & Response",
      "Penetration Testing",
      "Compliance Management",
      "Security Training",
    ],
    price: "Starting at $5,000/month",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description: "Tailored software solutions built with cutting-edge technologies to meet your unique business needs.",
    features: [
      "Web Application Development",
      "Mobile App Development",
      "API Development & Integration",
      "Legacy System Modernization",
      "Quality Assurance & Testing",
    ],
    price: "Starting at $15,000/project",
  },
  {
    icon: Cloud,
    title: "Cloud Migration & Management",
    description: "Seamless migration to cloud platforms with ongoing management and optimization services.",
    features: [
      "Cloud Strategy & Planning",
      "Migration Services",
      "Infrastructure Management",
      "Cost Optimization",
      "24/7 Monitoring & Support",
    ],
    price: "Starting at $3,000/month",
  },
  {
    icon: Users,
    title: "IT Consulting",
    description: "Strategic technology consulting to optimize your infrastructure and drive digital transformation.",
    features: [
      "Technology Strategy",
      "Digital Transformation",
      "Process Optimization",
      "Vendor Management",
      "Project Management",
    ],
    price: "Starting at $200/hour",
  },
  {
    icon: Database,
    title: "Data Analytics & BI",
    description: "Transform your data into actionable insights with our comprehensive analytics solutions.",
    features: [
      "Data Warehouse Design",
      "Business Intelligence Dashboards",
      "Predictive Analytics",
      "Data Integration",
      "Reporting Automation",
    ],
    price: "Starting at $8,000/project",
  },
  {
    icon: Smartphone,
    title: "Mobile Solutions",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    features: [
      "iOS & Android Development",
      "Cross-Platform Solutions",
      "UI/UX Design",
      "App Store Optimization",
      "Maintenance & Updates",
    ],
    price: "Starting at $25,000/project",
  },
]

const process = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description:
      "We start by understanding your business needs, challenges, and objectives through comprehensive analysis.",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description:
      "Our experts develop a tailored strategy and detailed project plan aligned with your goals and timeline.",
  },
  {
    step: "03",
    title: "Development & Implementation",
    description: "We execute the plan using agile methodologies, ensuring quality and keeping you informed throughout.",
  },
  {
    step: "04",
    title: "Testing & Deployment",
    description: "Rigorous testing ensures everything works perfectly before we deploy your solution to production.",
  },
  {
    step: "05",
    title: "Support & Optimization",
    description: "Ongoing support and continuous optimization ensure your solution evolves with your business needs.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#F5F5DC] to-[#F0F0D0]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-8 font-poppins">Our Services</h1>
          <p className="text-xl md:text-2xl text-[#1A1A1A] mb-12 max-w-4xl mx-auto font-inter leading-relaxed">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation
            journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group bg-[#F5F5DC]/60 backdrop-blur-sm border border-[#007F5F]/20 hover:border-[#FFB300]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#007F5F]/10"
              >
                <CardContent className="p-8">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-[#007F5F]/10 rounded-full group-hover:bg-[#FFB300]/20 transition-colors duration-300">
                      <service.icon className="h-8 w-8 text-[#007F5F] group-hover:text-[#FFB300] transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4 font-poppins text-center">
                    {service.title}
                  </h3>
                  <p className="text-[#1A1A1A] font-inter leading-relaxed mb-6 text-center">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-[#1A1A1A] font-inter">
                        <CheckCircle className="h-4 w-4 text-[#007F5F] mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="text-center border-t border-[#007F5F]/20 pt-6">
                    <p className="text-[#007F5F] font-semibold mb-4 font-inter">{service.price}</p>
                    <Button className="w-full bg-[#007F5F] hover:bg-[#006B51] text-white rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#FFB300]/20">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#F5F5DC] to-[#F0F0D0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#1A1A1A] mb-4 font-poppins">Our Process</h2>
            <p className="text-xl text-[#1A1A1A] font-inter max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery every time
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-[#007F5F] text-white rounded-full flex items-center justify-center text-xl font-bold font-poppins">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#1A1A1A] mb-4 font-poppins">{step.title}</h3>
                <p className="text-[#1A1A1A] font-inter text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#1A1A1A] mb-4 font-poppins">Why Choose Task Force?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#F5F5DC]/60 backdrop-blur-sm border border-[#007F5F]/20">
              <CardContent className="p-8 text-center">
                <Zap className="h-12 w-12 text-[#007F5F] mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4 font-poppins">Proven Expertise</h3>
                <p className="text-[#1A1A1A] font-inter leading-relaxed">
                  Over 10 years of experience delivering successful projects across various industries and technologies.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#F5F5DC]/60 backdrop-blur-sm border border-[#007F5F]/20">
              <CardContent className="p-8 text-center">
                <Lock className="h-12 w-12 text-[#007F5F] mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4 font-poppins">Security First</h3>
                <p className="text-[#1A1A1A] font-inter leading-relaxed">
                  Every solution is built with security as a top priority, ensuring your data and systems are protected.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-[#F5F5DC]/60 backdrop-blur-sm border border-[#007F5F]/20">
              <CardContent className="p-8 text-center">
                <Users className="h-12 w-12 text-[#007F5F] mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-4 font-poppins">Dedicated Support</h3>
                <p className="text-[#1A1A1A] font-inter leading-relaxed">
                  24/7 support and ongoing maintenance ensure your solutions continue to perform at their best.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#F5F5DC] to-[#F0F0D0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#1A1A1A] mb-6 font-poppins">Ready to Get Started?</h2>
          <p className="text-xl text-[#1A1A1A] mb-8 font-inter">
            Let's discuss your project and how we can help bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-[#007F5F] hover:bg-[#006B51] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#FFB300]/20">
                Start Your Project
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-2 border-[#007F5F] text-[#007F5F] hover:bg-[#007F5F] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
