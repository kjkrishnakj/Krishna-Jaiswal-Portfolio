"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "AmiKart",
      description:
        "A smartphone-focused e-commerce platform built using the MERN stack and Next.js. Features include user authentication, shopping cart, Stripe integration, admin dashboard, and secure checkout.",
      image: "/images/amikart.png",
      technologies: ["Next.js", "MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "Stripe"],
      github: "https://github.com/kjkrishnakj/ecommerce",
      live: "https://ecommerce-eta-amber.vercel.app/",
    },
    {
      id: 2,
      title: "BookHive",
      description:
        "An online digital library platform where users can discover, issue, and review books. Includes advanced search, user authentication, Face-Auth, and genre-based browsing.",
      image: "/images/bookhive.jpg",
      technologies: ["React", "Node.js", "OpenAI", "MongoDB", "JWT", "Tailwind CSS","FaceAPI"],
      github: "https://github.com/kjkrishnakj/libathon",
      live: "https://libathon.vercel.app/",
    },
    {
      id: 3,
      title: "Fintel",
      description:
        "A personal finance tracking dashboard that helps users monitor expenses, explore stock news, and visualize financial goals using clean analytics and charting.",
      image: "/images/fintel.png",
      technologies: ["Next.js", "Prophet", "Rechart.js", "Node.js", "Express","FastAPI"],
      github: "https://github.com/kjkrishnakj/fintel",
      live: "https://fintel-eight.vercel.app/dashboard",
    },
    {
      id: 4,
      title: "KnowledgeHub",
      description:
        "A collaborative learning platform for teams to manage internal documentation, tutorials, and knowledge bases. Features markdown support, version control, and user permissions.",
      image: "/images/knowledgehub.png",
      technologies: ["MongoDB","JWT", "Next.js", "Vercel", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/kjkrishnakj/KnowledgeHub",
      live: "https://knowledgehub-kj.vercel.app/",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden">
                
                {/* ✅ Updated image wrapper */}
                <div className="relative w-full aspect-video overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="backdrop-blur-sm bg-white/20 hover:bg-white/30"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="backdrop-blur-sm bg-white/20 hover:bg-white/30"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
