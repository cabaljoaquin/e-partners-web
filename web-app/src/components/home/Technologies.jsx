import ScrollReveal        from '../ui/ScrollReveal';
import { TECH_CATEGORIES } from '../../data/technologies';
import { useMobileSlider } from '../../hooks/useMobileSlider';

function TechCard({ category }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-teal/30 transition-all h-full">
      <h4 className="font-bold text-brand-navy mb-4 text-sm uppercase tracking-wide border-b border-slate-50 pb-3">
        {category.title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {category.techs.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-600 text-xs font-semibold rounded-lg hover:bg-brand-teal/10 hover:text-brand-teal hover:border-brand-teal/20 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function SliderDots({ total, activeIndex, onDotClick }) {
  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: total }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onDotClick(idx)}
          aria-label={`Ir a categoría ${idx + 1}`}
          className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
            activeIndex === idx ? 'bg-brand-green w-8' : 'bg-slate-200 hover:bg-slate-300 w-2.5'
          }`}
        />
      ))}
    </div>
  );
}

export default function Technologies() {
  const { scrollRef, activeIndex, scrollToCard } = useMobileSlider(TECH_CATEGORIES.length);

  return (
    <section id="technologies" className="section-pad bg-brand-light border-y border-brand-teal/10">
      <div className="container-max">
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand-green mb-2">Stack Tecnológico</h2>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-brand-navy">
            Las herramientas con las que construimos y evolucionamos
          </h3>
        </ScrollReveal>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_CATEGORIES.map((category, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <TechCard category={category} />
            </ScrollReveal>
          ))}
        </div>

        <div className="md:hidden">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 px-4 pb-4 -mb-4 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {TECH_CATEGORIES.map((category, idx) => (
              <div key={idx} className="flex-shrink-0 w-[88vw] snap-start">
                <TechCard category={category} />
              </div>
            ))}
          </div>
          <SliderDots total={TECH_CATEGORIES.length} activeIndex={activeIndex} onDotClick={scrollToCard} />
        </div>
      </div>
    </section>
  );
}
