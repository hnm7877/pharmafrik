import { FileCheck2, Scale, Building2, CheckCircle2, Globe, BookCheck } from 'lucide-react';
import { AnimatedPage, FadeIn } from '../components/Layout';

export default function AffairesReglementaires() {
  return (
    <AnimatedPage>
      <section className="pt-40 pb-32 bg-slate-50 min-h-screen">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mb-20">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-sm font-semibold mb-6">
                <Scale className="w-4 h-4" />
                Nos Activités
              </div>
              <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl text-slate-900 mb-8 leading-tight">
                Affaires Réglementaires
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-12">
                Nous accompagnons les laboratoires dans la préparation, le dépôt et le suivi de leurs dossiers d'enregistrement auprès des autorités sanitaires africaines, en garantissant la conformité aux exigences réglementaires locales et internationales.
              </p>
            </FadeIn>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              {
                icon: <FileCheck2 className="w-8 h-8" />,
                title: "Dossiers d'enregistrement",
                desc: "Préparation complète des dossiers CTD/eCTD, compilation des données pharmaceutiques, précliniques et cliniques selon les formats requis par chaque pays.",
                color: "from-rose-400 to-red-500"
              },
              {
                icon: <Building2 className="w-8 h-8" />,
                title: "Interface autorités",
                desc: "Relations avec les autorités réglementaires (DPML, DPMED, etc.), suivi des dossiers, réponse aux questions des experts, gestion des inspections.",
                color: "from-blue-500 to-indigo-600"
              },
              {
                icon: <BookCheck className="w-8 h-8" />,
                title: "Adaptation documentaire",
                desc: "Adaptation des notices, étiquetages et conditionnements aux exigences locales, traduction et mise en conformité des documents.",
                color: "from-emerald-400 to-teal-500"
              },
              {
                icon: <CheckCircle2 className="w-8 h-8" />,
                title: "Renouvellements & variations",
                desc: "Gestion des renouvellements d'AMM, dépôt et suivi des variations (changements de formule, de site de fabrication, d'indication...).",
                color: "from-purple-500 to-fuchsia-600"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Veille réglementaire",
                desc: "Suivi des évolutions réglementaires dans les pays d'Afrique subsaharienne, anticipation des changements, adaptation des stratégies.",
                color: "from-orange-400 to-amber-500"
              },
              {
                icon: <Scale className="w-8 h-8" />,
                title: "Conformité qualité",
                desc: "Vérification de la conformité aux Bonnes Pratiques de Fabrication (BPF), audits documentaires, support lors d'inspections réglementaires.",
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

          {/* Countries Section */}
          <FadeIn className="mb-20">
            <div className="bg-white rounded-3xl p-10 md:p-14 border border-slate-200 shadow-sm">
              <h2 className="font-poppins font-bold text-3xl text-slate-900 mb-6 text-center">
                Couverture réglementaire Afrique subsaharienne
              </h2>
              <p className="text-lg text-slate-600 text-center max-w-3xl mx-auto mb-8">
                Nous intervenons dans 15 pays d'Afrique de l'Ouest et Centrale, avec une connaissance approfondie des spécificités réglementaires de chaque marché.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  'Côte d\'Ivoire', 'Sénégal', 'Mali', 'Burkina Faso', 'Niger',
                  'Bénin', 'Togo', 'Ghana', 'Cameroun', 'Gabon',
                  'Congo', 'RDC', 'Guinée', 'Tchad', 'RCA'
                ].map((country, i) => (
                  <div
                    key={i}
                    className="px-4 py-3 bg-slate-50 rounded-xl text-center text-slate-700 font-medium border border-slate-100 hover:border-rose-200 hover:bg-rose-50 hover:text-rose-700 transition-all"
                  >
                    {country}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* CTA Section */}
          <FadeIn>
            <div className="bg-gradient-to-r from-rose-500 to-red-500 text-white rounded-3xl p-10 md:p-14 text-center">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
                Sécurisez vos enregistrements en Afrique
              </h2>
              <p className="text-lg text-rose-50 leading-relaxed max-w-2xl mx-auto mb-8">
                Notre expertise réglementaire et notre réseau local vous permettent d'accélérer vos enregistrements tout en garantissant une conformité totale aux exigences de chaque pays.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold bg-white text-rose-600 hover:bg-slate-100 transition-all shadow-xl"
              >
                Obtenir un devis réglementaire
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </AnimatedPage>
  );
}
