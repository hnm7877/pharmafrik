import { TrendingUp, Users, Target, BarChart3, Briefcase, Award } from 'lucide-react';
import { AnimatedPage, FadeIn } from '../components/Layout';

export default function MarketingVente() {
  return (
    <AnimatedPage>
      <section className="pt-40 pb-32 bg-gradient-to-b from-[#020617] to-[#0b1120] min-h-screen relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full mix-blend-screen" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Hero Section */}
          <div className="max-w-4xl mb-20">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold mb-6">
                <TrendingUp className="w-4 h-4" />
                Nos Activités
              </div>
              <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight">
                Marketing & Vente
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-12">
                Nous accompagnons les laboratoires pharmaceutiques et les acteurs de la nutrition dans le développement et l'exécution de leurs stratégies commerciales en Afrique subsaharienne, de la définition du positionnement à l'animation des équipes de terrain.
              </p>
            </FadeIn>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <Target className="w-8 h-8" />,
                title: "Stratégie de croissance",
                desc: "Analyse des potentiels de marché, positionnement de portefeuille, plans de développement pays par pays, prise en compte de la concurrence générique et des spécificités locales.",
                color: "from-blue-500 to-indigo-600"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Forces de vente",
                desc: "Structuration et accompagnement des équipes commerciales : ciblage médecins et pharmacies, outils de visite, tableaux de bord, coaching terrain et suivi des résultats.",
                color: "from-emerald-400 to-teal-500"
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Performance commerciale",
                desc: "Mise en place de KPIs adaptés, analyse des performances, optimisation des cycles de vente et identification des leviers de croissance.",
                color: "from-orange-400 to-amber-500"
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Études de marché",
                desc: "Études qualitatives et quantitatives auprès des professionnels de santé, analyse des pratiques de prescription et des parcours patients.",
                color: "from-purple-500 to-fuchsia-600"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Lancement de produits",
                desc: "Accompagnement complet lors des lancements : stratégie de mise sur le marché, formation des équipes, outils promotionnels et suivi post-lancement.",
                color: "from-rose-400 to-red-500"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Intelligence commerciale",
                desc: "Veille concurrentielle, analyse des tendances du marché, suivi des parts de marché et recommandations stratégiques.",
                color: "from-sky-400 to-blue-500"
              }
            ].map((service, i) => (
              <FadeIn key={i} delay={0.1 * i} className="group">
                <article className="h-full bg-[#0f172a]/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-10 hover:border-slate-700 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                  {/* Gradient background on hover */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 rounded-bl-[100px] transition-opacity duration-500`} />
                  
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="font-poppins font-bold text-2xl text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed">
                    {service.desc}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>

          {/* CTA Section */}
          <FadeIn className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-900/30 to-blue-900/30 border border-slate-800/60 rounded-3xl p-10 md:p-14 text-center">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6">
                Développez vos parts de marché en Afrique
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
                Notre expertise terrain et notre connaissance approfondie des marchés pharmaceutiques africains vous permettent d'optimiser vos investissements commerciaux et d'accélérer votre croissance.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-emerald-500 to-green-500 text-slate-900 shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.5)] hover:-translate-y-1 transition-all"
              >
                Discuter de votre stratégie
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </AnimatedPage>
  );
}
