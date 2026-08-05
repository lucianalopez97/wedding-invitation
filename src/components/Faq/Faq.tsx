import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { weddingConfig } from '../../config/weddingConfig';
import { SectionTitle } from '../shared/SectionTitle';
import type { FaqItem } from '../../types';

interface FaqRowProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  delay: number;
}

/**
 * One question/answer row. Purely presentational — open/close state and
 * the "only one at a time" rule live in the parent <Faq /> component.
 */
function FaqRow({ item, isOpen, onToggle, delay }: FaqRowProps) {
  const panelId = `faq-panel-${item.id}`;
  const buttonId = `faq-button-${item.id}`;

  return (
    <motion.div
      className="overflow-hidden rounded-2xl border border-ink/10 bg-paper-card transition-colors duration-300 hover:border-gold/40"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8 sm:py-6"
        >
          <span className="font-heading text-lg text-ink sm:text-xl">{item.question}</span>
          <motion.span
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0 text-gold"
          >
            <ChevronDown size={20} aria-hidden="true" />
          </motion.span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 font-body text-sm leading-relaxed text-ink-soft sm:px-8 sm:pb-8 sm:text-base">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/**
 * <Faq />
 * -------
 * "Frequently Asked Questions" section — a single-open accordion placed
 * immediately after the Timeline.
 *
 * CONFIGURATION
 * -------------
 * `weddingConfig.faq` is an array of `{ id, question, answer }`. Add or
 * remove entries there to grow or shrink the list — this component only
 * maps over the array and manages which one is currently expanded.
 */
export function Faq() {
  // Tracks the id of the currently expanded question, or null if all are
  // collapsed. Setting a new id automatically collapses any previous one,
  // enforcing "only one question expanded at a time".
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="bg-paper px-6 py-24">
      <SectionTitle eyebrow="Preguntas" title="Preguntas Frecuentes" />

      <div className="mx-auto mt-14 flex max-w-2xl flex-col gap-4">
        {weddingConfig.faq.map((item, index) => (
          <FaqRow
            key={item.id}
            item={item}
            isOpen={openId === item.id}
            onToggle={() => setOpenId((current) => (current === item.id ? null : item.id))}
            delay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
}
