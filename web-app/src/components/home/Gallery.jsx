import { useState, useEffect, useCallback } from 'react';
import { motion }      from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal    from '../ui/ScrollReveal';
import SectionHeader   from '../ui/SectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import img1         from '../../assets/images/1n.jpeg';
import img2         from '../../assets/images/2n.jpeg';
import img4         from '../../assets/images/4n.jpeg';
import img5         from '../../assets/images/5n.jpeg';
import img6         from '../../assets/images/7n.jpeg';
import img7         from '../../assets/images/8n.jpeg';
import epartnersImg from '../../assets/images/e-partners.png';
import banner2Img   from '../../assets/images/banner-2.jpg';

const IMAGES = [img1, img2, img4, img5, img6, img7, epartnersImg, banner2Img];
const AUTOPLAY_DELAY_MS = 3500;

function useItemsPerPage() {
  const getCount = () => {
    if (window.innerWidth < 640)  return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [count, setCount] = useState(getCount);

  useEffect(() => {
    const handleResize = () => setCount(getCount());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return count;
}

function NavButton({ direction, onClick }) {
  const Icon          = direction === 'left' ? ChevronLeft : ChevronRight;
  const positionClass = direction === 'left' ? 'left-4 md:left-10' : 'right-4 md:right-10';

  return (
    <button
      onClick={onClick}
      className={`absolute ${positionClass} top-1/2 -translate-y-1/2 z-10 p-2.5 md:p-3 bg-white/90 backdrop-blur border border-slate-100 text-brand-navy rounded-full shadow-lg hover:bg-brand-green hover:text-white transition-all duration-300 focus:outline-none`}
      aria-label={direction === 'left' ? 'Anterior' : 'Siguiente'}
    >
      <Icon className="w-6 h-6" />
    </button>
  );
}

function SliderDots({ total, activeIndex, onDotClick }) {
  return (
    <div className="flex justify-center gap-2 mt-6">
      {Array.from({ length: total }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onDotClick(idx)}
          aria-label={`Ir a foto ${idx + 1}`}
          className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
            activeIndex === idx ? 'bg-brand-green w-8' : 'bg-slate-200 hover:bg-slate-300 w-2.5'
          }`}
        />
      ))}
    </div>
  );
}

export default function Gallery() {
  const itemsPerPage = useItemsPerPage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const maxIndex = Math.max(0, IMAGES.length - itemsPerPage);
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [itemsPerPage, currentIndex]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev >= IMAGES.length - itemsPerPage ? 0 : prev + 1
    );
  }, [itemsPerPage]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, IMAGES.length - itemsPerPage) : prev - 1
    );
  }, [itemsPerPage]);

  useEffect(() => {
    const timer = setInterval(nextSlide, AUTOPLAY_DELAY_MS);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const totalDots = Math.max(0, IMAGES.length - itemsPerPage + 1);

  return (
    <section id="gallery" className="section-pad bg-white overflow-hidden">
      <div className="container-max">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Nuestro Espacio"
            title="Galería del Equipo"
            subtitle="Conocé nuestro entorno de trabajo, donde creamos las soluciones que potencian a nuestros clientes."
          />
        </ScrollReveal>
      </div>

      {/* Desktop slider */}
      <div className="hidden md:block relative mt-10 w-full max-w-[1536px] mx-auto px-4 md:px-8">
        <NavButton direction="left"  onClick={prevSlide} />
        <NavButton direction="right" onClick={nextSlide} />

        <div className="overflow-hidden py-4">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.8 }}
          >
            {IMAGES.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-2 md:px-4"
                style={{ width: `${100 / itemsPerPage}%` }}
              >
                <div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-slate-50 aspect-[4/3] w-full">
                  <img
                    src={src}
                    alt={`Equipo ${i + 1}`}
                    className="w-full h-full object-cover object-center saturate-[0.9] contrast-[1.05] brightness-[1.02] transition-transform duration-700 pointer-events-none"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5 rounded-2xl pointer-events-none" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <SliderDots total={totalDots} activeIndex={currentIndex} onDotClick={setCurrentIndex} />
      </div>

      {/* Mobile Cube Slider */}
      <div className="md:hidden flex justify-center mt-10 px-4 pb-10">
        <Swiper
          effect="cube"
          grabCursor={true}
          loop={true}
          cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94 }}
          pagination={{ clickable: true }}
          modules={[EffectCube, Pagination]}
          className="w-[82vw]"
        >
          {IMAGES.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <img
                  src={src}
                  alt={`Equipo ${i + 1}`}
                  className="w-full h-full object-cover object-center saturate-[0.9] contrast-[1.05] brightness-[1.02]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

