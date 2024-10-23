"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center gap-15"
        >
          <div className="md:w-1/2">
            <Image
              src="./dristi.jpg"
              alt="Dristi Shakya"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="mb-4">
              I'm Dristi Shakya, a dedicated QA/QC Engineer with a passion for ensuring software quality and reliability. 
              With expertise in manual testing, API testing, and Agile methodologies, I play a crucial role in delivering 
              high-quality software products.
            </p>
            <p className="mb-4">
              My experience with Jira and Scrum allows me to effectively collaborate with development teams, track issues, 
              and contribute to smooth project management. I'm committed to identifying and resolving potential issues 
              before they reach end-users, ensuring a seamless user experience.
            </p>
            <p>
              Let's work together to elevate the quality of your software products!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About