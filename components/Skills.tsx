"use client"

import { motion } from 'framer-motion'
import { Badge } from "@/components/ui/badge"

const skills = [
  "Manual Testing",
  "API Testing",
  "Jira",
  "Scrum",
  "Test Case Design",
  "Bug Tracking",
  "Regression Testing",
  "User Acceptance Testing (UAT)",
  "Agile Methodologies",
  "Test Documentation"
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Badge variant="secondary" className="text-lg py-2 px-4">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills