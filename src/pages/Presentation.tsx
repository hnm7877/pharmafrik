import { Building2, Users, Target, Globe, Award, TrendingUp } from 'lucide-react';
import { AnimatedPage, FadeIn } from '../components/Layout';

export default function Presentation() {
  return (
    <AnimatedPage>
      {/* Hero Section - Dark theme like Charter */}
      <section className="pt-40 pb-20 bg-[#020617] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-900/20 blur-[120px] rounded-full mix-blend-screen -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-900/20 blur-[150px] rounded-full mix-blend-screen translate-y-1/2 -translate-x-1/3" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <FadeIn>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-4">
                Qui sommes-nous
              </div>
              <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight">
                Présentation
              </h1>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-slate-300 leading-relaxed mb-6">
                  <strong className="text-white font-semibold">PHARM'AFRIK West & Central Africa</strong> est une agence de conseil et de prestations médico-marketing basée à Abidjan et couvrant l'Afrique subsaharienne.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed mb-6">
                  C'est le fruit d'une longue réflexion mûrie par des cadres (pharmaciens, médecins, ingénieurs marketing, biostatisticiens, infographistes) ayant une longue et solide expérience de l'environnement industriel pharmaceutique.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission Section - Dark card like Charter */}
      <section className="py-24 bg-[#0b1120] text-slate-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTExIDBIMXYxMWgxMFYwek0xMyAwaDExdjExSDEzVjB6TTExIDEzSDF2MTFoMTBWMTN6TTEzIDEzaDExdjExSDEzVjEzIiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-[0.02]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn className="max-w-5xl mx-auto">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-[#0f172a] border border-slate-800 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Target className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6">
                  Notre Mission
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Notre mission est d'accompagner les laboratoires pharmaceutiques dans l'atteinte de leurs objectifs de croissance sur le marché Africain, dans un contexte difficile exacerbé par la crise financière, la présence massive de génériques de toute nature, la contrefaçon, les contraintes réglementaires à l'enregistrement... etc.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team & Expertise - Dark background */}
      <section className="py-24 bg-[#020617] text-slate-300">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <FadeIn className="text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-4">
                Notre équipe
              </div>
              <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-6">
                Une équipe pluridisciplinaire
              </h2>
              <p className="text-xl text-slate-400 leading-relaxed">
                Notre force réside dans la diversité et l'expertise de nos équipes
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Pharmaciens",
                desc: "Expertise pharmaceutique et connaissance approfondie des produits de santé",
                color: "text-blue-400"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Médecins",
                desc: "Compréhension des pratiques médicales et des besoins des professionnels de santé",
                color: "text-emerald-400"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Ingénieurs Marketing",
                desc: "Stratégies commerciales et marketing adaptées aux marchés africains",
                color: "text-indigo-400"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Biostatisticiens",
                desc: "Analyse de données et méthodologies statistiques pour les études cliniques",
                color: "text-amber-400"
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "Infographistes",
                desc: "Création de supports visuels et documents professionnels de qualité",
                color: "text-rose-400"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Expérience Industrielle",
                desc: "Expertise solide de l'environnement pharmaceutique industriel",
                color: "text-sky-400"
              }
            ].map((member, i) => (
              <FadeIn key={i} delay={0.1 * i} className="group">
                <div className="h-full relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  <div className="h-full bg-[#0b1120] border border-slate-800 rounded-3xl p-8 shadow-2xl relative z-10 overflow-hidden group-hover:border-slate-700 transition-colors duration-500">
                    {/* Glowing orb behind icon */}
                    <div className="absolute top-8 left-8 w-20 h-20 bg-emerald-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="relative z-20">
                      <div className="w-14 h-14 rounded-xl bg-[#0f172a] border border-slate-800 flex items-center justify-center mb-6 shadow-lg">
                        <span className={member.color}>
                          {member.icon}
                        </span>
                      </div>
                      <h3 className="font-poppins font-bold text-xl text-white mb-3">
                        {member.title}
                      </h3>
                      <p className="text-slate-400 leading-relaxed">
                        {member.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Scope Section - Dark theme */}
      <section className="py-24 bg-[#0b1120] text-slate-300">
        <div className="container mx-auto px-6">
          <FadeIn className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-[#0f172a] border border-slate-800 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Globe className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6">
                  Nos domaines d'intervention
                </h2>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p className="text-slate-400">
                    Notre expertise s'étend au-delà du secteur pharmaceutique traditionnel.
                  </p>
                  <p className="text-white font-medium text-xl">
                    Nous accompagnons également l'<strong>industrie agro-alimentaire</strong>, notamment pour les produits laitiers et farines infantiles vendues en officine.
                  </p>
                  <p className="text-slate-400">
                    Cette double compétence nous permet d'apporter une valeur ajoutée unique à nos clients, en combinant la rigueur pharmaceutique et la compréhension des enjeux nutritionnels.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section - Dark theme */}
      <section className="py-24 bg-[#020617] text-white">
        <div className="container mx-auto px-6">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
              Prêt à développer votre présence en Afrique ?
            </h2>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Découvrez comment notre expertise pluridisciplinaire peut vous aider à atteindre vos objectifs de croissance sur les marchés africains.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-emerald-500 to-green-500 text-slate-900 hover:shadow-[0_15px_40px_rgba(16,185,129,0.4)] hover:-translate-y-1 transition-all shadow-xl"
              >
                Découvrir nos activités
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold border-2 border-slate-700 text-slate-300 hover:border-emerald-400 hover:text-emerald-400 transition-all"
              >
                Nous contacter
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </AnimatedPage>
  );
}
