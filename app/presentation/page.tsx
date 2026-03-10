import { motion } from "framer-motion";
import { Award, Users, Target, Globe, Heart, CheckCircle } from "lucide-react";

export default function PresentationPage() {
  const stats = [
    { label: "Années d'expertise", value: 15, suffix: "+", icon: Award },
    { label: "Clients satisfaits", value: 200, suffix: "+", icon: Users },
    { label: "Projets réalisés", value: 350, suffix: "+", icon: Target },
    { label: "Pays couverts", value: 12, suffix: "+", icon: Globe },
  ];

  const expertise = [
    "Pharmaciens expérimentés",
    "Ingénieurs marketing",
    "Infographistes",
    "Médecins spécialisés",
    "Biostatisticiens",
    "Experts réglementaires",
  ];

  return (
    <main className="pt-20">
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center space-x-3 bg-secondary/10 text-secondary px-6 py-3 rounded-full mb-8 border border-secondary/20"
            >
              <Heart className="w-6 h-6" />
              <span className="font-bold text-lg">Présentation</span>
            </motion.div>

            <h1 className="text-5xl font-bold text-primary mb-4">
              PHARM'AFRIK West & Central Africa
            </h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
              Une agence de conseil et de prestations médico-marketing basée à
              Abidjan et couvrant l'Afrique subsaharienne. Le fruit d'une longue
              réflexion murie par des cadres expérimentés.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:pr-8"
            >
              <h2 className="text-3xl font-semibold text-foreground mb-6">
                Notre Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Accompagner les laboratoires pharmaceutiques dans l'atteinte de
                leurs objectifs de croissance sur le marché Africain, dans un
                contexte difficile exacerbé par la crise financière, la présence
                massive de génériques de toute nature, la contrefaçon, les
                contraintes réglementaires à l'enregistrement…etc.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nous étendons nos compétences également à l'industrie
                agro-alimentaire (produits laitiers et farines infantiles
                vendues en officine).
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-md h-80 bg-gradient-hero rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="text-center text-white p-8">
                  <Heart className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="text-2xl font-bold mb-2">
                    Expertise Médicale
                  </h4>
                  <p className="text-white/90">
                    Accompagnement personnalisé pour votre croissance en Afrique
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Notre Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">
              Notre Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertise.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Statistiques */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-5xl font-bold text-primary mb-2">
                  {stat.value}
                  {stat.suffix}
                </div>
                <p className="text-xl font-medium text-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
