import { Microscope, FileCheck, ClipboardCheck, Users2, Shield, Beaker } from 'lucide-react';
import { AnimatedPage, FadeIn } from '../components/Layout';

export default function OperationClinique() {
  return (
    <AnimatedPage>
      <section className="pt-40 pb-32 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mb-20">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-semibold mb-6">
                <Microscope className="w-4 h-4" />
                Nos Activités
              </div>
              <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl text-slate-900 mb-8 leading-tight">
                Opération Clinique
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-12">
                Nous accompagnons les laboratoires dans la mise en place et la conduite d'études cliniques locales conformes aux standards internationaux et aux exigences réglementaires africaines, garantissant la qualité des données et la sécurité des patients.
              </p>
            </FadeIn>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              {
                icon: <Beaker className="w-8 h-8" />,
                title: "Essais cliniques locaux",
                desc: "Conception et mise en œuvre d'études cliniques adaptées aux contextes africains : phases II, III et IV, études observationnelles, registres de patients.",
                color: "from-blue-500 to-indigo-600"
              },
              {
                icon: <FileCheck className="w-8 h-8" />,
                title: "Développement de protocoles",
                desc: "Rédaction et adaptation de protocoles d'études, soumission aux comités d'éthique locaux, obtention des autorisations réglementaires.",
                color: "from-emerald-400 to-teal-500"
              },
              {
                icon: <Users2 className="w-8 h-8" />,
                title: "Recrutement & formation",
                desc: "Identification et qualification des centres investigateurs, formation des équipes de recherche, coordination multi-sites.",
                color: "from-purple-500 to-fuchsia-600"
              },
              {
                icon: <ClipboardCheck className="w-8 h-8" />,
                title: "Monitoring & qualité",
                desc: "Suivi des inclusions, monitoring sur site et à distance, assurance qualité, gestion des données et pharmacovigilance.",
                color: "from-orange-400 to-amber-500"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Conformité réglementaire",
                desc: "Respect des Bonnes Pratiques Cliniques (ICH-GCP), conformité aux réglementations locales, audits et inspections.",
                color: "from-rose-400 to-red-500"
              },
              {
                icon: <Microscope className="w-8 h-8" />,
                title: "Études post-AMM",
                desc: "Études de pharmacovigilance active, PASS/PAES, études d'efficacité en conditions réelles, registres de suivi.",
                color: "from-sky-400 to-blue-500"
              }
            ].map((service, i) => (
              <FadeIn key={i} delay={0.1 * i} className="group">
                <article className="h-full bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                  {/* Gradient accent */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-bl-[100px] transition-opacity duration-500`} />
                  
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${service.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="font-poppins font-bold text-2xl text-slate-900 mb-4 relative z-10">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed relative z-10">
                    {service.desc}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>

          {/* Expertise Banner */}
          <FadeIn>
            <div className="bg-blue-900 text-white rounded-3xl p-10 md:p-14 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTExIDBIMXYxMWgxMFYwek0xMyAwaDExdjExSDEzVjB6TTExIDEzSDF2MTFoMTBWMTN6TTEzIDEzaDExdjExSDEzVjEzIiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-[0.03]" />
              
              <div className="relative z-10 max-w-3xl">
                <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
                  Une expertise reconnue en recherche clinique africaine
                </h2>
                <p className="text-lg text-blue-100 leading-relaxed mb-8">
                  Notre équipe de biostatisticiens, pharmaciens et médecins possède une expérience approfondie de la conduite d'études cliniques en Afrique subsaharienne, dans le respect des standards internationaux et des spécificités locales.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold bg-white text-blue-900 hover:bg-emerald-400 hover:text-white transition-all shadow-xl"
                >
                  Discuter de votre projet d'étude
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </AnimatedPage>
  );
}
