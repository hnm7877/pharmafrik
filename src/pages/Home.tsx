import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Target, Shield, Heart, TrendingUp, Microscope, Stethoscope, Scale, Quote } from 'lucide-react';
import { AnimatedPage, FadeIn } from '../components/Layout';

export default function Home() {
  const activities = [
    {
      title: "Marketing-Vente",
      path: "/marketing-vente",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-emerald-400 to-teal-500",
      desc: "Stratégies commerciales et forces de vente pour maximiser votre croissance sur les marchés africains"
    },
    {
      title: "Opération Clinique",
      path: "/operation-clinique",
      icon: <Microscope className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-600",
      desc: "Conception et mise en œuvre d'essais cliniques adaptés aux contextes africains"
    },
    {
      title: "Management Médical",
      path: "/management-medical",
      icon: <Stethoscope className="w-8 h-8" />,
      color: "from-purple-500 to-fuchsia-600",
      desc: "Affaires médicales, documentation scientifique et formation des professionnels de santé"
    },
    {
      title: "Affaires Réglementaires",
      path: "/affaires-reglementaires",
      icon: <Scale className="w-8 h-8" />,
      color: "from-rose-400 to-red-500",
      desc: "Enregistrements, conformité réglementaire et interface avec les autorités sanitaires"
    }
  ];

  const charterValues = [
    {
      title: "Une vocation",
      desc: "Vous accompagner au quotidien dans vos défis jusqu'à la réalisation de vos objectifs.",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Une garantie",
      desc: "L'assurance du sérieux et de la qualité de notre engagement à vos côtés.",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Notre engagement",
      desc: "On s'engage à vous satisfaire au-delà même de vos exigences.",
      icon: <Heart className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: "Soro Stéphane",
      role: "DG Santé+",
      text: "J'ai été plus que satisfait de l'accompagnement fourni par Pharm'Afrik et son équipe dans le cadre du suivi de notre projet."
    },
    {
      name: "Dakoury Pierre",
      role: "DAF e-Sport",
      text: "Pharm'Afrik m'a accompagné dans toutes mes démarches dans l'obtention de mon visa pour mes soins médicaux aux USA."
    },
    {
      name: "Guei Serverine",
      role: "Directrice des ventes",
      text: "Pharm'Afrik, grâce à son coaching et son suivi de mon équipe nous a permis d'augmenter notre chiffre d'affaire et notre portefeuille client."
    },
    {
      name: "Kouakou Mélanie",
      role: "Directrice de pharmatech",
      text: "Pharm'Afrik nous a été d'une grande aide dans le processus de réalisation de nos tests clinique en plus de s'être occupé de la rédaction et de l'édition des notices de nos nouveaux produits."
    }
  ];

  return (
    <AnimatedPage>
      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 flex items-center bg-[#020617] overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/20 blur-[150px] rounded-full mix-blend-screen animate-pulse duration-1000" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-600/20 blur-[150px] rounded-full mix-blend-screen" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-xs uppercase tracking-[0.2em] text-indigo-300 font-semibold mb-6 flex items-center justify-center gap-3">
                <span className="w-10 h-[1px] bg-indigo-300"></span>
                Conseil & médico-marketing Afrique
                <span className="w-10 h-[1px] bg-indigo-300"></span>
              </div>
              <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-white mb-6">
                Accélérer la croissance des <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">laboratoires pharmaceutiques</span> en Afrique subsaharienne
              </h1>
              <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                PHARM'AFRIK accompagne les acteurs de la santé et de la nutrition sur les marchés d'Afrique de l'Ouest et Centrale : stratégie, exécution commerciale et excellence médico-marketing
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-emerald-500 to-green-500 text-slate-900 shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.5)] hover:-translate-y-1 transition-all group"
                >
                  Planifier un échange
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold border-2 border-slate-600 text-white hover:border-emerald-400 hover:text-emerald-400 hover:bg-slate-800/50 transition-all"
                >
                  Découvrir nos activités
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Basé à Abidjan
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Couverture Afrique subsaharienne
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  Équipe pluridisciplinaire
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Presentation Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn className="text-center mb-12">
              <h2 className="font-poppins font-bold text-4xl md:text-5xl text-slate-900 mb-6">
                Présentation
              </h2>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="prose prose-lg max-w-none text-center">
                <p className="text-xl text-slate-700 leading-relaxed mb-6">
                  <strong className="text-slate-900 font-semibold">PHARM'AFRIK West & Central Africa</strong> est une agence de conseil et de prestations médico-marketing basée à Abidjan et couvrant l'Afrique subsaharienne.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  C'est le fruit d'une longue réflexion mûrie par des cadres (pharmaciens, médecins, ingénieurs marketing, biostatisticiens, infographistes) ayant une longue et solide expérience de l'environnement industriel pharmaceutique.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  Notre mission est d'accompagner les laboratoires pharmaceutiques dans l'atteinte de leurs objectifs de croissance sur le marché Africain, dans un contexte difficile exacerbé par la crise financière, la présence massive de génériques de toute nature, la contrefaçon, les contraintes réglementaires à l'enregistrement... etc.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Nous étendons nos compétences également à l'<strong className="text-slate-900">industrie agro-alimentaire</strong> (produits laitiers et farines infantiles vendues en officine).
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="mt-10 text-center">
              <Link
                to="/presentation"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all"
              >
                En savoir plus
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="font-poppins font-bold text-4xl md:text-5xl text-slate-900 mb-6">
                Nos Activités
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Notre compétence est fondée sur une expertise forte et pluridimensionnelle dans l'environnement pharmaceutique Africain
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {activities.map((activity, i) => (
              <FadeIn key={i} delay={0.1 * i} className="group">
                <Link to={activity.path} className="block h-full">
                  <div className="h-full bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                    {/* Gradient accent */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-10 rounded-bl-[100px] transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activity.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {activity.icon}
                      </div>
                      <h3 className="font-poppins font-bold text-2xl text-slate-900 mb-4">
                        {activity.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {activity.desc}
                      </p>
                      <div className="inline-flex items-center text-emerald-600 font-semibold group-hover:gap-3 transition-all">
                        En savoir plus
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Charter Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTExIDBIMXYxMWgxMFYwek0xMyAwaDExdjExSDEzVjB6TTExIDEzSDF2MTFoMTBWMTN6TTEzIDEzaDExdjExSDEzVjEzIiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-[0.03]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
                Notre Charte
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Les valeurs qui guident notre engagement auprès de nos clients
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {charterValues.map((value, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white flex items-center justify-center mb-6 shadow-lg">
                    {value.icon}
                  </div>
                  <h3 className="font-poppins font-bold text-2xl mb-4">
                    {value.title}
                  </h3>
                  <p className="text-blue-100 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mt-12 text-center">
            <Link
              to="/charter"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold bg-white text-blue-900 hover:bg-emerald-400 transition-all shadow-xl"
            >
              Découvrir notre charte complète
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="font-poppins font-bold text-4xl md:text-5xl text-slate-900 mb-6">
                Témoignages Clients
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Ce que nos clients disent de notre accompagnement
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl hover:border-emerald-200 transition-all relative">
                  <Quote className="w-10 h-10 text-emerald-400 mb-4 opacity-50" />
                  <p className="text-lg text-slate-700 leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <div className="font-poppins font-bold text-slate-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5} className="mt-12 text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all"
            >
              Voir tous les témoignages
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
              Prêt à développer votre présence en Afrique ?
            </h2>
            <p className="text-lg text-slate-300 mb-10 leading-relaxed">
              Contactez-nous pour discuter de vos objectifs et découvrir comment nous pouvons vous accompagner.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-emerald-500 to-green-500 text-slate-900 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              Commencer la conversation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </AnimatedPage>
  );
}
