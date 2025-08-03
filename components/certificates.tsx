"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Award, Calendar, Eye, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    {
      id: 1,
      title: "Lib-a-thon",
      issuer: "VIT Chennai",
      date: "2025",
      image: "/images/libathon.jpg",
    },
    {
      id: 2,
      title: "Solve-a-thon",
      issuer: "VIT Chennai",
      date: "2024",
      image: "/images/solve_thon.png",
    },
    {
      id: 3,
      title: "Eco-Urban Nexus Hackathon",
      issuer: "VIT Chennai",
      date: "2024",
      image: "/images/eco_urban.png",
    },
    {
      id: 4,
      title: "Microsoft Azure-AI Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      image: "/images/azure.png",
    },
  ];

  // Close fullscreen on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <section id="certificates" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certificates & Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and commitment to continuous
            learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group backdrop-blur-sm bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    width={300}
                    height={300}
                    className="w-full h-72 object-fit transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="p-2 rounded-full backdrop-blur-sm bg-white/20">
                      <Award className="text-yellow-400" size={20} />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-blue-300 font-medium mb-2">{cert.issuer}</p>
                  <div className="flex items-center text-gray-400 text-sm mb-4">
                    <Calendar size={16} className="mr-2" />
                    <span>Issued in {cert.date}</span>
                  </div>


                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white backdrop-blur-sm bg-white/5"
                      onClick={() => setSelectedImage(cert.image)}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Certificate
                    </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center cursor-zoom-out"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Certificate Fullscreen"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
}
