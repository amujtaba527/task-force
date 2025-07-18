import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, ArrowLeft, Share2, Bookmark, ThumbsUp, MessageCircle, Tag, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

// This would typically come from a CMS or database
const blogPost = {
  title: "The Future of Cybersecurity in 2024",
  content: `
    <p>As we advance into 2024, the cybersecurity landscape continues to evolve at an unprecedented pace. Organizations worldwide are facing increasingly sophisticated threats that require equally advanced protection strategies.</p>
    
    <h2>Emerging Threats in 2024</h2>
    <p>The threat landscape has become more complex with the rise of AI-powered attacks, supply chain vulnerabilities, and sophisticated social engineering campaigns. Cybercriminals are leveraging machine learning to create more convincing phishing attempts and automated attack vectors.</p>
    
    <h3>AI-Powered Attacks</h3>
    <p>Artificial intelligence is being weaponized by threat actors to create more sophisticated and targeted attacks. These include:</p>
    <ul>
      <li>Deepfake technology for social engineering</li>
      <li>AI-generated malware that can evade traditional detection</li>
      <li>Automated vulnerability discovery and exploitation</li>
      <li>Intelligent password cracking algorithms</li>
    </ul>
    
    <h2>Zero Trust Architecture</h2>
    <p>The traditional perimeter-based security model is becoming obsolete. Zero Trust Architecture operates on the principle of "never trust, always verify," requiring authentication and authorization for every access request, regardless of location.</p>
    
    <h3>Key Components of Zero Trust</h3>
    <ul>
      <li>Identity and Access Management (IAM)</li>
      <li>Multi-factor Authentication (MFA)</li>
      <li>Continuous monitoring and analytics</li>
      <li>Micro-segmentation of networks</li>
      <li>Least privilege access controls</li>
    </ul>
    
    <h2>Cloud Security Challenges</h2>
    <p>As organizations continue their digital transformation journey, cloud security remains a critical concern. The shared responsibility model requires clear understanding of security obligations between cloud providers and customers.</p>
    
    <h2>Recommendations for 2024</h2>
    <p>To stay ahead of evolving threats, organizations should:</p>
    <ol>
      <li>Implement comprehensive security awareness training</li>
      <li>Adopt a Zero Trust security framework</li>
      <li>Invest in AI-powered security tools</li>
      <li>Regularly conduct security assessments and penetration testing</li>
      <li>Develop and test incident response plans</li>
    </ol>
    
    <p>The future of cybersecurity lies in proactive, intelligence-driven approaches that can adapt to the evolving threat landscape. Organizations that invest in modern security frameworks and continuous improvement will be best positioned to protect their digital assets.</p>
  `,
  date: "March 15, 2024",
  author: "Alex Johnson",
  authorBio: "Cybersecurity expert with over 15 years of experience in enterprise security and threat intelligence.",
  authorImage: "/placeholder.svg?height=80&width=80",
  category: "Cybersecurity",
  readTime: "8 min read",
  image: "/placeholder.svg?height=400&width=800",
  tags: ["Cybersecurity", "AI", "Zero Trust", "Cloud Security", "Threat Intelligence"],
}

