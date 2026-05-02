import ScrollReveal from '../ui/ScrollReveal';

export default function FinalCTA() {
  return (
    <section className="bg-gradient-brand py-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-teal/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container-max relative z-10">
        <ScrollReveal className="text-center max-w-4xl mx-auto">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-white leading-tight mb-8">
            Una software factory que no solo desarrolla, <span className="block mt-2 text-emerald-300">sino que mejora la salud de los sistemas.</span>
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 font-light px-4">
            Combinamos experiencia en sistemas complejos con inteligencia artificial para ayudarte a entender, mejorar y construir soluciones que puedan evolucionar en el tiempo.
          </p>
          <a
            href="https://wa.me/5493564688653"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-brand-green font-bold px-8 py-4 rounded-xl hover:bg-brand-greenLight transition-all shadow-xl group"
          >
            Conversemos sobre tus sistemas
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
