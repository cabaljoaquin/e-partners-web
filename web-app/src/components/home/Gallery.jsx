import { useEffect } from 'react';
import ScrollReveal  from '../ui/ScrollReveal';
import SectionHeader from '../ui/SectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, EffectFlip, Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1         from '../../assets/images/1n.jpeg';
import img2         from '../../assets/images/2n.jpeg';
import img4         from '../../assets/images/4n.jpeg';
import img5         from '../../assets/images/5n.jpeg';
import img6         from '../../assets/images/7n.jpeg';
import img7         from '../../assets/images/8n.jpeg';
import epartnersImg from '../../assets/images/e-partners.webp';
import banner2Img   from '../../assets/images/banner-2.webp';

const IMAGES = [img1, img2, img4, img5, img6, img7, epartnersImg, banner2Img];

export default function Gallery() {
  // Precargamos las imágenes al montar el componente para calentar la caché del
  // navegador. Así, cuando el usuario llega scrolleando a esta sección, las fotos
  // ya están descargadas y decodificadas: se evita el "pestañeo" de carga.
  useEffect(() => {
    IMAGES.forEach((src) => {
      const img = new Image();
      img.src = src;
      if (img.decode) img.decode().catch(() => {});
    });
  }, []);

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

      {/* Desktop – Coverflow */}
      <ScrollReveal className="hidden md:block mt-10 w-full pb-12">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Keyboard]}
          className="gallery-coverflow-swiper"
        >
          {IMAGES.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-sm bg-slate-100">
                <img
                  src={src}
                  alt={`Equipo e-Partners trabajando — foto ${i + 1}`}
                  width="800"
                  height="600"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center saturate-[0.9] contrast-[1.05] brightness-[1.02]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ScrollReveal>

      {/* Mobile – Flip */}
      <ScrollReveal className="md:hidden mt-10 px-6 pb-10">
        <Swiper
          style={{
            '--swiper-navigation-color': '#3D9B6A',
            '--swiper-pagination-color': '#3D9B6A',
          }}
          effect="flip"
          grabCursor={true}
          loop={true}
          keyboard={{ enabled: true }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectFlip, Navigation, Pagination, Keyboard]}
          className="gallery-flip-swiper"
        >
          {IMAGES.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-md bg-slate-100">
                <img
                  src={src}
                  alt={`Equipo e-Partners trabajando — foto ${i + 1}`}
                  width="800"
                  height="600"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center saturate-[0.9] contrast-[1.05] brightness-[1.02]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </ScrollReveal>
    </section>
  );
}
