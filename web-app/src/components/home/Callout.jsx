import ScrollReveal from '../ui/ScrollReveal';
import { Quote } from 'lucide-react';

export default function Callout() {
  return (
    <section className="bg-gradient-brand py-16">
      <div className="container-max">
        <ScrollReveal className="text-center">
          <Quote className="w-10 h-10 text-white/40 mx-auto mb-5" />
          <blockquote className="font-display font-bold text-2xl md:text-3xl text-white leading-snug max-w-3xl mx-auto mb-4">
            Entendemos la importancia de nuestro trabajo y lo reflejamos en la
            calidad de los servicios que brindamos.
          </blockquote>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Nos alineamos con los objetivos de nuestros partners apoyándonos en herramientas de inteligencia artificial y agilidad para asegurar el éxito de cada proyecto.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
