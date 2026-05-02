import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import ScrollReveal   from '../ui/ScrollReveal';
import SectionHeader  from '../ui/SectionHeader';
import { PILLARS }    from '../../data/pillars';
import { useMobileSlider } from '../../hooks/useMobileSlider';

function PillarCard({ pillar }) {
  const Icon   = pillar.icon;
  const isTeal = pillar.color === 'brand-teal';

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const mouseX = useMotionValue(isMobile ? 150 : 0);
  const mouseY = useMotionValue(isMobile ? 150 : 0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    if (isMobile) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div 
      className="card relative group h-full flex flex-col border border-slate-100 hover:border-brand-green/30 hover:shadow-xl transition-all duration-300"
      onMouseMove={handleMouseMove}
    >
      <div className="relative z-10 flex flex-col h-full rounded-2xl overflow-hidden">
        <motion.div
          className="pointer-events-none absolute inset-0 transition duration-500 opacity-40 md:opacity-0 md:group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                650px circle at ${mouseX}px ${mouseY}px,
                ${isTeal ? 'rgba(45, 122, 126, 0.08)' : 'rgba(61, 155, 106, 0.08)'},
                transparent 80%
              )
            `,
            zIndex: 20,
          }}
        />
        
        <div className="relative z-10 p-8 pb-6 bg-gradient-to-b from-slate-50 to-white">
          <div className="flex items-center gap-4 mb-5">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm ${isTeal ? 'bg-brand-teal/10' : 'bg-brand-green/10'}`}>
              <Icon className={`w-7 h-7 ${isTeal ? 'text-brand-teal' : 'text-brand-green'}`} />
            </div>
            <h3 className="font-display font-bold text-xl text-brand-navy leading-tight">
              {pillar.title}
            </h3>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">{pillar.description}</p>
        </div>

        <div className="px-8 pb-6 flex-1 bg-white">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Qué hacemos</h4>
          <ul className="flex flex-col gap-2.5 mb-6">
            {pillar.actions.map((action, i) => (
              <li key={i} className="flex items-start gap-2">
                <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${isTeal ? 'bg-brand-teal' : 'bg-brand-green'}`} />
                <span className="text-sm text-slate-700 font-medium">{action}</span>
              </li>
            ))}
          </ul>
          <div className={`p-4 rounded-xl border bg-white/80 backdrop-blur-sm ${isTeal ? 'border-brand-teal/10' : 'border-brand-green/10'}`}>
            <h4 className={`text-xs font-bold uppercase tracking-widest mb-1.5 ${isTeal ? 'text-brand-teal' : 'text-brand-green'}`}>
              Cómo suma la IA
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">{pillar.aiBoost}</p>
          </div>
        </div>

        <div className={`px-8 py-5 mt-auto border-t flex items-center justify-between ${isTeal ? 'bg-brand-teal text-white border-brand-teal' : 'bg-brand-green text-white border-brand-green'}`}>
          <span className="text-xs font-bold uppercase tracking-wider opacity-80 shrink-0">Resultado</span>
          <span className="text-sm font-semibold text-right leading-tight max-w-[75%]">{pillar.result}</span>
        </div>
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
          aria-label={`Ir al servicio ${idx + 1}`}
          className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
            activeIndex === idx ? 'bg-brand-green w-8' : 'bg-slate-200 hover:bg-slate-300 w-2.5'
          }`}
        />
      ))}
    </div>
  );
}

export default function Services() {
  const { scrollRef, activeIndex, scrollToCard } = useMobileSlider(PILLARS.length);

  return (
    <section id="services" className="section-pad bg-white">
      <div className="container-max">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Nuestros Servicios"
            title="Evolución y Salud de Software"
            subtitle="Cubrimos el ciclo de vida completo de tus sistemas, combinando rigor técnico e Inteligencia Artificial."
          />
        </ScrollReveal>

        <div className="hidden md:grid grid-cols-2 gap-8 mt-12">
          {PILLARS.map((pillar, idx) => (
            <ScrollReveal key={pillar.id} delay={idx * 0.1}>
              <PillarCard pillar={pillar} />
            </ScrollReveal>
          ))}
        </div>

        <div className="md:hidden mt-10">
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 px-4 pb-4 -mb-4 snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {PILLARS.map((pillar) => (
              <div key={pillar.id} className="flex-shrink-0 w-[88vw] snap-start">
                <PillarCard pillar={pillar} />
              </div>
            ))}
          </div>
          <SliderDots total={PILLARS.length} activeIndex={activeIndex} onDotClick={scrollToCard} />
        </div>
      </div>
    </section>
  );
}
