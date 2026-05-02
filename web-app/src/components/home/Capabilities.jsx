import { motion }        from 'framer-motion';
import { CAPABILITIES } from '../../data/capabilities';

const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0  },
};

function CapabilityPill({ text, icon: Icon, delay }) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="flex items-center gap-2.5 px-5 py-2.5 bg-white rounded-full shadow-sm border border-slate-100 hover:border-brand-green/30 hover:shadow-md transition-all group"
    >
      <div className="w-8 h-8 rounded-full bg-brand-green/10 flex items-center justify-center group-hover:bg-brand-green transition-colors">
        <Icon className="w-4 h-4 text-brand-green group-hover:text-white transition-colors" />
      </div>
      <span className="text-sm font-semibold text-slate-700 group-hover:text-brand-navy transition-colors">
        {text}
      </span>
    </motion.div>
  );
}

export default function Capabilities() {
  return (
    <section className="bg-brand-light py-10 border-y border-brand-teal/10 overflow-hidden">
      <div className="container-max">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {CAPABILITIES.map((cap, i) => (
            <CapabilityPill key={cap.text} text={cap.text} icon={cap.icon} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
