import { Star, ShieldCheck, TrendingUp, Handshake } from 'lucide-react';
import { AnimatedPage, FadeIn } from '../components/Layout';

export default function Charter() {
  return (
    <AnimatedPage>
      <section className="pt-40 pb-32 min-h-screen bg-[#020617] text-slate-300 relative overflow-hidden">
        {/* Abstract dark gradients */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-900/20 blur-[120px] rounded-full mix-blend-screen -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-emerald-900/20 blur-[150px] rounded-full mix-blend-screen translate-y-1/2 -translate-x-1/3" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-4">
                Notre Charte
              </div>
              <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Des engagements forts au service de vos projets
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed">
                Transparence, indépendance et exigence guident chacune de nos missions auprès des laboratoires et de leurs partenaires en Afrique subsaharienne.
              </p>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8 text-emerald-400" />,
                label: "Une vocation",
                title: "Créer de la valeur sur le long terme",
                desc: "Nous avons pour vocation d’accompagner durablement les acteurs de la santé et de la nutrition en Afrique, en conciliant performance économique et bénéfice patient."
              },
              {
                icon: <Handshake className="w-8 h-8 text-blue-400" />,
                label: "Des valeurs",
                title: "Ethique & proximité terrain",
                desc: "Nos recommandations sont fondées sur l’écoute des équipes locales, la compréhension des réalités du terrain et le strict respect des règles éthiques et réglementaires."
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-indigo-400" />,
                label: "Une exigence",
                title: "Résultats mesurables",
                desc: "Chaque mission fait l’objet d’objectifs clairement définis, de plans d’actions concrets et d’indicateurs de suivi partagés avec nos clients tout au long du projet."
              }
            ].map((card, i) => (
              <FadeIn key={i} delay={0.2 * i}>
                <article className="h-full relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  <div className="h-full bg-[#0b1120] border border-slate-800 rounded-3xl p-10 shadow-2xl relative z-10 overflow-hidden group-hover:border-slate-700 transition-colors duration-500">
                    {/* Glowing orb behind icon */}
                    <div className="absolute top-10 left-10 w-20 h-20 bg-emerald-500/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="relative z-20">
                      <div className="w-16 h-16 rounded-2xl bg-[#0f172a] border border-slate-800 flex items-center justify-center mb-8 shadow-lg">
                        {card.icon}
                      </div>
                      
                      <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                        {card.label}
                      </div>
                      
                      <h3 className="font-poppins font-bold text-2xl text-white mb-6">
                        {card.title}
                      </h3>
                      
                      <p className="text-slate-400 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          <div className="mt-32 max-w-4xl mx-auto">
            <FadeIn>
              <div className="bg-gradient-to-r from-emerald-900/30 to-blue-900/30 border border-slate-800/60 rounded-3xl p-10 md:p-14 text-center">
                <ShieldCheck className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
                <h2 className="font-poppins font-bold text-3xl text-white mb-6">Conformité et Déontologie</h2>
                <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                  Parce que le secteur de la santé exige une rigueur absolue, <strong className="text-white">PHARM’AFRIK</strong> garantit le respect total des législations locales, des codes pharmaceutiques internationaux et des directives internes de chaque partenaire. Nous opérons dans la plus stricte confidentialité.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
