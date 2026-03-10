import { Link, Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Présentation", path: "/presentation" },
    { name: "Charte", path: "/charter" },
    { name: "Témoignages", path: "/testimonials" },
    { name: "Carrière", path: "/carriere" },
    { name: "Contact", path: "/contact" },
  ];

  const activitiesLinks = [
    { name: "Vue d'ensemble", path: "/services" },
    { name: "Marketing & Vente", path: "/marketing-vente" },
    { name: "Opération Clinique", path: "/operation-clinique" },
    { name: "Management Médical", path: "/management-medical" },
    { name: "Affaires Réglementaires", path: "/affaires-reglementaires" },
  ];

  const isActivityPage = [
    "/services",
    "/marketing-vente",
    "/operation-clinique",
    "/management-medical",
    "/affaires-reglementaires",
  ].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0f172a]/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="/logo/logo.png"
              alt="PHARM'AFRIK Logo"
              className="h-12 w-auto object-contain bg-white rounded-md p-1"
            />
            <span className="font-poppins font-bold tracking-widest text-lg uppercase text-white hidden sm:block">
              PHARM’AFRIK
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-[var(--color-accent)] ${
                  location.pathname === link.path
                    ? "text-[var(--color-accent)]"
                    : "text-slate-300"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Activities Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsActivitiesOpen(true)}
              onMouseLeave={() => setIsActivitiesOpen(false)}
            >
              <button
                className={`text-sm font-medium transition-colors hover:text-[var(--color-accent)] flex items-center gap-1 ${
                  isActivityPage
                    ? "text-[var(--color-accent)]"
                    : "text-slate-300"
                }`}
              >
                Activités
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isActivitiesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isActivitiesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-[#0f172a]/95 backdrop-blur-md border border-slate-700 rounded-2xl shadow-2xl overflow-hidden"
                  >
                    {activitiesLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className={`block px-6 py-3 text-sm font-medium transition-colors hover:bg-slate-800/50 hover:text-[var(--color-secondary)] ${
                          location.pathname === link.path
                            ? "text-[var(--color-secondary)] bg-slate-800/30"
                            : "text-slate-300"
                        }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-medium border border-slate-600 text-slate-200 bg-slate-900/30 hover:border-[var(--color-secondary)] hover:text-white transition-all"
            >
              Parler à un expert
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#020617] pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-2xl font-poppins font-semibold text-slate-200 hover:text-[var(--color-secondary)]"
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Activities Section */}
              <div className="border-t border-slate-800 pt-6">
                <div className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">
                  Nos Activités
                </div>
                {activitiesLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block py-2 text-lg font-medium transition-colors hover:text-[var(--color-secondary)] ${
                      location.pathname === link.path
                        ? "text-[var(--color-secondary)]"
                        : "text-slate-300"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  to="/contact"
                  className="inline-flex w-full justify-center items-center px-6 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-accent)] text-slate-900 shadow-[0_10px_25px_rgba(34,197,94,0.3)]"
                >
                  Parler à un expert <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>

      <footer className="bg-[#020617] text-slate-400 text-sm py-12 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <img
                src="/logo/logo.png"
                alt="PHARM'AFRIK Logo"
                className="h-16 w-auto object-contain bg-white rounded-md p-2"
              />
            </div>
            <div className="flex flex-wrap gap-6">
              <a
                href="#"
                className="hover:text-[var(--color-secondary)] transition-colors"
              >
                Mentions légales
              </a>
              <a
                href="#"
                className="hover:text-[var(--color-secondary)] transition-colors"
              >
                Politique de confidentialité
              </a>
              <a
                href="#"
                className="hover:text-[var(--color-secondary)] transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="text-slate-500 border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between">
            <p>
              © 2026 PHARM’AFRIK – West & Central Africa. Tous droits réservés.
            </p>
            <p className="mt-2 md:mt-0">Basé à Abidjan, Côte d'Ivoire</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Helper for scroll animations
export function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Helper for page transitions
export function AnimatedPage({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
