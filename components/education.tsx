"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Education() {
  const education = [
    {
      id: 1,
      degree: "Computer Science Engineering",
      school: "Vellore Institue of Technology, Chennai",
      location: "Tamil Nadu, India",
      period: "2022 - 2026",
      gpa: "8.85", // This will remain GPA
      achievements: [
        "Graduated Summa Cum Laude",
        "Research Assistant in AI Lab",
        "Published 2 papers in ML conferences",
      ],
      courses: ["Amazon Web Services", "Operating System", "OOPS", "Computer Networks","DBMS"],
    },
    {
      id: 2,
      degree: "Higher School Education",
      school: "St. Xavier School",
      location: "Rajasthan, India",
      period: "2019 - 2021",
      percentage: "89%", // Changed to percentage
      achievements: [
        "Dean's List for 6 semesters",
        "President of Computer Science Club",
        "Winner of Annual Hackathon 2019",
      ],
      courses: ["Database Systems", "Web Development","PCM"],
    },
    {
      id: 3,
      degree: "Intermediate Education",
      school: "St. Xavier School",
      location: "Rajasthan, India",
      period: "2019",
      percentage: "77%", // Changed to percentage
      achievements: ["Valedictorian", "National Merit Scholar", "AP Scholar with Distinction"],
      courses: ["Social Science","Science","Computer Science"],
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Education</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My academic journey and the foundation of my technical expertise
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full border-4 border-slate-900 hidden md:block" />

                <Card className="md:ml-16 backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                        <div className="flex items-center text-gray-300 font-medium mb-2">
                          <GraduationCap size={18} className="mr-2" />
                          {edu.school}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm mb-2">
                          <MapPin size={16} className="mr-2" />
                          {edu.location}
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar size={16} className="mr-2" />
                          {edu.period}
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 md:text-right">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30">
                          <Award size={16} className="mr-2 text-green-400" />
                          <span className="text-green-300 font-medium">
                            {edu.gpa ? `GPA: ${edu.gpa}` : `Percentage: ${edu.percentage}`}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-1 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3">Relevant Coursework</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course) => (
                            <span
                              key={course}
                              className="px-2 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded border border-blue-500/30"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
