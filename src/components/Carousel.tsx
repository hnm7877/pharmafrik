import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    title: "Conseil & médico-marketing",
    description: "Accompagnement stratégique pour votre croissance",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2070&auto=format&fit=crop",
    title: "Opération Clinique",
    description: "Mise en œuvre d'essais cliniques rigoureux",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2070&auto=format&fit=crop",
    title: "Formation Médicale",
    description: "Développement des compétences des professionnels de santé",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=2070&auto=format&fit=crop",
    title: "Affaires Réglementaires",
    description: "Conformité et enregistrement de vos produits",
  },
];

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden bg-slate-900">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins drop-shadow-lg">
                {slides[currentIndex].title}
              </h2>
              <p className="text-xl md:text-2xl text-slate-100 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
                {slides[currentIndex].description}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 text-white hover:bg-[var(--color-secondary)] transition-all backdrop-blur-sm border border-white/10"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 text-white hover:bg-[var(--color-secondary)] transition-all backdrop-blur-sm border border-white/10"
      >
        <ChevronRight size={32} />
      </button>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-[var(--color-secondary)] w-8"
                : "bg-white/50 w-2 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
