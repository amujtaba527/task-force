import Image from "next/image"

interface LogoProps {
  variant?: "dark" | "light"
}

export default function Logo({ variant = "dark" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-[#1A1A1A]"
  const accentColor = variant === "light" ? "text-[#FFB300]" : "text-[#FFB300]"

  return (
    <div className="flex items-center space-x-1">
      <div className="relative">
        <Image src="/logo.png" alt="Logo" width={80} height={80} />
        <div className={`absolute top-1 left-1 w-2 h-2 ${accentColor} rounded-full`}></div>
      </div>
      <div className="flex flex-col">
        <span className={`text-2xl font-bold ${textColor} font-poppins leading-none`}>Task Force</span>
        <div className={`h-0.5 w-full bg-gradient-to-r from-[#007F5F] to-[#FFB300] mt-1`}></div>
      </div>
    </div>
  )
}
