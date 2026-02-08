import { Stethoscope, BookOpen, GraduationCap, FileText, Presentation, Users } from 'lucide-react';
import { AnimatedPage, FadeIn } from '../components/Layout';

export default function ManagementMedical() {
  return (
    <AnimatedPage>
      <section className="pt-40 pb-32 bg-gradient-to-b from-[#0b1120] to-[#020617] min-h-screen relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[150px] rounded-full mix-blend-screen" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Hero Section */}
          <div className="max-w-4xl mb-20">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-semibold mb-6">
                <Stethoscope className="w-4 h-4" />
                Nos Activités
              </div>
              <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight">
                Management Médical
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed mb-12">
                Notre équipe de pharmaciens et médecins apporte son expertise scientifique et médicale pour soutenir vos activités sur le continent africain : de la formation des équipes à la production de supports scientifiques adaptés aux marchés locaux.
              </p>
            </FadeIn>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: <Stethoscope className="w-8 h-8" />,
                title: "Affaires médicales",
                desc: "Support médical et scientifique aux équipes commerciales, gestion des demandes d'information scientifique, veille bibliographique et réglementaire.",
                color: "from-purple-500 to-fuchsia-600"
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Documentation scientifique",
                desc: "Rédaction et adaptation de monographies, fiches produits, argumentaires scientifiques, résumés d'études cliniques conformes aux exigences locales.",
                color: "from-blue-500 to-indigo-600"
              },
              {
                icon: <Presentation className="w-8 h-8" />,
                title: "Supports de formation",
                desc: "Création de modules de formation pour visiteurs médicaux, présentations pour congrès, posters scientifiques et outils d'aide à la vente.",
                color: "from-emerald-400 to-teal-500"
              },
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Formation continue",
                desc: "Organisation de formations médicales pour les équipes internes et externes, séminaires scientifiques, webinaires et ateliers pratiques.",
                color: "from-orange-400 to-amber-500"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Leaders d'opinion",
                desc: "Identification et engagement des leaders d'opinion locaux, organisation d'advisory boards, gestion des relations avec les experts médicaux.",
                color: "from-rose-400 to-red-500"
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Publications scientifiques",
                desc: "Support à la publication d'études locales, rédaction d'articles scientifiques, collaboration avec les revues médicales africaines.",
                color: "from-sky-400 to-blue-500"
              }
            ].map((service, i) => (
              <FadeIn key={i} delay={0.1 * i} className="group">
                <article className="h-full bg-[#0f172a]/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-10 hover:border-slate-700 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden">
                  {/* Gradient on hover */}
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
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-slate-800/60 rounded-3xl p-10 md:p-14 text-center">
              <h2 className="font-poppins font-bold text-3xl md:text-4xl text-white mb-6">
                Une expertise médicale au service de vos produits
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
                Notre connaissance approfondie des pratiques médicales africaines et notre rigueur scientifique garantissent la pertinence et la qualité de vos supports médicaux et formations.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white shadow-[0_10px_30px_rgba(168,85,247,0.3)] hover:shadow-[0_15px_40px_rgba(168,85,247,0.5)] hover:-translate-y-1 transition-all"
              >
                Parler à un expert médical
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </AnimatedPage>
  );
}