const relatedPosts = [
  {
    title: "Cloud Migration Best Practices",
    slug: "cloud-migration-best-practices",
    image: "/placeholder.svg?height=200&width=300",
    date: "March 10, 2024",
  },
  {
    title: "AI Integration in Business Operations",
    slug: "ai-integration-business-operations",
    image: "/placeholder.svg?height=200&width=300",
    date: "February 28, 2024",
  },
  {
    title: "Data Privacy Regulations: A Global Overview",
    slug: "data-privacy-regulations-overview",
    image: "/placeholder.svg?height=200&width=300",
    date: "February 20, 2024",
  },
]

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <Header />

      {/* Back Button */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#007F5F] hover:text-[#FFB300] transition-colors duration-300 font-inter font-semibold"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-3 py-1 bg-[#007F5F]/10 text-[#007F5F] rounded-full text-sm font-semibold font-inter">
                {blogPost.category}
              </span>
              <span className="text-[#1A1A1A] text-sm font-inter flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {blogPost.readTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6 font-poppins leading-tight">
              {blogPost.title}
            </h1>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <Image
                  src={blogPost.authorImage || "/placeholder.svg"}
                  alt={blogPost.author}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-[#1A1A1A] font-inter">{blogPost.author}</p>
                  <div className="flex items-center text-[#007F5F] font-inter text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {blogPost.date}
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#007F5F] text-[#007F5F] hover:bg-[#007F5F] hover:text-white bg-transparent"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#007F5F] text-[#007F5F] hover:bg-[#007F5F] hover:text-white bg-transparent"
                >
                  <Bookmark className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>
          </div>

          <div className="relative h-64 md:h-96 mb-12 rounded-2xl overflow-hidden">
            <Image src={blogPost.image || "/placeholder.svg"} alt={blogPost.title} fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="bg-[#F5F5DC]/60 backdrop-blur-sm border border-[#007F5F]/20">
                <CardContent className="p-8">
                  <div
                    className="prose prose-lg max-w-none font-inter leading-relaxed text-[#1A1A1A]"
                    dangerouslySetInnerHTML={{ __html: blogPost.content }}
                    style={
                      {
                        "--tw-prose-headings": "#1A1A1A",
                        "--tw-prose-links": "#007F5F",
                        "--tw-prose-bold": "#1A1A1A",
                        "--tw-prose-counters": "#007F5F",
                        "--tw-prose-bullets": "#007F5F",
                      } as React.CSSProperties
                    }
                  />

                  {/* Tags */}
                  <div className="mt-12 pt-8 border-t border-[#007F5F]/20">
                    <div className="flex items-center mb-4">
                      <Tag className="h-5 w-5 text-[#007F5F] mr-2" />
                      <span className="font-semibold text-[#1A1A1A] font-inter">Tags:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {blogPost.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-[#007F5F]/10 text-[#007F5F] rounded-full text-sm font-inter hover:bg-[#FFB300]/20 hover:text-[#FFB300] transition-colors duration-300 cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Engagement */}
                  <div className="mt-8 pt-8 border-t border-[#007F5F]/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <Button
                          variant="outline"
                          className="border-[#007F5F] text-[#007F5F] hover:bg-[#007F5F] hover:text-white bg-transparent"
                        >
                          <ThumbsUp className="h-4 w-4 mr-2" />
                          Like (24)
                        </Button>
                        <Button
                          variant="outline"
                          className="border-[#007F5F] text-[#007F5F] hover:bg-[#007F5F] hover:text-white bg-transparent"
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Comment (8)
                        </Button>
                      </div>
                      <Button
                        variant="outline"
                        className="border-[#007F5F] text-[#007F5F] hover:bg-[#007F5F] hover:text-white bg-transparent"
                      >
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author Info */}
              <Card className="bg-[#F5F5DC]/60 backdrop-blur-sm border border-[#007F5F]/20 mb-8">
                <CardContent className="p-6 text-center">
                  <Image
                    src={blogPost.authorImage || "/placeholder.svg"}
                    alt={blogPost.author}
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="font-semibold text-[#1A1A1A] mb-2 font-poppins">{blogPost.author}</h3>
                  <p className="text-[#1A1A1A] text-sm font-inter leading-relaxed">{blogPost.authorBio}</p>
                </CardContent>
              </Card>

              {/* Table of Contents */}
              <Card className="bg-[#F5F5DC]/60 backdrop-blur-sm border border-[#007F5F]/20 mb-8">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-[#1A1A1A] mb-4 font-poppins">Table of Contents</h3>
                  <ul className="space-y-2 text-sm font-inter">
                    <li>
                      <a
                        href="#emerging-threats"
                        className="text-[#007F5F] hover:text-[#FFB300] transition-colors duration-300"
                      >
                        Emerging Threats in 2024
                      </a>
                    </li>
                    <li>
                      <a
                        href="#zero-trust"
                        className="text-[#007F5F] hover:text-[#FFB300] transition-colors duration-300"
                      >
                        Zero Trust Architecture
                      </a>
                    </li>
                    <li>
                      <a
                        href="#cloud-security"
                        className="text-[#007F5F] hover:text-[#FFB300] transition-colors duration-300"
                      >
                        Cloud Security Challenges
                      </a>
                    </li>
                    <li>
                      <a
                        href="#recommendations"
                        className="text-[#007F5F] hover:text-[#FFB300] transition-colors duration-300"
                      >
                        Recommendations for 2024
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#F5F5DC] to-[#F0F0D0]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-[#1A1A1A] mb-12 font-poppins text-center">Related Articles</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((post, index) => (
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
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-[#007F5F] mb-3 font-inter text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[#007F5F] mb-4 font-poppins group-hover:text-[#FFB300] transition-colors duration-300">
                      {post.title}
                    </h3>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[#007F5F] font-semibold hover:text-[#FFB300] transition-colors duration-300 font-inter inline-flex items-center"
                    >
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
