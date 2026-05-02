import { clients } from '../../data/clients';

export default function SocialProof() {
  return (
    <section id="social-proof" className="bg-white border-b border-slate-100 py-10 overflow-hidden">
      <div className="container-max text-center mb-6">
        <p className="text-xs font-semibold tracking-widest uppercase text-slate-400">
          Confían en nosotros
        </p>
      </div>
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee flex gap-12 sm:gap-24 items-center whitespace-nowrap px-8">
          {[...clients, ...clients, ...clients].map((client, i) => (
            <span 
              key={`${client.id}-${i}`} 
              className="text-xl md:text-2xl font-display font-medium text-slate-300 hover:text-brand-teal transition-colors duration-300 cursor-default"
            >
              {client.shortName}
            </span>
          ))}
        </div>
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
