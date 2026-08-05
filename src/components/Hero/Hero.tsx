import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { weddingConfig } from '../../config/weddingConfig';
import { CountdownDisplay } from '../Countdown/Countdown';

const dateFormatter = new Intl.DateTimeFormat('es-AR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

export function Hero() {
  const weddingDate = new Date(weddingConfig.weddingDateISO);
  const formattedDate = dateFormatter.format(weddingDate);
  const capitalized = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ['0px', '20px']);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-ink"
    >
      <motion.img
        src={weddingConfig.heroImage}
        alt=""
        role="presentation"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ y: imageY }}
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full px-6 pb-16 pt-32 text-center sm:pb-20">
        <motion.h1
          className="font-display text-6xl font-semibold text-paper sm:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {weddingConfig.partnerOneName}
          <span className="mx-4 font-display text-paper/80 sm:mx-6">&amp;</span>
          {weddingConfig.partnerTwoName}
        </motion.h1>

        <motion.p
          className="mt-5 font-display text-lg text-paper/90 sm:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {capitalized}
        </motion.p>

        <motion.div
          className="mt-9 flex justify-center"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <CountdownDisplay compact onImage />
        </motion.div>
      </div>
    </section>
  );
}