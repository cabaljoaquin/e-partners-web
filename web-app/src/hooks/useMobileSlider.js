import { useRef, useState, useEffect, useCallback } from 'react';

const AUTOPLAY_DELAY_MS = 3000;
const RESUME_GRACE_MS   = 800;
const MOBILE_BREAKPOINT = 768;

export function useMobileSlider(count) {
  const scrollRef   = useRef(null);
  const isPausedRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const [isVisible, setIsVisible] = useState(false);

  const scrollToCard = useCallback((idx) => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.children[idx];
    if (card) container.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
  }, []);

  const advance = useCallback(() => {
    setActiveIndex((prev) => {
      const next = (prev + 1) % count;
      scrollToCard(next);
      return next;
    });
  }, [count, scrollToCard]);

  // Track visibility of the entire slider container
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1 });
    
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Autoplay only when visible
  useEffect(() => {
    if (window.innerWidth >= MOBILE_BREAKPOINT) return;
    if (!isVisible) return; // Wait until the user scrolls to it

    const timer = setInterval(() => {
      if (!isPausedRef.current) advance();
    }, AUTOPLAY_DELAY_MS);
    return () => clearInterval(timer);
  }, [advance, isVisible]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const pause  = () => { isPausedRef.current = true; };
    const resume = () => setTimeout(() => { isPausedRef.current = false; }, RESUME_GRACE_MS);
    container.addEventListener('pointerdown',   pause);
    container.addEventListener('pointerup',     resume);
    container.addEventListener('pointercancel', resume);
    return () => {
      container.removeEventListener('pointerdown',   pause);
      container.removeEventListener('pointerup',     resume);
      container.removeEventListener('pointercancel', resume);
    };
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const observers = Array.from(container.children).map((card, idx) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) setActiveIndex(idx);
        },
        { root: container, threshold: 0.5 }
      );
      observer.observe(card);
      return observer;
    });
    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return { scrollRef, activeIndex, scrollToCard };
}
