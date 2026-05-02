import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Sparkles, Network, Cpu, Database, Blocks } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-hero"
    >
      <div className="absolute inset-0 bg-dots opacity-10" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-green/20 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 rounded-full bg-brand-teal/20 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      <div className="container-max relative z-10 pt-32 pb-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <motion.div
          className="flex-1 text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-brand-green/20 text-brand-teal border border-brand-teal/30 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Software Factory Evolucionada
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6"
          >
            Servicios para construir, mejorar y evolucionar software con <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-teal">IA</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-slate-300 text-lg leading-relaxed max-w-xl mb-10"
          >
            Combinamos experiencia en sistemas complejos con el uso de herramientas de inteligencia artificial para mejorar la calidad, velocidad y evolución del software. Usamos IA para resolver mejor tus problemas reales.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a href="#contacto" className="btn-primary text-base">
              Hablemos de tus sistemas <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>

          {/* Metrics */}
          <motion.div variants={itemVariants} className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10">
             <div>
                <div className="text-white font-display font-bold text-3xl">+30</div>
                <div className="text-slate-400 text-sm font-medium">Profesionales en el equipo</div>
             </div>
             <div>
                <div className="text-white font-display font-bold text-3xl">+15</div>
                <div className="text-slate-400 text-sm font-medium">Años de experiencia</div>
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
