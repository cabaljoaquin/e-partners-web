import ScrollReveal from '../ui/ScrollReveal';
import SectionHeader from '../ui/SectionHeader';
import whatsappIcon from '../../assets/images/whatsapp.png';
import { clients } from '../../data/clients';
import { Building2 } from 'lucide-react';
import VerticalExpoSlider from './VerticalExpoSlider';

function ClientInitial({ name, color, logo }) {
  if (logo) {
    const isPoket = name === 'Poket';
    const isMuni = name === 'Municipalidad SF';

    let bgStyle = undefined;
    let extraClasses = '';

    if (isPoket) {
      bgStyle = { background: 'linear-gradient(135deg, #00d2d3 15%, #8334ab 85%)' };
      extraClasses = 'rounded-lg p-1.5';
    } else if (isMuni) {
      bgStyle = { backgroundColor: '#009ae0' };
      extraClasses = 'rounded-lg p-1.5';
    }

    return (
      <div
        className={`w-16 h-12 flex items-center justify-center shrink-0 ${extraClasses}`}
        style={bgStyle}
      >
        <img src={logo} alt={`Logo de ${name}`} loading="lazy" decoding="async" className="max-w-full max-h-full object-contain drop-shadow-sm" />
      </div>
    );
  }

  return (
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-display font-bold text-lg shrink-0"
      style={{ background: color }}
    >
      {name.charAt(0)}
    </div>
  );
}

export default function Clients() {
  const renderClientCard = (client, isActive) => (
    <div className={`p-6 md:p-8 h-full flex flex-col transition-colors duration-300 ${isActive ? 'bg-white' : 'bg-slate-50'}`}>
      <div className="flex items-start gap-4 mb-4">
        <ClientInitial name={client.shortName} color={client.color} logo={client.logo} />
        <div>
          <h3 className="font-display font-bold text-brand-navy text-lg md:text-xl leading-tight">
            {client.name}
          </h3>
          <span className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-brand-gray">
            {client.industry}
          </span>
        </div>
      </div>
      <p className="text-slate-600 text-sm md:text-base leading-relaxed flex-1">
        {client.description}
      </p>
    </div>
  );

  return (
    <section id="clients" className="section-pad bg-brand-light">
      <div className="container-max">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Quienes confiaron en nosotros"
            title="Nuestros Clientes"
            subtitle="Hemos trabajado con empresas líderes en seguros, retail, tecnología, turismo y minería a nivel nacional e internacional."
          />
        </ScrollReveal>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-2 gap-6 mb-16">
          {clients.map((client, idx) => (
            <ScrollReveal key={client.id} delay={idx * 0.08} className="h-full">
              <div className="card h-full hover:border-brand-green/30 border border-transparent transition-colors">
                {renderClientCard(client, true)}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile Vertical Expo Slider View */}
        <div className="md:hidden mb-20 relative">
          <VerticalExpoSlider 
            items={clients} 
            renderItem={renderClientCard} 
          />
          <p className="text-center text-[11px] text-slate-400 mt-14 uppercase tracking-widest font-semibold flex items-center justify-center gap-2">
            <span className="w-4 h-px bg-slate-300"></span>
            Deslizá hacia arriba
            <span className="w-4 h-px bg-slate-300"></span>
          </p>
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center bg-gradient-brand rounded-2xl p-10">
            <Building2 className="w-10 h-10 text-white/80 mx-auto mb-4" />
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              ¿Tu empresa podría ser la próxima?
            </h3>
            <p className="text-white/80 mb-6">
              Contactanos y exploremos juntos cómo podemos potenciar tu proyecto.
            </p>
            <a
              href="https://wa.me/5493564688653"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand-green font-semibold px-6 py-3 rounded-xl hover:bg-brand-greenLight transition-colors"
            >
              <img src={whatsappIcon} alt="WhatsApp" width="20" height="20" loading="lazy" decoding="async" className="w-5 h-5" />
              03564 - 15688653
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
