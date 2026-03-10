import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Shield,
  Heart,
  TrendingUp,
  Microscope,
  Stethoscope,
  Scale,
  Quote,
  CheckCircle2,
} from "lucide-react";
import { AnimatedPage, FadeIn } from "../components/Layout";
import { Carousel } from "../components/Carousel";

function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      // Easing function for smoother animation
      const easeOutQuart = (x: number) => 1 - Math.pow(1 - x, 4);

      setCount(Math.floor(easeOutQuart(percentage) * end));

      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <>{count}</>;
}

export default function Home() {
  const activities = [
    {
      title: "Marketing-Vente",
      path: "/marketing-vente",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-[var(--color-secondary)] to-emerald-600",
      desc: "Stratégies commerciales et forces de vente pour maximiser votre croissance sur les marchés africains",
    },
    {
      title: "Opération Clinique",
      path: "/operation-clinique",
      icon: <Microscope className="w-8 h-8" />,
      color: "from-[var(--color-primary)] to-blue-800",
      desc: "Conception et mise en œuvre d'essais cliniques adaptés aux contextes africains",
    },
    {
      title: "Management Médical",
      path: "/management-medical",
      icon: <Stethoscope className="w-8 h-8" />,
      color: "from-[var(--color-accent)] to-orange-600",
      desc: "Affaires médicales, documentation scientifique et formation des professionnels de santé",
    },
    {
      title: "Affaires Réglementaires",
      path: "/affaires-reglementaires",
      icon: <Scale className="w-8 h-8" />,
      color: "from-[var(--color-highlight)] to-yellow-600",
      desc: "Enregistrements, conformité réglementaire et interface avec les autorités sanitaires",
    },
  ];

  const charterValues = [
    {
      title: "Une vocation",
      desc: "Vous accompagner au quotidien dans vos défis jusqu'à la réalisation de vos objectifs.",
      icon: <Target className="w-8 h-8" />,
    },
    {
      title: "Une garantie",
      desc: "L'assurance du sérieux et de la qualité de notre engagement à vos côtés.",
      icon: <Shield className="w-8 h-8" />,
    },
    {
      title: "Notre engagement",
      desc: "On s'engage à vous satisfaire au-delà même de vos exigences.",
      icon: <Heart className="w-8 h-8" />,
    },
  ];

  const testimonials = [
    {
      name: "Soro Stéphane",
      role: "DG Santé+",
      text: "J'ai été plus que satisfait de l'accompagnement fourni par Pharm'Afrik et son équipe dans le cadre du suivi de notre projet.",
    },
    {
      name: "Dakoury Pierre",
      role: "DAF e-Sport",
      text: "Pharm'Afrik m'a accompagné dans toutes mes démarches dans l'obtention de mon visa pour mes soins médicaux aux USA.",
    },
    {
      name: "Guei Serverine",
      role: "Directrice des ventes",
      text: "Pharm'Afrik, grâce à son coaching et son suivi de mon équipe nous a permis d'augmenter notre chiffre d'affaire et notre portefeuille client.",
    },
    {
      name: "Kouakou Mélanie",
      role: "Directrice de pharmatech",
      text: "Pharm'Afrik nous a été d'une grande aide dans le processus de réalisation de nos tests clinique en plus de s'être occupé de la rédaction et de l'édition des notices de nos nouveaux produits.",
    },
  ];

  return (
    <AnimatedPage>
      <Carousel />

      {/* Introduction Section */}
      <section className="py-20 bg-[#020617] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-secondary)] to-transparent opacity-30" />

        <div className="container mx-auto px-6 relative z-10">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <span className="text-[var(--color-accent)] font-semibold tracking-wider uppercase text-sm mb-4 block">
                Notre Mission
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Accélérer la croissance des{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-highlight)]">
                  laboratoires pharmaceutiques
                </span>{" "}
                en Afrique
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                PHARM’AFRIK West & Central Africa est une agence de conseil et
                de prestations médico-marketing basée à Abidjan. Notre mission
                est d’accompagner les laboratoires pharmaceutiques dans
                l’atteinte de leurs objectifs de croissance sur le marché
                Africain.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary)]/80 text-white shadow-[0_10px_30px_rgba(34,197,94,0.3)] hover:shadow-[0_15px_40px_rgba(34,197,94,0.5)] hover:-translate-y-1 transition-all group"
                >
                  Planifier un échange
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold border-2 border-slate-600 text-white hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] hover:bg-slate-800/50 transition-all"
                >
                  Découvrir nos activités
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Presentation Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[var(--color-secondary)]/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image/Visual Side */}
            <FadeIn className="w-full lg:w-1/2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-secondary)] to-[var(--color-primary)] rounded-[2rem] rotate-3 opacity-20 transform scale-105" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100">
                  <img
                    src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop"
                    alt="Médecins en consultation"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)]/80 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <div className="font-bold text-2xl mb-2">
                        <Counter end={15} />+ Ans d'Expérience
                      </div>
                      <div className="text-slate-200">
                        Une expertise reconnue en Afrique de l'Ouest et Centrale
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce duration-[3000ms]">
                  <div className="w-12 h-12 bg-[var(--color-highlight)]/10 rounded-full flex items-center justify-center text-[var(--color-highlight)]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Expertise</div>
                    <div className="text-xs text-slate-500">
                      Pluridimensionnelle
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Content Side */}
            <div className="w-full lg:w-1/2">
              <FadeIn delay={0.2}>
                <span className="text-[var(--color-secondary)] font-bold tracking-wider uppercase text-sm mb-4 block">
                  Qui sommes-nous
                </span>
                <h2 className="font-poppins font-bold text-4xl md:text-5xl text-slate-900 mb-8 leading-tight">
                  Votre partenaire stratégique en{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)]">
                    Afrique subsaharienne
                  </span>
                </h2>

                <div className="prose prose-lg text-slate-600 mb-8">
                  <p className="mb-6">
                    <strong className="text-slate-900 font-semibold">
                      PHARM'AFRIK West & Central Africa
                    </strong>{" "}
                    est bien plus qu'une agence : c'est le fruit d'une longue
                    réflexion mûrie par des cadres experts (pharmaciens,
                    médecins, ingénieurs marketing) passionnés par
                    l'environnement pharmaceutique africain.
                  </p>
                  <p>
                    Notre mission est claire : accompagner les laboratoires
                    pharmaceutiques et l'industrie agro-alimentaire dans
                    l'atteinte de leurs objectifs de croissance, en naviguant
                    avec agilité dans un contexte complexe (réglementation,
                    concurrence, spécificités locales).
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/presentation"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)]/90 shadow-lg shadow-blue-900/20 transition-all hover:-translate-y-1"
                  >
                    En savoir plus
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold border border-slate-200 text-slate-700 hover:border-[var(--color-secondary)] hover:text-[var(--color-secondary)] hover:bg-slate-50 transition-all"
                  >
                    Nous contacter
                  </Link>
                </div>
              </FadeIn>
            </div>
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
                Notre compétence est fondée sur une expertise forte et
                pluridimensionnelle dans l'environnement pharmaceutique Africain
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {activities.map((activity, i) => (
              <FadeIn key={i} delay={0.1 * i} className="group">
                <Link to={activity.path} className="block h-full">
                  <div className="h-full bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                    {/* Gradient accent */}
                    <div
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-10 rounded-bl-[100px] transition-opacity duration-500`}
                    />

                    <div className="relative z-10">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activity.color} text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {activity.icon}
                      </div>
                      <h3 className="font-poppins font-bold text-2xl text-slate-900 mb-4">
                        {activity.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {activity.desc}
                      </p>
                      <div className="inline-flex items-center text-[var(--color-secondary)] font-semibold group-hover:gap-3 transition-all">
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
      <section className="py-24 bg-gradient-to-br from-[var(--color-primary)] via-[#172554] to-[#0f172a] text-white relative overflow-hidden">
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
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-secondary)] to-emerald-600 text-white flex items-center justify-center mb-6 shadow-lg">
                    {value.icon}
                  </div>
                  <h3 className="font-poppins font-bold text-2xl mb-4">
                    {value.title}
                  </h3>
                  <p className="text-blue-100 leading-relaxed">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4} className="mt-12 text-center">
            <Link
              to="/charter"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold bg-white text-[var(--color-primary)] hover:bg-[var(--color-secondary)] hover:text-white transition-all shadow-xl"
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
              Contactez-nous pour discuter de vos objectifs et découvrir comment
              nous pouvons vous accompagner.
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
