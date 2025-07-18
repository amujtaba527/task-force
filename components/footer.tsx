import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <Logo variant="light" />
            </div>
            <p className="text-gray-300 mb-6 font-inter leading-relaxed">
              Empowering businesses with cutting-edge technology solutions. We specialize in cybersecurity, custom
              software development, and IT consulting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#FFB300] transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FFB300] transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FFB300] transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-poppins text-[#FFB300]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-inter"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-inter"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors duration-300 font-inter">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-inter"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 font-poppins text-[#FFB300]">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300 font-inter">
                <Mail className="h-4 w-4 mr-3 text-[#007F5F]" />
                hello@taskforce.com
              </li>
              <li className="flex items-center text-gray-300 font-inter">
                <Phone className="h-4 w-4 mr-3 text-[#007F5F]" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-start text-gray-300 font-inter">
                <MapPin className="h-4 w-4 mr-3 mt-1 text-[#007F5F]" />
                123 Tech Street
                <br />
                San Francisco, CA 94105
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 font-inter">© {new Date().getFullYear()} Task Force. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
