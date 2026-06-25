import ScrollReveal        from '../ui/ScrollReveal';
import { TECH_CATEGORIES } from '../../data/technologies';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

function TechCard({ category }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-brand-teal/30 transition-all h-full">
      <h3 className="font-bold text-brand-navy mb-4 text-sm uppercase tracking-wide border-b border-slate-50 pb-3">
        {category.title}
      </h3>
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

export default function Technologies() {
  return (
    <section id="technologies" className="section-pad bg-brand-light border-y border-brand-teal/10">
      <div className="container-max">
        <ScrollReveal className="text-center mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-green mb-2">Stack Tecnológico</p>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-brand-navy">
            Las herramientas con las que construimos y evolucionamos
          </h2>
        </ScrollReveal>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_CATEGORIES.map((category, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1}>
              <TechCard category={category} />
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile Cube Slider */}
        <div className="md:hidden flex justify-center pb-12">
          <Swiper
            effect="cube"
            grabCursor={true}
            loop={true}
            cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 16, shadowScale: 0.92 }}
            pagination={{ clickable: true }}
            modules={[EffectCube, Pagination]}
            className="w-[80vw]"
            style={{ paddingBottom: '2.5rem' }}
          >
            {TECH_CATEGORIES.map((category, idx) => (
              <SwiperSlide key={idx}>
                <TechCard category={category} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

