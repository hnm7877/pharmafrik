"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  ArrowRight,
  Play,
  CheckCircle,
  Users,
  Award,
  Target,
  Heart,
  Star,
} from "lucide-react";

const HeroSection = () => {
  const features = [
    { icon: Users, text: "15 ans d'expertise", color: "text-blue-600" },
    { icon: Award, text: "50+ clients satisfaits", color: "text-green-600" },
    { icon: Target, text: "100+ projets réalisés", color: "text-orange-600" },
  ];

  const benefits = [
    "Accompagnement personnalisé",
    "Expertise réglementaire",
    "Réseau étendu en Afrique",
    "Solutions sur mesure",
  ];

  const stats = [
    { number: "15", label: "Années d'expérience", suffix: "+", icon: Award },
    { number: "50", label: "Clients satisfaits", suffix: "+", icon: Users },
    { number: "100", label: "Projets réalisés", suffix: "+", icon: Target },
    { number: "12", label: "Pays couverts", suffix: "+", icon: Target },
  ];

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background avec gradient */}
      <div className="absolute inset-0 gradient-hero opacity-95" />

      {/* Pattern de fond */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/30"
            >
              <Star className="w-5 h-5" />
              <span className="text-sm font-semibold">
                Leader en conseil médico-marketing
              </span>
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              Accompagnement{" "}
              <span className="text-gradient-accent">médico-marketing</span> en
              Afrique
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl"
            >
              PHARM'AFRIK West & Central Africa est une agence de conseil et de
              prestations médico-marketing basée à Abidjan et couvrant l'Afrique
              subsaharienne.
            </motion.p>

            {/* Fonctionnalités */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/30 hover:bg-white/30 transition-all duration-300"
                >
                  <feature.icon className={`w-5 h-5 ${feature.color}`} />
                  <span className="text-sm font-semibold">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Bénéfices */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-10"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3">
                <Heart className="w-8 h-8 text-accent" />
                <span>Pourquoi nous choisir ?</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="text-white/90 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Boutons d'action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center space-x-3 bg-gradient-accent hover:bg-gradient-to-r hover:from-accent hover:to-accent-light text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/25"
                >
                  <span>Demander un devis</span>
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center space-x-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg border border-white/30"
              >
                <Play className="w-6 h-6" />
                <span>Voir notre présentation</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Section visuelle */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Carte principale */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="w-24 h-24 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg"
                  >
                    <Heart className="w-12 h-12 text-white" />
                  </motion.div>

                  <h3 className="text-3xl font-bold text-white mb-6">
                    Expertise Médicale
                  </h3>

                  <p className="text-white/80 mb-8 text-lg leading-relaxed">
                    Nous accompagnons les laboratoires pharmaceutiques dans
                    l'atteinte de leurs objectifs de croissance sur le marché
                    africain.
                  </p>

                  {/* Statistiques animées */}
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                        className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/30 hover:bg-white/30 transition-all duration-300"
                      >
                        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-3xl font-bold text-white mb-2">
                          {stat.number}
                          {stat.suffix}
                        </div>
                        <div className="text-sm text-white/80 font-medium">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/50 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
