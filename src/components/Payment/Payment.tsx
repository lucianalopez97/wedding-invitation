import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wallet, Copy, Check } from 'lucide-react';
import { weddingConfig } from '../../config/weddingConfig';
import { SectionTitle } from '../shared/SectionTitle';
import { SectionCard } from '../shared/SectionCard';
import type { PaymentDetail } from '../../types';

const COPY_FEEDBACK_MS = 1500;

function PaymentRow({ detail }: { detail: PaymentDetail }) {
  const [justCopied, setJustCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(detail.value);
      setJustCopied(true);
      window.setTimeout(() => setJustCopied(false), COPY_FEEDBACK_MS);
    } catch {
      // fail silently
    }
  }

  return (
    <div className="flex items-center justify-between gap-4 border-b border-ink/10 py-4 last:border-b-0">
      <div>
        <p className="font-body text-xs uppercase tracking-widest2 text-ink-faint">
          {detail.label}
        </p>
        <p className="mt-1 font-body text-sm font-medium text-ink sm:text-base">{detail.value}</p>
      </div>

      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copiar ${detail.label}`}
        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
      >
        {justCopied ? (
          <Check size={15} className="text-sage" aria-hidden="true" />
        ) : (
          <Copy size={15} aria-hidden="true" />
        )}
      </button>
    </div>
  );
}

export function Payment() {
  const { eyebrow, title, description, details } = weddingConfig.payment;

  return (
    <section id="payment" className="bg-paper-soft px-6 py-24">
      <SectionTitle eyebrow={eyebrow} title={title} subtitle={description} />

      <div className="mx-auto mt-12 max-w-md">
        <SectionCard>
          <motion.div
            className="mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-gold-light text-gold"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Wallet size={24} strokeWidth={1.5} aria-hidden="true" />
          </motion.div>

          <div className="mt-2">
            {details.map((detail) => (
              <PaymentRow key={detail.label} detail={detail} />
            ))}
          </div>
        </SectionCard>
      </div>
    </section>
  );
}