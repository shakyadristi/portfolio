"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "Merojob Website",
    description: "Conducted comprehensive testing for a large-scale e-commerce platform, ensuring smooth user experience and transaction processing.",
    image: "./merojobweb.png",
    tags: ["Manual Testing", "API Testing", "User Acceptance Testing"],
    caseStudyUrl: "https://merojob.com/"
  },
  {
    title: "Merojob App",
    description: "Led the QA efforts for a mobile banking application, focusing on security, performance, and usability across multiple devices.",
    image: "./merojobapp.png",
    tags: ["Mobile Testing", "Security Testing", "Performance Testing"],
    caseStudyUrl: "https://play.google.com/store/apps/details?id=com.merojob.merojobapp&hl=en"
  },
  {
    title: "Rojgari Service Website",
    description: "Implemented and executed test strategies for a complex healthcare management system, ensuring data integrity and HIPAA compliance.",
    image: "./rojgariweb.png",
    tags: ["Regression Testing", "Unit Testing", "Integration Testing"],
    caseStudyUrl: "https://rojgari.com/"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Project Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" />
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild size="sm">
                    <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Visit
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects