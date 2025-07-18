import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Calendar, User, ArrowRight, Search, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

const blogPosts = [
  {
    title: "The Future of Cybersecurity in 2024",
    excerpt:
      "Exploring emerging threats and advanced protection strategies for modern businesses. Learn about AI-powered security solutions and zero-trust architecture.",
    date: "March 15, 2024",
    author: "Alex Johnson",
    category: "Cybersecurity",
    slug: "future-of-cybersecurity-2024",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "8 min read",
  },
  {
    title: "Cloud Migration Best Practices",
    excerpt:
      "A comprehensive guide to successfully migrating your business to the cloud. Discover strategies for minimizing downtime and maximizing ROI.",
    date: "March 10, 2024",
    author: "Sarah Chen",
    category: "Cloud Computing",
    slug: "cloud-migration-best-practices",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "12 min read",
  },
  {
    title: "Custom Software vs Off-the-Shelf Solutions",
    excerpt:
      "Understanding when to invest in custom development for your business needs. Compare costs, benefits, and long-term implications.",
    date: "March 5, 2024",
    author: "Michael Rodriguez",
    category: "Software Development",
    slug: "custom-software-vs-off-shelf",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "6 min read",
  },
  {
    title: "AI Integration in Business Operations",
    excerpt:
      "How artificial intelligence is transforming business processes and creating competitive advantages across industries.",
    date: "February 28, 2024",
    author: "Emily Davis",
    category: "Artificial Intelligence",
    slug: "ai-integration-business-operations",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "10 min read",
  },
  {
    title: "Data Privacy Regulations: A Global Overview",
    excerpt:
      "Navigate the complex landscape of data privacy laws including GDPR, CCPA, and emerging regulations worldwide.",
    date: "February 20, 2024",
    author: "Alex Johnson",
    category: "Compliance",
    slug: "data-privacy-regulations-overview",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "15 min read",
  },
  {
    title: "Mobile App Development Trends 2024",
    excerpt:
      "Discover the latest trends in mobile app development, from cross-platform frameworks to emerging technologies.",
    date: "February 15, 2024",
    author: "Sarah Chen",
    category: "Mobile Development",
    slug: "mobile-app-development-trends-2024",
    image: "/placeholder.svg?height=300&width=400",
    readTime: "7 min read",
  },
]

const categories = [
  "All Posts",
  "Cybersecurity",
  "Cloud Computing",
  "Software Development",
  "Artificial Intelligence",
  "Compliance",
  "Mobile Development",
]

const featuredPost = blogPosts[0]
const regularPosts = blogPosts.slice(1)

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#F5F5DC] to-[#F0F0D0]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-8 font-poppins">Our Blog</h1>
          <p className="text-xl md:text-2xl text-[#1A1A1A] mb-12 max-w-4xl mx-auto font-inter leading-relaxed">
            Stay updated with the latest insights, trends, and best practices in technology, cybersecurity, and digital
            transformation.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#007F5F] h-5 w-5" />
            <Input
              className="pl-10 bg-white/80 border-[#007F5F]/30 focus:border-[#FFB300] transition-colors duration-300"
              placeholder="Search articles..."
            />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-[#1A1A1A] mb-8 font-poppins text-center">Featured Article</h2>
          </div>

          <Card className="bg-[#F5F5DC]/60 backdrop-blur-sm border border-[#007F5F]/20 hover:border-[#FFB300]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#007F5F]/10">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover rounded-l-lg"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-[#007F5F]/10 text-[#007F5F] rounded-full text-sm font-semibold font-inter">
                      {featuredPost.category}
                    </span>
                    <span className="text-[#1A1A1A] text-sm font-inter">{featuredPost.readTime}</span>
                  </div>

                  <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-4 font-poppins">{featuredPost.title}</h3>

                  <p className="text-[#1A1A1A] mb-6 font-inter leading-relaxed">{featuredPost.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#007F5F] font-inter">
                      <User className="h-4 w-4 mr-2" />
                      <span className="text-sm mr-4">{featuredPost.author}</span>
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="text-sm">{featuredPost.date}</span>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="text-[#007F5F] font-semibold hover:text-[#FFB300] transition-colors duration-300 font-inter inline-flex items-center"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 bg-gradient-to-br from-[#F5F5DC] to-[#F0F0D0]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={
                  index === 0
                    ? "bg-[#007F5F] hover:bg-[#006B51] text-white"
                    : "border-[#007F5F] text-[#007F5F] hover:bg-[#007F5F] hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <Card
                key={index}
                className="group bg-[#F5F5DC]/60 backdrop-blur-sm border border-[#007F5F]/20 hover:border-[#FFB300]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#007F5F]/10"
              >
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#007F5F]/90 text-white rounded-full text-xs font-semibold font-inter">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-[#007F5F] mb-3 font-inter text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="mr-4">{post.date}</span>
                      <Tag className="h-4 w-4 mr-2" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-[#007F5F] mb-3 font-poppins group-hover:text-[#FFB300] transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-[#1A1A1A] mb-4 font-inter leading-relaxed text-sm">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-[#1A1A1A] font-inter text-sm">
                        <User className="h-4 w-4 mr-2" />
                        <span>{post.author}</span>
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-[#007F5F] font-semibold hover:text-[#FFB300] transition-colors duration-300 font-inter inline-flex items-center text-sm"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button className="bg-[#007F5F] hover:bg-[#006B51] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#FFB300]/20">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#F5F5DC] to-[#F0F0D0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#1A1A1A] mb-6 font-poppins">Stay Updated</h2>
          <p className="text-xl text-[#1A1A1A] mb-8 font-inter">
            Subscribe to our newsletter and never miss our latest insights and updates.
          </p>

          <Card className="bg-[#F5F5DC]/60 backdrop-blur-sm border border-[#007F5F]/20 max-w-md mx-auto">
            <CardContent className="p-6">
              <form className="space-y-4">
                <Input
                  type="email"
                  className="bg-white/80 border-[#007F5F]/30 focus:border-[#FFB300] transition-colors duration-300"
                  placeholder="Enter your email address"
                />
                <Button className="w-full bg-[#007F5F] hover:bg-[#006B51] text-white py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#FFB300]/20">
                  Subscribe Now
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
