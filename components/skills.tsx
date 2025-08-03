"use client"

import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import {
  Code,
  Database,
  Palette,
  Smartphone,
  Globe,
  Server,
  GitBranch,
  Zap,
  Terminal,
  Package,
  Atom,
  Eye,
  LayoutDashboard,
} from "lucide-react"

export default function Skills() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const originalSkills = [
    { name: "Frontend Development", icon: Code, color: "from-blue-500 to-cyan-500" },
    { name: "Backend Development", icon: Server, color: "from-green-500 to-emerald-500" },
    { name: "Database Design", icon: Database, color: "from-indigo-500 to-blue-500" },
    { name: "UI/UX Design", icon: Palette, color: "from-red-500 to-orange-500" },
    { name: "Mobile Development", icon: Smartphone, color: "from-orange-500 to-amber-500" },
    { name: "Web Technologies", icon: Globe, color: "from-indigo-500 to-blue-500" },
    { name: "Version Control", icon: GitBranch, color: "from-red-500 to-orange-500" },
    { name: "Performance Optimization", icon: Zap, color: "from-yellow-500 to-orange-500" },
  ]

  const newSkills = [
    { name: "Python", icon: Terminal, color: "from-blue-500 to-cyan-500" },
    { name: "C++", icon: Code, color: "from-gray-500 to-slate-500" },
    { name: "Java", icon: Code, color: "from-orange-500 to-amber-500" },
    { name: "JavaScript", icon: Code, color: "from-yellow-500 to-orange-500" },
    { name: "Node.js", icon: Server, color: "from-green-500 to-emerald-500" },
    { name: "HTML & CSS", icon: Globe, color: "from-red-500 to-orange-500" },
    { name: "Docker", icon: Package, color: "from-blue-600 to-cyan-600" },
    { name: "React", icon: Atom, color: "from-blue-400 to-cyan-400" },
    { name: "OpenCV", icon: Eye, color: "from-teal-500 to-green-500" },
    { name: "Next.js", icon: Zap, color: "from-slate-400 to-gray-400" },
    { name: "System Design", icon: LayoutDashboard, color: "from-indigo-500 to-blue-500" },
  ]

  // Combine both lists of skills
  const combinedSkills = [...originalSkills, ...newSkills]

  // Duplicate skills to create a seamless loop.
  // We duplicate enough items to fill the visible area and ensure smooth transition.
  const skillsToDisplay = [...combinedSkills, ...combinedSkills, ...combinedSkills]

  useEffect(() => {
    let scrollInterval: NodeJS.Timeout | null = null
    const scrollContainer = scrollRef.current

    if (scrollContainer) {
      const startScrolling = () => {
        scrollInterval = setInterval(() => {
          if (!isHovered) {
            scrollContainer.scrollLeft += 1 // Adjust scroll speed here (1px per interval)

            // If scrolled past the first set of duplicated skills, reset to the beginning
            // This creates the illusion of an endless loop
            const singleLoopWidth = scrollContainer.scrollWidth / 3 // Assuming we duplicated 2 times
            if (scrollContainer.scrollLeft >= singleLoopWidth) {
              scrollContainer.scrollLeft = 0
            }
          }
        }, 20) // Adjust interval for smoothness (20ms = 50 frames per second)
      }

      startScrolling()

      return () => {
        if (scrollInterval) {
          clearInterval(scrollInterval)
        }
      }
    }
  }, [isHovered, skillsToDisplay.length])

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Technologies and tools I use to bring ideas to life</p>
        </motion.div>

        <div className="relative">
          <motion.div
            ref={scrollRef}
            className="flex space-x-8 overflow-x-auto pb-6 scrollbar-hide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {skillsToDisplay.map((skill, index) => (
              <motion.div
                key={index} // Use index as key since skills are duplicated for seamless loop
                className="flex-shrink-0 w-80"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.05 }} // Reduced delay for faster appearance
                viewport={{ once: true }}
              >
                <div className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex flex-col items-center">
                    {" "}
                    {/* Changed to flex-col and items-center */}
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} mb-4`}>
                      {" "}
                      {/* Added mb-4 */}
                      <skill.icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white text-center">{skill.name}</h3>{" "}
                      {/* Added text-center */}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
