"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const specialFeatures = [
  {
    title: "Zero Interest Credit",
    description:
      "Clients can shop now and pay later with no added interest. Our platform ensures affordability and responsible credit use.",
    illustration: (
      <svg className="h-24 w-24 mb-4 text-primary" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 32h40v4H12zM12 24h40v4H12zM12 16h40v4H12z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Employer Integration",
    description:
      "Employers can register their staff, enabling them to access credit and manage repayments directly from their income.",
    illustration: (
      <svg className="h-24 w-24 mb-4 text-primary" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 32a8 8 0 100-16 8 8 0 000 16zM16 48h32v-4a8 8 0 00-8-8H24a8 8 0 00-8 8v4z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Merchant Growth",
    description:
      "Supermarkets and outlets can attract more customers by allowing purchases on credit through our verified platform.",
    illustration: (
      <svg className="h-24 w-24 mb-4 text-primary" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 16h32v32H16z" stroke="currentColor" strokeWidth="4" fill="none"/>
        <path d="M24 24h16v16H24z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Underwriter Protection",
    description:
      "Our trusted underwriters ensure all parties are covered in the event of default, guaranteeing financial confidence.",
    illustration: (
      <svg className="h-24 w-24 mb-4 text-primary" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 4l28 12v20c0 16-28 24-28 24S4 52 4 36V16l28-12z" fill="currentColor"/>
      </svg>
    ),
  },
]

export default function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="bg-secondary/30 py-16 md:py-24">
      <div className="section-container" ref={ref}>
        <motion.h2
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          What makes{" "}
          <span className="bg-gradient-to-r from-[#CBA328] via-[#F4D03F] to-[#D4AF37] bg-clip-text text-transparent">
            us
          </span>{" "}
          special
        </motion.h2>

        <motion.p
          className="section-subtitle text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover how we transform credit access and protect our ecosystem of users, merchants, employers, and underwriters.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
          {specialFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="h-full card-hover">
                <CardContent className="pt-6 flex flex-col items-center text-center">
                  {feature.illustration}
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <img
            src="phone1.png"
            alt="App screen"
            className="w-90 md:w-100 h-auto rounded-lg"
          />
          <div className="relative flex items-center">
            <div className="h-64 w-px bg-gray-300 relative">
              <span className="absolute left-1/2 transform -translate-x-1/2 top-[10%] w-3 h-3 bg-primary rounded-full"></span>
              <span className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full"></span>
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[10%] w-3 h-3 bg-primary rounded-full"></span>
            </div>
            <ul className="ml-6 max-w-md space-y-6">
              <li className="text-muted-foreground">
                <span className="font-bold text-foreground">Instant Credit Access:</span> Shop at partnered outlets with zero upfront payment.
              </li>
              <li className="text-muted-foreground">
                <span className="font-bold text-foreground">Employer-Linked Repayment:</span> Employers help automate payback via monthly deductions.
              </li>
              <li className="text-muted-foreground">
                <span className="font-bold text-foreground">Flexible for Everyone:</span> Both salaried employees and independent clients are welcome.
              </li>
              <li className="text-muted-foreground">
                <span className="font-bold text-foreground">Business Boost for Merchants:</span> Merchants grow their customer base through easy credit.
              </li>
              <li className="text-muted-foreground">
                <span className="font-bold text-foreground">Guaranteed by Underwriters:</span> Risks are covered, so no party loses out from defaults.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
