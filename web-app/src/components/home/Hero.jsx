import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, Network, Cpu, Database, Blocks } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, isMobile ? 0 : 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, isMobile ? 0 : -150]);

  const titleWords = "Servicios para construir, mejorar y evolucionar software con".split(" ");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-hero"
    >
      <div className="absolute inset-0 bg-dots opacity-10" />
      <div className="absolute inset-0 bg-noise" />
      <motion.div style={{ y: y1 }} className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-green/20 blur-3xl animate-pulse-slow pointer-events-none" />
      <motion.div style={{ y: y2, animationDelay: '1.5s' }} className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-brand-teal/20 blur-3xl animate-pulse-slow pointer-events-none" />

      <div className="container-max relative z-10 pt-24 pb-8 lg:pt-32 lg:pb-24 flex flex-col lg:flex-row items-center gap-6 lg:gap-16">
        <motion.div
          className="flex-1 text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center sm:items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-1.5 rounded-2xl sm:rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider sm:tracking-widest bg-brand-green/20 text-brand-teal border border-brand-teal/30 mb-3 lg:mb-6 text-left"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span>SOFTWARE FACTORY A LA VANGUARDIA</span>
          </motion.span>

          <motion.h1
            variants={itemVariants}
            aria-label="Servicios para construir, mejorar y evolucionar software con IA"
            className="font-display font-extrabold text-[28px] sm:text-5xl lg:text-6xl text-white leading-[1.15] lg:leading-tight mb-3 lg:mb-6 flex flex-wrap gap-x-2 lg:gap-x-3 gap-y-1 lg:gap-y-2"
          >
            {titleWords.map((word, i) => (
              <motion.span key={i} variants={wordVariants} className="inline-block">
                {word}
              </motion.span>
            ))}
            <motion.span variants={wordVariants} className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-teal">
              IA
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-slate-300 text-[13px] sm:text-base lg:text-lg leading-relaxed max-w-xl mb-5 lg:mb-10"
          >
            Combinamos más de 15 años de experiencia en sistemas complejos con el poder de las herramientas de inteligencia artificial para mejorar la calidad, velocidad y evolución del software. Usamos IA para resolver de manera mas eficiente los problemas reales de tu negocio y permitir su crecimiento.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a href="https://wa.me/5493564688653" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm lg:text-base px-5 py-2 lg:px-6 lg:py-3">
              Hablemos de tus sistemas <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
            </a>
          </motion.div>

          {/* Metrics */}
          <motion.div variants={itemVariants} className="flex items-center gap-6 lg:gap-8 mt-6 pt-5 lg:mt-12 lg:pt-8 border-t border-white/10">
             <div>
                <div className="text-white font-display font-bold text-xl lg:text-3xl leading-none mb-1">+30</div>
                <div className="text-slate-400 text-[11px] lg:text-sm font-medium leading-[1.1] lg:leading-tight">Profesionales<br className="sm:hidden" /> en el equipo</div>
             </div>
             <div>
                <div className="text-white font-display font-bold text-xl lg:text-3xl leading-none mb-1">+15</div>
                <div className="text-slate-400 text-[11px] lg:text-sm font-medium leading-[1.1] lg:leading-tight">Años de<br className="sm:hidden" /> experiencia</div>
             </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="flex-1 hidden lg:flex justify-center items-center"
        >
          <div className="relative w-80 h-96">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
               <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-brand-green to-brand-teal" />
               <div className="p-8 h-full flex flex-col justify-center gap-6 relative z-10">
                  <div className="flex items-center justify-between">
                     <div className="w-12 h-12 rounded-xl bg-brand-green/20 flex items-center justify-center border border-brand-green/30">
                        <Blocks className="text-brand-green w-6 h-6" />
                     </div>
                     <div className="h-0.5 flex-1 bg-gradient-to-r from-brand-green/30 to-brand-teal/30 mx-2" />
                     <div className="w-12 h-12 rounded-xl bg-brand-teal/20 flex items-center justify-center border border-brand-teal/30">
                        <Network className="text-brand-teal w-6 h-6" />
                     </div>
                  </div>
                  <div className="flex items-center justify-center">
                     <div className="w-1 h-8 bg-gradient-to-b from-brand-teal/30 to-brand-green/30" />
                  </div>
                  <div className="flex items-center justify-center">
                     <div className="w-16 h-16 rounded-2xl bg-gradient-brand shadow-brand flex items-center justify-center relative">
                        <div className="absolute inset-0 rounded-2xl animate-ping opacity-20 bg-brand-green" />
                        <Cpu className="text-white w-8 h-8" />
                     </div>
                  </div>
                  <div className="flex items-center justify-center">
                     <div className="w-1 h-8 bg-gradient-to-t from-brand-teal/30 to-brand-green/30" />
                  </div>
                  <div className="flex items-center justify-center">
                     <div className="w-12 h-12 rounded-xl bg-slate-800/50 flex items-center justify-center border border-white/10">
                        <Database className="text-slate-400 w-6 h-6" />
                     </div>
                  </div>
               </div>
               
               <div className="absolute inset-0 bg-grid-white opacity-5" />
            </div>

            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
               className="absolute -top-4 -right-8 bg-brand-teal text-white text-xs font-bold px-4 py-2 rounded-xl shadow-xl flex items-center gap-2"
            >
               <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
               IA Activa
            </motion.div>
            <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
               className="absolute -bottom-6 -left-6 bg-slate-800 text-brand-green border border-brand-green/30 text-xs font-bold px-4 py-2 rounded-xl shadow-xl"
            >
               Evolución Continua
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#social-proof"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-white/80 transition-colors"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
