import { motion } from 'framer-motion';
import { CheckCircle2, Wallet } from 'lucide-react';
import { weddingConfig } from '../../config/weddingConfig';
import { SectionTitle } from '../shared/SectionTitle';
import { RSVPButton } from './RSVPButton';
import { BotanicalOrnament } from '../shared/BotanicalOrnament';

export function RSVPSection() {
  return (
    <section id="rsvp" className="bg-paper px-6 py-24 text-center">
      <SectionTitle
        eyebrow="Confirmación"
        title="¿Nos Acompañás?"
        subtitle="Contanos si vas a estar con nosotros hasta el 17 de septiembre de 2026."
      />

      <motion.div
        className="mt-10 flex flex-col items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <RSVPButton href={weddingConfig.rsvpUrl} label="Confirmar Asistencia" icon={CheckCircle2} />
        <RSVPButton to="/regalo" label="Datos para Regalo" icon={Wallet} />

        <div className="mt-6 text-gold">
          <BotanicalOrnament className="h-8 w-32" />
        </div>
      </motion.div>
    </section>
  );
}