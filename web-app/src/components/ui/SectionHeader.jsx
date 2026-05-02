import { motion } from 'framer-motion';

const wordVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function SectionHeader({ eyebrow, title, subtitle, light = false, center = true }) {
  const titleWords = title.split(' ');

  return (
    <div className={`mb-14 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <span className="inline-block text-brand-green font-semibold text-sm uppercase tracking-widest mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className={`section-title ${light ? 'text-white' : 'text-brand-navy'} flex flex-wrap gap-x-2 gap-y-1 ${center ? 'justify-center' : ''}`}>
        {titleWords.map((word, i) => (
          <motion.span key={i} variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        ))}
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
