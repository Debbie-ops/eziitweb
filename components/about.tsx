"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"
import Image from "next/image"

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="bg-background py-16 md:py-24">
      <div className="section-container" ref={ref}>
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          About <span className="bg-gradient-to-r from-[#CBA328] via-[#F4D03F] to-[#D4AF37] bg-clip-text text-transparent">Eziit</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full aspect-[4/3] mx-auto" // Changed aspect ratio to 4:3
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 -z-10 transform rotate-3" />
            <div className="absolute inset-0 rounded-2xl border border-primary/10 transform -rotate-3" />
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <Image
                src="/hero.jpg"
                alt="us"
                fill // Use fill instead of fixed width/height
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="space-y-4 text-muted-foreground">
              <p>
                Eziit is a credit platform that empowers you to shop for everyday essentials without the burden of interest or hidden fees. 
                With Eziit, you can buy goods on credit from trusted merchants and pay later, all at zero interest. 
                <br /><br />
                Our mission is simple: to make access to basic goods and services easier, fairer, and stress free. Whether it's groceries, household items, or personal needs, 
                Eziit gives you the flexibility to pay in manageable installments with full transparency.
              </p>
            </div>

            <div className="mt-8">
              <Button asChild>
                <a href="/DALISO.MITICV.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  View Terms and Conditions
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}