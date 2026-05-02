import { motion } from 'framer-motion';
import { Smartphone, LayoutDashboard, CheckCircle2, ArrowRight, QrCode, BadgeCheck, Calendar, TrendingUp, CreditCard, Users } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import SectionHeader from '../components/ui/SectionHeader';

const FEATURES = [
  { icon: CreditCard, label: 'Módulo de Caja', desc: 'Control total de ingresos y egresos en tiempo real.' },
  { icon: TrendingUp, label: 'Gráficos & Reportes', desc: 'Métricas visuales para tomar decisiones informadas.' },
  { icon: Calendar, label: 'Gestión de Turnos', desc: 'Organizá clases y horarios sin complicaciones.' },
  { icon: Users, label: 'Control de Abonos', desc: 'Alertas automáticas de vencimientos y deudas.' },
  { icon: BadgeCheck, label: 'Fichado Digital', desc: 'Registro de asistencia rápido y sin papel.' },
  { icon: QrCode, label: 'App Android con QR & DNI', desc: 'Tus alumnos fichan en segundos desde su celular.' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function Gym() {
  return (
    <main className="pt-0">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-10" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-brand-green/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

        <div className="container-max relative z-10 pt-32 pb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-brand-green/20 text-brand-teal border border-brand-teal/30 mb-6">
              Producto propio · e-Partners
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6"
          >
            e-Partners{' '}
            <span className="text-gradient">Gym</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-300 text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            El sistema de gestión integral para tu gimnasio. Manejá tu caja, controlá abonos, gestioná turnos, registrá asistencia y mucho más — desde cualquier dispositivo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="tel:+5403564-15688653"
              className="btn-primary text-base px-8 py-4 rounded-2xl"
            >
              Prueba Gratis 30 Días <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#features" className="btn-ghost text-base px-8 py-4 rounded-2xl">
              Ver funcionalidades
            </a>
          </motion.div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section id="features" className="section-pad bg-brand-light">
        <div className="container-max">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Funcionalidades"
              title="Todo lo que necesita tu gimnasio"
              subtitle="Un sistema completo, intuitivo y accesible desde cualquier dispositivo. Usted ocúpese de sus alumnos — nosotros nos encargamos del resto."
            />
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {FEATURES.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                variants={itemVariants}
                className="card p-6 flex items-start gap-4 cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0 shadow-brand">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-brand-navy mb-1">{label}</div>
                  <div className="text-slate-500 text-sm leading-relaxed">{desc}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SPLIT SECTION — Desktop */}
      <section className="section-pad bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={0.1}>
              {/* Visual placeholder for desktop mockup */}
              <div className="relative bg-brand-dark rounded-3xl p-8 shadow-2xl aspect-video flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-dots opacity-10" />
                <div className="relative z-10 text-center">
                  <LayoutDashboard className="w-16 h-16 text-brand-green mx-auto mb-4" />
                  <div className="text-white font-display font-bold text-2xl">Dashboard</div>
                  <div className="text-slate-400 text-sm mt-1">Sistema de gestión web</div>
                </div>
                {/* Fake chart bars */}
                <div className="absolute bottom-6 left-8 right-8 flex gap-2 items-end">
                  {[60, 80, 50, 90, 70, 85, 65].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-lg bg-brand-green/40"
                      style={{ height: `${h * 0.6}px` }}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <span className="text-brand-green font-semibold text-sm uppercase tracking-widest">Gestión web</span>
              <h2 className="section-title mt-2 mb-4">La vida es mejor cuando está organizada</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Con e-Partners Gym podés administrar tu gimnasio de manera simple y eficiente. El sistema incluye un módulo de caja completo, gráficos de evolución, gestión de turnos y fichado digital.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Creá abonos personalizados y asignáselos a tus alumnos. El sistema te avisará automáticamente quién tiene la cuota vencida o adeudada.
              </p>
              <div className="flex flex-col gap-3">
                {['Sin instalaciones complicadas', 'Acceso desde cualquier navegador', 'Datos seguros en la nube'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SPLIT SECTION — Mobile */}
      <section className="section-pad bg-brand-light">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal delay={0.1} className="order-2 lg:order-1">
              <span className="text-brand-teal font-semibold text-sm uppercase tracking-widest">App Android</span>
              <h2 className="section-title mt-2 mb-4">Mejor aún si lo hacés con tu smartphone</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Además del sistema web, contamos con una <strong>aplicación Android</strong> con una interfaz amigable e intuitiva que facilita a cada alumno registrar su asistencia de forma rápida y sin fricciones.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="card p-5 text-center">
                  <QrCode className="w-8 h-8 text-brand-teal mx-auto mb-2" />
                  <div className="font-semibold text-brand-navy text-sm">Escaneo QR</div>
                  <div className="text-xs text-slate-500 mt-1">Fichado instantáneo</div>
                </div>
                <div className="card p-5 text-center">
                  <BadgeCheck className="w-8 h-8 text-brand-green mx-auto mb-2" />
                  <div className="font-semibold text-brand-navy text-sm">Ingreso por DNI</div>
                  <div className="text-xs text-slate-500 mt-1">Sin necesidad de QR</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="order-1 lg:order-2">
              <div className="relative bg-brand-dark rounded-3xl p-8 shadow-2xl flex items-center justify-center overflow-hidden" style={{ minHeight: '350px' }}>
                <div className="absolute inset-0 bg-dots opacity-10" />
                <div className="relative z-10 text-center">
                  <Smartphone className="w-20 h-20 text-brand-teal mx-auto mb-4" />
                  <div className="text-white font-display font-bold text-2xl">App Android</div>
                  <div className="text-slate-400 text-sm mt-1">Fichado con QR o DNI</div>
                  <div className="mt-6 flex gap-3 justify-center">
                    <div className="px-4 py-2 rounded-xl bg-brand-green/20 border border-brand-green/30 text-brand-teal text-xs font-semibold">QR Scanner</div>
                    <div className="px-4 py-2 rounded-xl bg-brand-teal/20 border border-brand-teal/30 text-brand-teal text-xs font-semibold">DNI Input</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-gradient-brand">
        <ScrollReveal className="container-max text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            ¿Listo para organizar tu gimnasio?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Probá e-Partners Gym gratis durante 30 días. Sin compromiso, sin tarjeta de crédito.
          </p>
          <a href="tel:+5403564-15688653" className="inline-flex items-center gap-2 bg-white text-brand-green font-bold px-8 py-4 rounded-2xl hover:bg-brand-greenLight transition-colors shadow-lg text-lg">
            Contactanos ahora <ArrowRight className="w-5 h-5" />
          </a>
        </ScrollReveal>
      </section>
    </main>
  );
}
