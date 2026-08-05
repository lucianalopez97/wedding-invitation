import { motion } from 'framer-motion';
import { CheckCircle2, Gift } from 'lucide-react';
import { weddingConfig } from '../../config/weddingConfig';
import { SectionTitle } from '../shared/SectionTitle';
import { RSVPButton } from './RSVPButton';
import { BotanicalOrnament } from '../shared/BotanicalOrnament';

/**
 * <RSVPSection />
 * ---------------
 * RSVP section. Renders two stacked, identically-styled buttons via the
 * shared <RSVPButton />:
 *   1. "Confirmar Asistencia" → `weddingConfig.rsvpUrl`
 *   2. "Gift Registry" → `weddingConfig.giftRegistryUrl`
 *
 * Both open an external link in a new tab — neither is an embedded form.
 * To change either destination, edit the corresponding URL in
 * `weddingConfig.ts`; no component changes are needed.
 */
export function RSVPSection() {
  return (
    <section id="rsvp" className="bg-paper px-6 py-24 text-center">
      <SectionTitle
        eyebrow="Antes de irte..."
        title="¿Nos Acompañás?"
        subtitle="Contanos si vas a estar con nosotros antes del 17 de septiembre de 2026."
      />

      <motion.div
        className="mt-10 flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <RSVPButton href={weddingConfig.rsvpUrl} label="Confirmar Asistencia" icon={CheckCircle2} />
        <RSVPButton href={weddingConfig.giftRegistryUrl} label="Por si querés hacernos un regalo..." icon={Gift} />

        <div className="mt-6 text-gold">
          <BotanicalOrnament className="h-8 w-32" />
        </div>
      </motion.div>
    </section>
  );
}
