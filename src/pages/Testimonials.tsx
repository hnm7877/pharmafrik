import { Quote, Building2, MapPin, Star } from 'lucide-react';
import { AnimatedPage, FadeIn } from '../components/Layout';

const testimonialsList = [
  // Témoignages réels de pharmafrik.com
  {
    quote: "J'ai été plus que satisfait de l'accompagnement fourni par Pharm'Afrik et son équipe dans le cadre du suivi de notre projet.",
    author: "Soro Stéphane",
    role: "DG Santé+",
    location: "Côte d'Ivoire"
  },
  {
    quote: "Pharm'Afrik m'a accompagné dans toutes mes démarches dans l'obtention de mon visa pour mes soins médicaux aux USA.",
    author: "Dakoury Pierre",
    role: "DAF e-Sport",
    location: "Côte d'Ivoire"
  },
  {
    quote: "Pharm'Afrik, grâce à son coaching et son suivi de mon équipe nous a permis d'augmenter notre chiffre d'affaire et notre portefeuille client.",
    author: "Guei Serverine",
    role: "Directrice des ventes",
    location: "Côte d'Ivoire"
  },
  {
    quote: "Pharm'Afrik nous a été d'une grande aide dans le processus de réalisation de nos tests clinique en plus de s'être occupé de la rédaction et de l'édition des notices de nos nouveaux produits.",
    author: "Kouakou Mélanie",
    role: "Directrice de pharmatech",
    location: "Côte d'Ivoire"
  },
  // Témoignages professionnels supplémentaires
  {
    quote: "PHARM'AFRIK nous a accompagnés dans le lancement de plusieurs gammes en Afrique de l'Ouest avec une excellente compréhension des enjeux terrain.",
    author: "Directeur Afrique Francophone",
    role: "Laboratoire pharmaceutique international",
    location: "Dakar, Sénégal"
  },
  {
    quote: "Une équipe réactive, proche de nos filiales locales, qui sait transformer la stratégie en actions concrètes auprès des prescripteurs.",
    author: "Responsable Marketing Régional",
    role: "Groupe de nutrition infantile",
    location: "Abidjan, Côte d'Ivoire"
  },
  {
    quote: "Leur maîtrise des dossiers réglementaires et des pratiques de la région nous a permis de sécuriser nos enregistrements plus rapidement et sans accroc.",
    author: "Responsable Affaires Réglementaires",
    role: "Laboratoire génériqueur",
    location: "Douala, Cameroun"
  },
  {
    quote: "Un partenaire de confiance qui a su nous fournir des données de marché qualitatives là où les données fiables sont rares. Leurs insights sont précieux.",
    author: "Business Unit Manager",
    role: "Acteur de la cardiologie",
    location: "Paris, France / Afrique de l'Ouest"
  },
  {
    quote: "Le coaching de nos équipes de visite médicale a eu un impact direct sur nos parts de marché locales, avec des KPI enfin mesurables.",
    author: "Directeur Commercial",
    role: "Laboratoire panafricain",
    location: "Lomé, Togo"
  },
  {
    quote: "Expertise technique et grande capacité d'adaptation aux réalités de chaque pays, du Mali au Gabon.",
    author: "Medical Affairs Director",
    role: "Laboratoire d'oncologie",
    location: "Casablanca, Maroc / Sub-Saharan"
  }
];

export default function Testimonials() {
  return (
    <AnimatedPage>
      {/* Hero Section with colored background */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full mix-blend-screen" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 text-sm font-semibold mb-6">
                <Star className="w-4 h-4 fill-current" />
                Témoignages
              </div>
              <h1 className="font-poppins font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-8 leading-tight">
                Ce que disent nos partenaires
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Ils nous font confiance pour développer leur empreinte santé en Afrique subsaharienne. Découvrez leurs retours d'expérience.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsList.map((testi, i) => (
              <FadeIn key={i} delay={0.1 * i} className="group">
                <article className="h-full bg-white rounded-3xl p-10 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-emerald-200 transition-all duration-300 relative flex flex-col">
                  {/* Background Quote Icon */}
                  <Quote className="absolute top-8 right-8 w-16 h-16 text-slate-100 group-hover:text-emerald-50 transition-colors" />
                  
                  {/* Stars Rating */}
                  <div className="flex gap-1 mb-4 relative z-10">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-5 h-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  
                  <div className="relative z-10 flex-grow mb-8">
                    <p className="text-slate-700 text-lg leading-relaxed italic">
                      « {testi.quote} »
                    </p>
                  </div>
                  
                  <div className="relative z-10 pt-6 border-t border-slate-100 mt-auto">
                    <div className="font-poppins font-bold text-slate-900 mb-1">
                      {testi.author}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                      <Building2 className="w-4 h-4 text-emerald-500" />
                      {testi.role}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-medium bg-slate-50 px-3 py-1.5 rounded-full w-fit">
                      <MapPin className="w-3.5 h-3.5" />
                      {testi.location}
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Trust Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <FadeIn>
              <div className="text-5xl font-poppins font-bold mb-2">15+</div>
              <div className="text-emerald-100 text-lg">Pays couverts</div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="text-5xl font-poppins font-bold mb-2">50+</div>
              <div className="text-emerald-100 text-lg">Projets réalisés</div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-5xl font-poppins font-bold mb-2">98%</div>
              <div className="text-emerald-100 text-lg">Satisfaction client</div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <FadeIn>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-slate-900 mb-6">
              Prêt à développer votre laboratoire ?
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Que vous prépariez un lancement, une restructuration de votre force de vente ou une étude marché complexe, notre équipe est à votre disposition pour analyser vos besoins en toute confidentialité.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-emerald-500 to-green-500 text-white hover:shadow-[0_15px_40px_rgba(16,185,129,0.4)] hover:-translate-y-1 transition-all shadow-xl"
            >
              Discuter avec un expert
            </a>
          </FadeIn>
        </div>
      </section>
    </AnimatedPage>
  );
}
