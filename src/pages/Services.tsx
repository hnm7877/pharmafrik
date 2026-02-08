import { ArrowUpRight, Users, LineChart, Stethoscope, FileText, Milk } from 'lucide-react';
import { AnimatedPage, FadeIn } from '../components/Layout';

const servicesList = [
  {
    icon: <ArrowUpRight className="w-6 h-6" />,
    title: "Stratégie de croissance & accès au marché",
    desc: "Analyse des potentiels, positionnement de portefeuille, plans de développement pays par pays, prise en compte de la concurrence générique et des spécificités locales.",
    tag: "Afrique de l’Ouest & Centrale",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Coaching & performance des forces de vente",
    desc: "Structuration et accompagnement des équipes commerciales : ciblage, outils de visite, tableaux de bord, coaching terrain et suivi des résultats.",
    tag: "Visite médicale & hospitalière",
    color: "from-emerald-400 to-teal-500"
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Etudes médico-marketing & insights",
    desc: "Études qualitatives et quantitatives auprès des professionnels de santé, analyse des pratiques de prescription et des parcours patients.",
    tag: "Insights marché",
    color: "from-orange-400 to-amber-500"
  },
  {
    icon: <Stethoscope className="w-6 h-6" />,
    title: "Support médical & essais cliniques",
    desc: "Accompagnement à la mise en place d’études locales, rédaction et adaptation de supports médicaux et scientifiques conformes aux réglementations.",
    tag: "Affaires médicales",
    color: "from-purple-500 to-fuchsia-600"
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Réglementaire & dossiers d’enregistrement",
    desc: "Préparation et suivi des dossiers, interface avec les autorités, adaptation des notices et conditionnements aux exigences locales.",
    tag: "Affaires réglementaires",
    color: "from-rose-400 to-red-500"
  },
  {
    icon: <Milk className="w-6 h-6" />,
    title: "Agro-alimentaire & nutrition",
    desc: "Accompagnement des marques de laits infantiles, farines et compléments nutritionnels sur les canaux santé et retail, dans le respect des réglementations.",
    tag: "Nutrition & santé",
    color: "from-sky-400 to-blue-500"
  }
];

export default function Services() {
  return (
    <AnimatedPage>
      <section className="pt-40 pb-32 bg-[#f8fafc] min-h-screen">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 mb-4">
                Nos Activités
              </div>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 leading-tight">
                Des solutions complètes pour votre développement
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Nous intervenons de la réflexion stratégique à l’exécution opérationnelle, en lien étroit avec vos équipes locales et régionales.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, i) => (
              <FadeIn key={i} delay={0.1 * i} className="group">
                <article className="h-full flex flex-col bg-white rounded-[2rem] p-10 border border-slate-200 shadow-[0_12px_30px_rgba(15,23,42,0.03)] hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                  {/* Hover gradient background effect */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-bl-[100px] transition-opacity duration-500`} />
                  
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${service.color} text-white shadow-lg shadow-${service.color.split(' ')[1]}/30 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="font-poppins font-bold text-2xl text-slate-900 mb-4 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>
                  
                  <div className="mt-auto">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">
                      {service.tag}
                    </span>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Banner */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTExIDBIMXYxMWgxMFYwek0xMyAwaDExdjExSDEzVjB6TTExIDEzSDF2MTFoMTBWMTN6TTEzIDEzaDExdjExSDEzVjEzIiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] opacity-[0.03]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <FadeIn className="text-center max-w-4xl mx-auto">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
              Une méthodologie prouvée sur le terrain
            </h2>
            <p className="text-lg text-blue-100 mb-10 leading-relaxed">
              Nous ne croyons pas aux solutions toutes faites. Chaque marché africain a ses spécificités. C'est pourquoi nos recommandations s'appuient systématiquement sur des audits locaux et une étroite collaboration avec vos équipes de visite médicale.
            </p>
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold bg-white text-blue-900 hover:bg-emerald-400 hover:text-white transition-all shadow-xl">
              Discuter de vos objectifs locaux
            </a>
          </FadeIn>
        </div>
      </section>
    </AnimatedPage>
  );
}
