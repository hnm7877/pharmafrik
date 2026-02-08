import { Briefcase, Mail, Users, Rocket, CheckCircle, TrendingUp } from 'lucide-react';
import { AnimatedPage, FadeIn } from '../components/Layout';

export default function Carriere() {
  const jobs = [
    {
      title: "Assistant(e) Marketing",
      tasks: [
        "Démarcher des prospects par téléphone",
        "Acquérir de nouveaux clients",
        "Assurer le SAV de chaque client"
      ]
    },
    {
      title: "Coordonateur(rice)",
      tasks: [
        "Démarcher des prospects par téléphone",
        "Acquérir de nouveaux clients",
        "Assurer le SAV de chaque client"
      ]
    },
    {
      title: "Assistant(e) Projet",
      tasks: [
        "Démarcher des prospects par téléphone",
        "Acquérir de nouveaux clients",
        "Assurer le SAV de chaque client"
      ]
    },
    {
      title: "Assistant(e) RH",
      tasks: [
        "Démarcher des prospects par téléphone",
        "Acquérir de nouveaux clients",
        "Assurer le SAV de chaque client"
      ]
    }
  ];

  return (
    <AnimatedPage>
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-b from-[#020617] to-[#0b1120] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full mix-blend-screen" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold mb-6">
                <Briefcase className="w-4 h-4" />
                Carrière
              </div>
              <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight">
                Rejoignez-nous !
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-12">
                Vous avez envie de rejoindre un groupe jeune et dynamique en pleine croissance ? De prospecter auprès d'une clientèle de professionnels en leur apportant vos conseils et votre professionnalisme ?
              </p>
            </FadeIn>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Autonomie & Responsabilité",
                desc: "Un fort niveau de responsabilité et d'autonomie pour développer vos compétences"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Rémunération Attractive",
                desc: "Une rémunération attractive et non plafonnée selon vos performances"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Formation & Accompagnement",
                desc: "Formation complète à notre méthodologie commerciale et accompagnements terrain"
              }
            ].map((benefit, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <div className="bg-[#0f172a]/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white flex items-center justify-center mb-6 shadow-lg">
                    {benefit.icon}
                  </div>
                  <h3 className="font-poppins font-bold text-xl text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA Box */}
          <FadeIn className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-emerald-900/30 to-blue-900/30 border border-slate-800/60 rounded-3xl p-10 md:p-14 text-center">
              <h2 className="font-poppins font-bold text-3xl text-white mb-4">
                Vos ambitions sont donc les nôtres !
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Nous vous apporterons les moyens humains et marketing qui vous permettront d'évoluer dans un secteur novateur et passionnant.
              </p>
              <a
                href="mailto:recrutement@pharmafrik.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-emerald-500 to-green-500 text-slate-900 shadow-[0_10px_30px_rgba(16,185,129,0.3)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.5)] hover:-translate-y-1 transition-all"
              >
                <Mail className="w-5 h-5" />
                Envoyez votre CV
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="font-poppins font-bold text-4xl md:text-5xl text-slate-900 mb-6">
                Offres d'emploi
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                Découvrez nos opportunités actuelles et rejoignez une équipe passionnée par le développement du secteur pharmaceutique en Afrique.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {jobs.map((job, i) => (
              <FadeIn key={i} delay={0.1 * i} className="group">
                <article className="h-full bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                  {/* Gradient accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-10 rounded-bl-[100px] transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-poppins font-bold text-2xl text-slate-900 mb-2">
                          {job.title}
                        </h3>
                        <p className="text-sm text-slate-500 font-medium">
                          Sous la responsabilité du Directeur Marketing
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-8">
                      <p className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
                        Tâches au quotidien :
                      </p>
                      {job.tasks.map((task, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600 leading-relaxed">{task}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href="mailto:recrutement@pharmafrik.com?subject=Candidature - {job.title}"
                      className="inline-flex items-center justify-center w-full px-6 py-3 rounded-xl text-sm font-semibold border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white transition-all group"
                    >
                      Postuler maintenant
                      <Mail className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6">
          <FadeIn className="max-w-3xl mx-auto text-center">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-slate-900 mb-6">
              Une question sur une offre ?
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              N'hésitez pas à nous contacter pour toute question concernant nos opportunités de carrière. Notre équipe RH se fera un plaisir de vous répondre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:recrutement@pharmafrik.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-emerald-500 text-white hover:bg-emerald-600 transition-all shadow-lg hover:shadow-xl"
              >
                <Mail className="w-5 h-5" />
                recrutement@pharmafrik.com
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold border-2 border-slate-300 text-slate-700 hover:border-emerald-500 hover:text-emerald-600 transition-all"
              >
                Formulaire de contact
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </AnimatedPage>
  );
}
