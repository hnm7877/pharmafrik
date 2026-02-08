import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';
import { AnimatedPage, FadeIn } from '../components/Layout';

export default function Contact() {
  return (
    <AnimatedPage>
      <section className="pt-40 pb-32 min-h-screen bg-[#0b1120] text-slate-300 relative overflow-hidden">
        {/* Background glow for the contact section */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-emerald-900/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
            
            {/* Left Column: Contact Info */}
            <div>
              <FadeIn>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500 mb-6">
                  Contact
                </div>
                <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
                  Parlons de vos projets en Afrique
                </h1>
                
                <p className="text-lg text-slate-400 leading-relaxed mb-12">
                  Basés à Abidjan, nous intervenons aux côtés de vos équipes régionales et locales pour construire des plans d’action adaptés à chaque pays. Décrivez-nous brièvement vos enjeux, nous reviendrons vers vous sous 24 à 48 heures ouvrées.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 mb-1 font-medium">Email</div>
                      <a href="mailto:contact@pharmafrik.com" className="text-white hover:text-emerald-400 transition-colors font-medium">
                        contact@pharmafrik.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 mb-1 font-medium">Téléphone (Abidjan)</div>
                      <a href="tel:+22500000000" className="text-white hover:text-emerald-400 transition-colors font-medium">
                        +225 XX XX XX XX
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 mb-1 font-medium">Adresse & Siège</div>
                      <div className="text-white font-medium">
                        Abidjan, Côte d’Ivoire
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-14 pt-10 border-t border-slate-800">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-slate-700 bg-slate-800/30 text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all group"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-medium">Nous suivre sur LinkedIn</span>
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <FadeIn delay={0.2} className="bg-[#0f172a]/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-300 ml-1">Nom et prénom</label>
                      <input 
                        id="name" 
                        type="text" 
                        placeholder="Jean Dupont" 
                        className="w-full bg-[#1e293b]/50 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium text-slate-300 ml-1">Entreprise</label>
                      <input 
                        id="company" 
                        type="text" 
                        placeholder="Laboratoire XYZ" 
                        className="w-full bg-[#1e293b]/50 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-300 ml-1">Email professionnel</label>
                    <input 
                      id="email" 
                      type="email" 
                      placeholder="jean.dupont@laboratoire-xyz.com" 
                      className="w-full bg-[#1e293b]/50 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-300 ml-1">Votre projet / vos besoins</label>
                    <textarea 
                      id="message" 
                      rows={5}
                      placeholder="Décrivez brièvement votre projet, vos produits et les pays ciblés en Afrique subsaharienne." 
                      className="w-full bg-[#1e293b]/50 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all resize-none"
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-5 rounded-xl text-base font-semibold bg-gradient-to-r from-emerald-500 to-green-500 text-slate-900 shadow-[0_10px_30px_rgba(16,185,129,0.2)] hover:shadow-[0_15px_40px_rgba(16,185,129,0.4)] hover:-translate-y-1 transition-all group"
                  >
                    Envoyer ma demande
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                  <p className="text-xs text-center text-slate-500 mt-4">
                    Vos données sont strictement confidentielles et ne seront jamais partagées.
                  </p>
                </form>
              </FadeIn>
            </div>
            
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
