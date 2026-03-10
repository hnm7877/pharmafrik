"use client";

import { motion } from "framer-motion";
import {
  ShoppingCart,
  Users,
  Stethoscope,
  FileText,
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Zap,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: "marketing-vente",
      title: "Marketing-Vente",
      subtitle: "Gestion des projets de santé",
      description:
        "Nous vous accompagnons dans vos programmes médico-marketing, campagnes de prévention et de dépistage pour maximiser votre impact sur le marché africain.",
      icon: ShoppingCart,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      features: [
        "Stratégies de marketing ciblées",
        "Campagnes de prévention",
        "Programmes de dépistage",
        "Formation des équipes commerciales",
      ],
      stats: { value: "95%", label: "Taux de satisfaction client" },
    },
    {
      id: "management-medical",
      title: "Management Médical",
      subtitle: "Formation médico-marketing",
      description:
        "Formation et accompagnement de vos équipes médicales pour optimiser leurs performances et leur impact sur le terrain.",
      icon: Users,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      features: [
        "Formation des équipes médicales",
        "Coaching personnalisé",
        "Développement des compétences",
        "Suivi des performances",
      ],
      stats: { value: "80%", label: "Amélioration des performances" },
    },
    {
      id: "operation-clinique",
      title: "Opération Clinique",
      subtitle: "Études épidémiologiques, observationnelles",
      description:
        "Conception et réalisation d'études cliniques adaptées au contexte africain pour valider l'efficacité de vos produits.",
      icon: Stethoscope,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      features: [
        "Études épidémiologiques",
        "Recherche observationnelle",
        "Essais cliniques",
        "Analyse des données",
      ],
      stats: { value: "15+", label: "Études réalisées" },
    },
    {
      id: "affaires-reglementaires",
      title: "Affaires Réglementaires",
      subtitle: "Expertise réglementaire",
      description:
        "Accompagnement dans les démarches réglementaires pour l'enregistrement et la commercialisation de vos produits pharmaceutiques.",
      icon: FileText,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      features: [
        "Enregistrement des produits",
        "Conformité réglementaire",
        "Dossiers d'AMM",
        "Veille réglementaire",
      ],
      stats: { value: "100%", label: "Taux de réussite" },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-3 bg-primary/10 text-primary px-6 py-3 rounded-full mb-8 border border-primary/20"
          >
            <Award className="w-6 h-6" />
            <span className="font-bold text-lg">Nos Activités</span>
            <Zap className="w-5 h-5" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8">
            Services <span className="text-gradient">d'excellence</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Notre compétence est fondée sur une expertise forte et
            pluridimensionnelle dans l'environnement pharmaceutique Africain.
          </p>
        </motion.div>

        {/* Grille des services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div
                className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 ${service.borderColor} hover:border-primary/30 h-full flex flex-col relative overflow-hidden`}
              >
                {/* Effet de brillance au survol */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Icône avec gradient */}
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  whileHover={{ rotate: 5 }}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Contenu */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-primary font-semibold mb-6 text-lg">
                    {service.subtitle}
                  </p>
                  <p className="text-muted-foreground mb-8 leading-relaxed text-base">
                    {service.description}
                  </p>

                  {/* Fonctionnalités */}
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground font-medium">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Statistique */}
                  <div
                    className={`${service.bgColor} rounded-2xl p-6 mb-8 border ${service.borderColor}`}
                  >
                    <div className="text-3xl font-bold text-primary mb-2">
                      {service.stats.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-semibold">
                      {service.stats.label}
                    </div>
                  </div>
                </div>

                {/* Bouton d'action */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${service.color} text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-3 group-hover:shadow-lg transition-all duration-300`}
                >
                  <span>En savoir plus</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section d'appel à l'action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-primary rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            {/* Éléments décoratifs */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24" />

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-8 relative z-10"
            >
              <Award className="w-12 h-12" />
            </motion.div>

            <h3 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
              Prêt à transformer votre approche ?
            </h3>

            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto relative z-10">
              Découvrez comment nos services peuvent vous aider à atteindre vos
              objectifs sur le marché africain.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary px-10 py-5 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span>Demander un devis gratuit</span>
                <ArrowRight className="w-6 h-6" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white hover:text-primary transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <span>Télécharger notre brochure</span>
                <FileText className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
