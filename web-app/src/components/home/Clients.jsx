import ScrollReveal from '../ui/ScrollReveal';
import SectionHeader from '../ui/SectionHeader';
import whatsappIcon from '../../assets/images/whatsapp.png';
import { clients } from '../../data/clients';
import { Building2 } from 'lucide-react';

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
        <img src={logo} alt={name} className="max-w-full max-h-full object-contain drop-shadow-sm" />
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {clients.map((client, idx) => (
            <ScrollReveal key={client.id} delay={idx * 0.08}>
              <div className="card p-6 hover:border-brand-green/30 border border-transparent transition-colors">
                <div className="flex items-start gap-4 mb-3">
                  <ClientInitial name={client.shortName} color={client.color} logo={client.logo} />
                  <div>
                    <h4 className="font-display font-bold text-brand-navy text-base leading-tight">
                      {client.name}
                    </h4>
                    <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-brand-gray">
                      {client.industry}
                    </span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {client.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center bg-gradient-brand rounded-2xl p-10">
            <Building2 className="w-10 h-10 text-white/80 mx-auto mb-4" />
            <h3 className="font-display font-bold text-2xl text-white mb-2">
              ¿Tu empresa podría ser la próxima?
            </h3>
            <p className="text-white/80 mb-6">
              Contáctanos y exploremos juntos cómo podemos potenciar tu proyecto.
            </p>
            <a
              href="https://wa.me/5493564688653"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-brand-green font-semibold px-6 py-3 rounded-xl hover:bg-brand-greenLight transition-colors"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
              03564 - 15688653
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
