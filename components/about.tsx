"use client"

import { motion } from "framer-motion"
import { Code, Coffee, Lightbulb, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code is my passion",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on delivering high-quality products that exceed expectations",
    },
    {
      icon: Coffee,
      title: "Collaboration",
      description: "Strong believer in teamwork and effective communication",
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Get to know the person behind the code</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
              <Card className="relative backdrop-blur-sm bg-white/10 border-white/20 overflow-hidden">
                <CardContent className="p-8">
                  <div className="relative">
                    <Image
                      src="/images/profile.jpg"
                      alt="Krishna Jaiswal - Full Stack Developer"
                      width={400}
                      height={500}
                      className="w-full h-auto rounded-xl shadow-2xl"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  Krishna Jaiswal
                </span>
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate Full Stack Developer with over 4 years of experience creating digital solutions that
                make a difference. My journey in technology started with curiosity and has evolved into a career
                dedicated to building innovative, user-centered applications.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing knowledge with the developer community. I believe in continuous learning and staying ahead of
                the curve in this ever-evolving field.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {highlights.map((highlight, index) => (
    <motion.div
      key={highlight.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="h-full flex flex-col justify-between backdrop-blur-sm bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group">
        <CardContent className="p-4 flex flex-col flex-grow">
          <div className="flex items-start space-x-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 group-hover:scale-110 transition-transform duration-300">
              <highlight.icon className="text-white" size={20} />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">{highlight.title}</h4>
              <p className="text-gray-400 text-sm">{highlight.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  ))}
</div>


            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {[
                { number: "10+", label: "Projects" },
                { number: "4+", label: "Years Experience" },
                { number: "15+", label: "Technologies" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
