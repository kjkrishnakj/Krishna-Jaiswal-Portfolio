"use client"

import { motion } from "framer-motion"
import { Download, Eye, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1Kzs7rHB7NTf9JQn79zTyMJLmTgLRhQjd";
    link.download = "Krishna_Jaiswal_Resume.pdf"; // this name is optional
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  const handlePreview = () => {
    window.open("https://drive.google.com/file/d/1Kzs7rHB7NTf9JQn79zTyMJLmTgLRhQjd/view", "_blank");
  };
  
  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Resume</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Download my complete resume or preview it online</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="backdrop-blur-sm bg-white/10 border-white/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Resume Preview */}
                <div className="p-8 border-r border-white/20">
                  <div className="aspect-[3/4] bg-white rounded-lg shadow-2xl overflow-hidden mb-6">
                    <div className="p-6 text-gray-800">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-gray-900">Krishna Jaiswal</h3>
                        <p className="text-gray-600">Full Stack Developer</p>
                        <p className="text-sm text-gray-500">krishnajasw@gmail.com | +91 8005660169</p>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 border-b border-gray-300 pb-1">Experience</h4>
                          <div className="mt-2 space-y-2">
                            <div>
                              <p className="font-medium text-sm">Project Lead</p>
                              <p className="text-xs text-gray-600">Techplement (2024)</p>
                            </div>
                            <div>
                              <p className="font-medium text-sm">Frontend Developer</p>
                              <p className="text-xs text-gray-600">Next24 Technology and services (2024)</p>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 border-b border-gray-300 pb-1">Skills</h4>
                          <div className="mt-2">
                            <p className="text-xs text-gray-600">React, Next.js, RestAPI, Github, MERN, AWS, C++</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 border-b border-gray-300 pb-1">Education</h4>
                          <div className="mt-2">
                            <p className="font-medium text-sm">Computer Science Engineering</p>
                            <p className="text-xs text-gray-600">VIT Chennai (2022-2026)</p>
                            <p className="mt-3 font-medium text-sm">Higher School Education</p>
                            <p className="text-xs text-gray-600">St. Xavier School (2021)</p>
                            <p className="mt-3 font-medium text-sm">Intermediate Education</p>
                            <p className="text-xs text-gray-600">St. Xavier School (2019)</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Resume Actions */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="text-center mb-8">
                    <div className="inline-flex p-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mb-4">
                      <FileText className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">My Resume</h3>
                    <p className="text-gray-300">
                      Get a comprehensive overview of my professional experience, skills, and achievements.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        onClick={handlePreview}
                        className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Eye className="mr-2" size={20} />
                        Preview Resume
                      </Button>
                    </motion.div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        onClick={handleDownload}
                        variant="outline"
                        className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white py-3 text-lg font-semibold backdrop-blur-sm bg-white/10"
                      >
                        <Download className="mr-2" size={20} />
                        Download PDF
                      </Button>
                    </motion.div>
                  </div>

                  <div className="mt-8 p-4 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10">
                    <h4 className="text-white font-semibold mb-2">Quick Stats</h4>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400">Experience</p>
                        <p className="text-white font-medium">4+ Years</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Projects</p>
                        <p className="text-white font-medium">10+ Completed</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Technologies</p>
                        <p className="text-white font-medium">15+ Mastered</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Certifications</p>
                        <p className="text-white font-medium">2 Active</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
