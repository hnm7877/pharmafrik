import { MapPin, Target, ShieldCheck, HeartHandshake } from 'lucide-react';
import { AnimatedPage, FadeIn } from '../components/Layout';

export default function About() {
  return (
    <AnimatedPage>
      <section className="pt-40 pb-20 bg-slate-50 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-20">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-semibold text-sm mb-6 border border-blue-100 shadow-sm">
                <MapPin className="w-4 h-4" />
                Basé à Abidjan • Afrique de l’Ouest & Centrale
              </div>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-8 leading-tight">
                Qui sommes-nous ?
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                <strong className="text-slate-900 font-semibold">PHARM’AFRIK</strong> est une agence de conseil et de prestations médico-marketing spécialisée dans l’accompagnement des laboratoires pharmaceutiques et des acteurs de la nutrition sur les marchés africains.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Nous aidons nos partenaires à sécuriser leur développement commercial dans un environnement complexe : contraintes réglementaires, montée des génériques, contrefaçons, et évolution des parcours de soins. Notre connaissance du terrain est notre plus grand atout.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.2} className="relative">
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative bg-blue-900">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1e3a8a] to-[#10b981]/80 mix-blend-multiply z-10"></div>
                {/* Fallback pattern since we don't have images */}
                <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTExIDBIMXYxMWgxMFYwek0xMyAwaDExdjExSDEzVjB6TTExIDEzSDF2MTFoMTBWMTN6TTEzIDEzaDExdjExSDEzVjEzIiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=')] bg-repeat" />
                
                <div className="absolute bottom-8 left-8 right-8 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
                  <div className="font-poppins font-semibold text-2xl mb-2">Notre Vision</div>
                  <p className="text-white/80 text-sm">Devenir le partenaire stratégique de référence pour l'accès aux soins de qualité en Afrique subsaharienne.</p>
                </div>
              </div>
            </FadeIn>

            <div className="space-y-10">
              {[
                {
                  icon: <Target className="w-8 h-8 text-emerald-500" />,
                  title: "Expertise Terrain",
                  desc: "Présents physiquement en Afrique subsaharienne francophone, nous comprenons les nuances culturelles et médicales locales."
                },
                {
                  icon: <HeartHandshake className="w-8 h-8 text-emerald-500" />,
                  title: "Approche Intégrée",
                  desc: "De la stratégie au médical, en passant par le marketing et l'exécution commerciale, nous couvrons l'ensemble de la chaîne de valeur."
                },
                {
                  icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
                  title: "Réseau d'Excellence",
                  desc: "Nous mobilisons un réseau exclusif de professionnels de santé et de leaders d’opinion reconnus dans la région."
                }
              ].map((item, i) => (
                <FadeIn key={i} delay={0.1 * i} className="flex gap-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white shadow-[0_8px_30px_rgba(15,23,42,0.06)] border border-slate-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-poppins font-bold text-xl text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KPI Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "15+", label: "Années d’expérience", text: "cumulée en industrie pharmaceutique & consulting international." },
              { num: "98%", label: "Taux de rétention", text: "de missions renouvelées avec nos clients stratégiques." },
              { num: "15", label: "Pays couverts", text: "en Afrique de l’Ouest & Centrale avec une force locale." }
            ].map((stat, i) => (
              <FadeIn key={i} delay={0.2 * i} className="bg-slate-50 p-10 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                <div className="font-poppins font-bold text-5xl text-blue-900 mb-4">{stat.num}</div>
                <div className="font-semibold text-lg text-slate-800 mb-2">{stat.label}</div>
                <p className="text-slate-600">{stat.text}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
