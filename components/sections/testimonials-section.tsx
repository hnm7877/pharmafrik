"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "J'ai été plus que satisfait de l'accompagnement fourni par Pharm'Afrik et son équipe dans le cadre du suivi de notre projet.",
      name: "Soro Stéphane",
      title: "DG Santé+",
      rating: 5,
    },
    {
      quote:
        "Pharm'Afrik m'a accompagné dans toutes mes démarches dans l'obtention de mon visa pour mes soins médicaux aux USA.",
      name: "Dakoury Pierre",
      title: "DAF e-Sport",
      rating: 5,
    },
    {
      quote:
        "Pharm'Afrik, grâce à son coaching et son suivi de mon équipe nous a permis d'augmenter notre chiffre d'affaire et notre portefeuille client.",
      name: "Guei Serverine",
      title: "Directrice des ventes",
      rating: 5,
    },
    {
      quote:
        "Pharm'Afrik nous a été d'une grande aide dans le processus de réalisation de nos tests clinique en plus de s'être occupé de la rédaction et de l'édition des notices de nos nouveaux produits.",
      name: "Kouakou Mélanie",
      title: "Directrice de pharmatech",
      rating: 5,
    },
  ];

  return (
    <section
      id="references"
      className="py-16 lg:py-24 bg-gradient-to-r from-primary to-primary-dark text-white"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Nos Références</h2>
          <p className="text-lg opacity-90 mb-12 max-w-3xl mx-auto">
            Découvrez ce que nos clients disent de notre accompagnement et de
            notre expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/20"
            >
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-accent mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-accent fill-current"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-lg italic text-white/90 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="border-t border-white/20 pt-4">
                <p className="font-semibold text-white text-lg">
                  {testimonial.name}
                </p>
                <p className="text-sm text-white/70">{testimonial.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section d'appel à l'action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <h3 className="text-3xl font-bold mb-6">
              Rejoignez nos clients satisfaits
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Découvrez comment nous pouvons vous accompagner dans votre
              croissance sur le marché africain.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-accent hover:bg-gradient-to-r hover:from-accent hover:to-accent-light text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/25"
            >
              Demander un devis gratuit
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
