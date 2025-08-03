"use client"

import { motion } from "framer-motion"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I'm{" "}
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            >
              Krishna Jaiswal
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Full Stack Developer & UI/UX Designer passionate about creating beautiful, functional digital experiences
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              onClick={scrollToProjects}
              className="w-[200px] h-[48px] bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View My Work
            </Button>

            <a
              href="https://drive.google.com/uc?export=download&id=1Kzs7rHB7NTf9JQn79zTyMJLmTgLRhQjd"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[200px] h-[48px] inline-flex items-center justify-center rounded-full text-lg font-semibold border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Download Resume
            </a>
          </motion.div>



          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >

            {[
              { icon: Github, href: "https://github.com/kjkrishnakj", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/krishna-jaiswal-383122248/", label: "LinkedIn" },
              {
                icon: Mail,
                href: () => window.open("https://mail.google.com/mail/?view=cm&to=krishnajaswl@gmail.com", "_blank"),
                label: "Email",
              },
            ].map((social, index) => (
              <motion.button
                key={social.label}
                onClick={() =>
                  typeof social.href === "function"
                    ? social.href()
                    : window.open(social.href, "_blank")
                }
                className="p-3 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <social.icon size={24} />
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className="text-white/60" size={32} />
      </motion.div>
    </section>
  )
}
