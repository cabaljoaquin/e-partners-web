import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { CheckCircle2 }  from 'lucide-react';
import ScrollReveal       from '../ui/ScrollReveal';
import SectionHeader      from '../ui/SectionHeader';
import { STATS, WHY_US } from '../../data/about';
import { useIsMobile } from '../../hooks/useIsMobile';

function StatItem({ icon: Icon, value, label }) {
  return (
    <div className="text-center relative z-10">
      <div className="w-10 h-10 rounded-xl bg-brand-greenLight mx-auto mb-2 flex items-center justify-center">
        <Icon className="w-5 h-5 text-brand-green" />
      </div>
      <div className="font-display font-bold text-2xl text-brand-navy">{value}</div>
      <div className="text-xs text-brand-gray mt-0.5">{label}</div>
    </div>
  );
}

function WhyUsItem({ text }) {
  return (
    <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-card hover:shadow-card-hover transition-all duration-300 group">
      <CheckCircle2 className="w-5 h-5 text-brand-green mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
      <span className="text-slate-700 text-[15px] leading-snug">{text}</span>
    </div>
  );
}

export default function About() {
  const isMobile = useIsMobile();
  // Centrado por defecto: en mobile el glow queda fijo en el centro (no hay mouse);
  // en desktop el valor inicial es irrelevante porque solo se ve en hover.
  const mouseX = useMotionValue(150);
  const mouseY = useMotionValue(150);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    if (isMobile) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section id="about" className="section-pad bg-brand-light">
      <div className="container-max">
        <ScrollReveal>
          <SectionHeader
            eyebrow="e-Partners SRL"
            title="¿Quiénes somos?"
            subtitle="Somos una Software Factory con más de 30 profesionales especializados en el ciclo completo del desarrollo de software."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <ScrollReveal delay={0.1}>
            <div 
              className="bg-white rounded-2xl p-8 shadow-card relative group overflow-hidden"
              onMouseMove={handleMouseMove}
            >
              <motion.div
                className="pointer-events-none absolute inset-0 transition duration-500 opacity-40 md:opacity-0 md:group-hover:opacity-100"
                style={{
                  background: useMotionTemplate`
                    radial-gradient(
                      650px circle at ${mouseX}px ${mouseY}px,
                      rgba(61, 155, 106, 0.08),
                      transparent 80%
                    )
                  `,
                  zIndex: 20,
                }}
              />
              <div className="relative z-10">
                <p className="text-slate-600 leading-relaxed mb-6 text-[15px]">
                  Nuestro equipo de profesionales combina metodologías probadas con las últimas herramientas de <strong>Inteligencia Artificial</strong> para el análisis, diseño, desarrollo, testing y gestión de proyectos a medida. Hemos evolucionado nuestro ADN tecnológico para desarrollar aplicaciones más eficientes y seguras, respaldados por nuestra amplia experiencia en compañías de seguros, empresas de retail y el sector público.
                </p>
                <p className="text-slate-600 leading-relaxed text-[15px]">
                  Trabajamos en modalidad <strong>outsourcing</strong>, integrando talento altamente calificado y potenciado por IA directamente a los equipos de nuestros clientes. Esta sinergia entre experiencia humana y tecnología de vanguardia nos permite garantizar continuidad, mayor velocidad de entrega y resultados de excelencia en cada proyecto.
                </p>
                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-100 bg-white/50 backdrop-blur-sm rounded-xl">
                  {STATS.map((stat) => (
                    <StatItem key={stat.label} {...stat} />
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <h3 className="font-display font-bold text-xl text-brand-navy mb-6 flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </span>
                ¿Por qué elegirnos?
              </h3>
              <div className="flex flex-col gap-3">
                {WHY_US.map((item, i) => (
                  <WhyUsItem key={i} text={item} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
