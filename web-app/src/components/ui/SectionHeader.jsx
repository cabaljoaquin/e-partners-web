export default function SectionHeader({ eyebrow, title, subtitle, light = false, center = true }) {
  return (
    <div className={`mb-14 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="inline-block text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className={`section-title ${light ? 'text-white' : 'text-brand-navy'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`section-subtitle max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-slate-300' : ''}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-5 w-16 h-1 rounded-full bg-gradient-brand ${center ? 'mx-auto' : ''}`} />
    </div>
  );
}
