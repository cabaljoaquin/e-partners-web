import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VerticalExpoSlider({ items, renderItem }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDragEnd = (event, info) => {
    // swipe up (next card)
    if (info.offset.y < -50 && activeIndex < items.length - 1) {
      setActiveIndex(prev => prev + 1);
    }
    // swipe down (prev card)
    else if (info.offset.y > 50 && activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
    }
  };

  return (
    <div className="relative w-full h-[380px] flex justify-center items-start mt-8">
      <AnimatePresence initial={false}>
        {items.map((item, i) => {
          // Hide cards that are far away to improve performance
          if (i < activeIndex - 1 || i > activeIndex + 3) return null;
          
          const isSwipedAway = i < activeIndex;
          const isActive = i === activeIndex;
          const offset = i - activeIndex; // 0, 1, 2...

          return (
            <motion.div
              key={item.id || i}
              drag={isActive ? "y" : false}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.6}
              onDragEnd={isActive ? handleDragEnd : undefined}
              initial={false}
              animate={{
                y: isSwipedAway ? -500 : offset * 30,
                scale: isSwipedAway ? 0.9 : 1 - offset * 0.06,
                opacity: isSwipedAway ? 0 : 1 - offset * 0.3,
                zIndex: items.length - i,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className={`absolute w-full max-w-sm rounded-2xl shadow-card bg-white border border-slate-100 overflow-hidden ${isActive ? 'cursor-grab active:cursor-grabbing' : ''}`}
              style={{ originY: 0 }}
            >
              {/* Pagination Dots Indicator inside the top right or just the card content */}
              <div className="relative h-full">
                {renderItem(item, isActive)}
                
                {/* Visual indicator for swiping (optional, but good UX) */}
                {isActive && (
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-50">
                     {items.map((_, idx) => (
                       <div key={idx} className={`h-1.5 rounded-full transition-all ${idx === activeIndex ? 'w-4 bg-brand-green' : 'w-1.5 bg-slate-300'}`} />
                     ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* External Pagination Dots */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-1.5">
        {items.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? 'w-5 bg-brand-green' : 'w-1.5 bg-slate-200'}`} 
          />
        ))}
      </div>
    </div>
  );
}
