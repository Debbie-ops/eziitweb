"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from 'next/image';

export default function Hero() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Buy Now, Pay Later."
  const typingSpeed = 100

  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1))
      }, typingSpeed)
      return () => clearTimeout(timeout)
    }
  }, [typedText])

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
      </div>

      <div className="section-container flex flex-row items-center justify-between w-full max-w-7xl px-6 z-10">
        {/* LEFT SIDE - Text Content */}
        <div className="flex flex-col items-start text-left w-full md:w-1/2">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-poppins">
          <span className="bg-gradient-to-r from-[#CBA328] via-[#F4D03F] to-[#D4AF37] bg-clip-text text-transparent">Credit made easy</span>
          </h1>
        </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-6 font-poppins">
              <span>{typedText}</span>
              <span className="animate-blink">|</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8"
          >
            The Eziit Way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" asChild>
              <a href="#skills">Why Eziit</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
        </div>

        <div className="hidden md:flex w-1/2 justify-center items-center">
          <Image
            src="/demo1.svg"
            alt="illustration"
            width={500}
            height={250}
            className="object-contain"
          />
        </div>

        {/* RIGHT SIDE - SVG Vector 
        <div className="hidden md:block w-1/2 flex justify-center items-center">
          <svg width="300" height="180" viewBox="0 0 300 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="280" height="160" rx="12" fill="#1A237E" />
            <path d="M10 10H290V50H10V10Z" fill="white" fillOpacity="0.1" />
            <rect x="30" y="70" width="40" height="30" rx="4" fill="#FFD600" />
            <rect x="30" y="110" width="240" height="20" rx="4" fill="#E8EAF6" fillOpacity="0.8" />
            <circle cx="250" cy="140" r="15" fill="#1565C0" />
            <text x="250" y="145" fontFamily="Arial" fontSize="12" fill="white" textAnchor="middle">VISA</text>
            <path d="M150 40L170 60M170 60L150 80M170 60H230" stroke="#00C853" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>*/}
      </div>
    </section>
  )
}
