import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUp, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary/50 pt-8">

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-base text-muted-foreground">
        {/* Branding */}
        <div>
          <Link href="/" className="text-3xl font-bold font-poppins">
            <span className="bg-gradient-to-r from-[#CBA328] via-[#F4D03F] to-[#D4AF37] bg-clip-text text-transparent">Eziit</span>
          </Link>
          <p className="mt-4 max-w-xs text-lg">
            Empowering people to shop now and pay later—zero interest, total convenience, full security.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-3 text-lg">
          <p className="font-semibold text-foreground mb-2 text-xl">Quick Links</p>
          <Link href="/about">About Us</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQs</Link>
        </div>

        {/* Social & Scroll */}
        <div className="flex flex-col items-start md:items-end space-y-4 text-lg">
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook"><Facebook className="hover:text-primary" size={24} /></a>
            <a href="#" aria-label="Instagram"><Instagram className="hover:text-primary" size={24} /></a>
            <a href="#" aria-label="Twitter"><Twitter className="hover:text-primary" size={24} /></a>
          </div>

          <Button variant="ghost" size="icon" className="mt-4" asChild>
            <a href="#" aria-label="Scroll to top">
              <ArrowUp size={24} />
            </a>
          </Button>

          <p className="text-sm text-muted-foreground mt-2">
            © {new Date().getFullYear()} Eziit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
