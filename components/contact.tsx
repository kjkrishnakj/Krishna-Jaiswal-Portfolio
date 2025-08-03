"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Instagram } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
    alert("Message sent successfully!")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "krishnajaswl@gmail.com",
      onClick: () => window.open("https://mail.google.com/mail/?view=cm&to=krishnajaswl@gmail.com", "_blank"),
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8005660169",
      onClick: () => window.open("tel:+918005660169", "_blank"),
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tamil Nadu, IN",
      onClick: () => window.open("https://maps.google.com/?q=Tamil+Nadu,IN", "_blank"),
    },
  ]

  const socialLinks = [
    { icon: Github, href: "https://github.com/kjkrishnakj", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/krishna-jaiswal-383122248/", label: "LinkedIn" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/kj__krishna__kj/profilecard/?igsh=MXV3NHp6ejB4Mmk4cQ==",
      label: "Instagram",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12 justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 max-w-lg mx-auto"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.button
                    key={info.label}
                    onClick={info.onClick}
                    className="w-full text-left flex items-center p-4 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 mr-4">
                      <info.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.button
                    key={social.label}
                    onClick={() => window.open(social.href, "_blank")}
                    className="p-4 rounded-full backdrop-blur-sm bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <social.icon size={24} />
                  </motion.button>
                ))}
              </div>
            </div>

            <Card className="backdrop-blur-sm bg-white/10 border-white/20">
              <CardContent className="p-6">
                <h4 className="text-white font-semibold mb-4">Let's work together!</h4>
                <p className="text-gray-300 text-sm mb-4">
                  I'm always interested in new opportunities and exciting projects. Whether you have a specific project
                  in mind or just want to connect, feel free to reach out.
                </p>
                <div className="flex items-center text-blue-300 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                  Available for freelance work
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
