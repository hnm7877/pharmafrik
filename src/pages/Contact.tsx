import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { AnimatedPage, FadeIn } from "../components/Layout";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.status === "success") {
        setStatus("success");
        setFormData({ name: "", company: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Une erreur est survenue.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        "Impossible de contacter le serveur. Veuillez réessayer plus tard.",
      );
    } finally {
      if (status !== "success") {
        // keep loading state if success to show message, otherwise clear
      }
    }
  };

  return (
    <AnimatedPage>
      <section className="pt-40 pb-32 min-h-screen bg-[#0b1120] text-slate-300 relative overflow-hidden">
        {/* Background glow for the contact section */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[var(--color-secondary)]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24">
            {/* Left Column: Contact Info */}
            <div>
              <FadeIn>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-secondary)] mb-6">
                  Contact
                </div>
                <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-8 leading-tight">
                  Parlons de vos projets en Afrique
                </h1>

                <p className="text-lg text-slate-400 leading-relaxed mb-12">
                  Basés à Abidjan, nous intervenons aux côtés de vos équipes
                  régionales et locales pour construire des plans d’action
                  adaptés à chaque pays. Décrivez-nous brièvement vos enjeux,
                  nous reviendrons vers vous sous 24 à 48 heures ouvrées.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[var(--color-secondary)]" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 mb-1 font-medium">
                        Email
                      </div>
                      <a
                        href="mailto:info@pharmafrik.com"
                        className="text-white hover:text-[var(--color-secondary)] transition-colors font-medium"
                      >
                        info@pharmafrik.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[var(--color-secondary)]" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 mb-1 font-medium">
                        Téléphone (Abidjan)
                      </div>
                      <a
                        href="tel:+2252722497070"
                        className="text-white hover:text-[var(--color-secondary)] transition-colors font-medium"
                      >
                        +225 27 22 49 70 70
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[var(--color-secondary)]" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-500 mb-1 font-medium">
                        Adresse & Siège
                      </div>
                      <div className="text-white font-medium">
                        Riviera Bonoumin Abri 2000, Abidjan
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-14 pt-10 border-t border-slate-800 flex flex-col gap-4">
                  <a
                    href="https://www.linkedin.com/company/pharm'afrik/about/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-slate-700 bg-slate-800/30 text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all group"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-medium">
                      Nous suivre sur LinkedIn
                    </span>
                  </a>
                  <a
                    href="https://www.facebook.com/p/PharmAfrik-West-Central-Africa-100039604764922/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-slate-700 bg-slate-800/30 text-white hover:bg-[#1877F2] hover:border-[#1877F2] transition-all group"
                  >
                    <svg
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.962.925-1.962 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span className="font-medium">
                      Nous suivre sur Facebook
                    </span>
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Contact Form */}
            <div>
              <FadeIn
                delay={0.2}
                className="bg-[#0f172a]/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl"
              >
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-slate-300 ml-1"
                      >
                        Nom et prénom
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={status === "submitting"}
                        placeholder="Jean Dupont"
                        className="w-full bg-[#1e293b]/50 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="text-sm font-medium text-slate-300 ml-1"
                      >
                        Entreprise
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        disabled={status === "submitting"}
                        placeholder="Laboratoire XYZ"
                        className="w-full bg-[#1e293b]/50 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-slate-300 ml-1"
                    >
                      Email professionnel
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={status === "submitting"}
                      placeholder="jean.dupont@laboratoire-xyz.com"
                      className="w-full bg-[#1e293b]/50 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-slate-300 ml-1"
                    >
                      Votre projet / vos besoins
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={status === "submitting"}
                      placeholder="Décrivez brièvement votre projet, vos produits et les pays ciblés en Afrique subsaharienne."
                      className="w-full bg-[#1e293b]/50 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-[var(--color-secondary)] focus:ring-1 focus:ring-[var(--color-secondary)] transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    ></textarea>
                  </div>

                  {status === "success" && (
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl flex items-start gap-3 text-green-400">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">
                        Votre message a été envoyé avec succès. Nous vous
                        répondrons dans les plus brefs délais.
                      </p>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-start gap-3 text-red-400">
                      <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <p className="text-sm">
                        {errorMessage ||
                          "Une erreur est survenue lors de l'envoi."}
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting" || status === "success"}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-5 rounded-xl text-base font-semibold bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-secondary)]/80 text-white shadow-[0_10px_30px_rgba(34,197,94,0.2)] hover:shadow-[0_15px_40px_rgba(34,197,94,0.4)] hover:-translate-y-1 transition-all group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Envoyer ma demande
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-center text-slate-500 mt-4">
                    Vos données sont strictement confidentielles et ne seront
                    jamais partagées.
                  </p>
                </form>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] w-full bg-slate-900 relative">
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://maps.google.com/maps?q=PHARM'AFRIK%20Riviera%20bonoumin%20abri%202000%2C%20Abidjan&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{
              border: 0,
            }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation PHARM'AFRIK Abidjan"
            className="w-full h-full"
          ></iframe>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-slate-200 max-w-sm mx-auto text-center">
            <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4 text-white">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-poppins font-bold text-slate-900 text-lg mb-2">
              Notre Siège
            </h3>
            <p className="text-slate-600 text-sm">
              Riviera Bonoumin Abri 2000, Abidjan
            </p>
            <a
              href="https://maps.google.com/?cid=16836412301179437140&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAEYASAB&hl=fr&gl=CI&source=embed"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-[var(--color-secondary)] font-semibold hover:underline text-sm"
            >
              Obtenir l'itinéraire
            </a>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
}
