"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-primary">Dristi Shakya</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          QA/QC Engineer ensuring top-notch software quality through meticulous testing.
        </p>
        <Button asChild>
          <a href="#skills">
            View My Skills <ArrowRight className="ml-2" />
          </a>
        </Button>
      </motion.div>
    </section>
  )
}

export default Hero