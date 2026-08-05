import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { weddingConfig } from '../../config/weddingConfig';
import type { DressCodeItem } from '../../types';

function DressCodeRow({ item, delay }: { item: DressCodeItem; delay: number }) {
  return (
    <motion.li
      className="flex items-center gap-3 border-b border-paper/10 py-3 last:border-b-0"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {item.allowed ? (
        <Check size={16} className="flex-shrink-0 text-gold" aria-hidden="true" />
      ) : (
        <X size={16} className="flex-shrink-0 text-paper/30" aria-hidden="true" />
      )}
      <span
        className={
          item.allowed
            ? 'font-body text-sm font-semibold text-paper sm:text-base'
            : 'font-body text-sm text-paper/40 sm:text-base'
        }
      >
        {item.text}
      </span>
    </motion.li>
  );
}

export function DressCode() {
  const { eyebrow, title, columns, avoid, note } = weddingConfig.dressCode;

  return (
    <section id="dress-code" className="bg-midnight px-6 py-24">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-body text-xs font-semibold uppercase tracking-widest2 text-paper/50">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-6xl font-semibold text-paper sm:text-7xl">
            {title}
          </h2>
          <div className="mt-5 h-px w-12 bg-paper/25" aria-hidden="true" />
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8">
          {columns.map((column, columnIndex) => (
            <div
              key={column.label}
              className={columnIndex === 1 ? 'sm:border-l sm:border-paper/10 sm:pl-8' : undefined}
            >
              <motion.p
                className="font-body text-xs font-semibold uppercase tracking-widest2 text-paper/50"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
              >
                {column.label}
              </motion.p>
              <ul className="mt-3">
                {column.items.map((item, itemIndex) => (
                  <DressCodeRow
                    key={item.text}
                    item={item}
                    delay={columnIndex * 0.1 + itemIndex * 0.06}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>

        <motion.div
          className="mt-10 flex flex-col items-start gap-4 border-t border-paper/10 pt-8 sm:flex-row sm:items-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-shrink-0 gap-2">
            {avoid.swatches.map((color) => (
              <span
                key={color}
                className="h-9 w-9 rounded-md border border-paper/15"
                style={{ backgroundColor: color }}
                aria-hidden="true"
              />
            ))}
          </div>
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest2 text-paper/50">
              {avoid.label}
            </p>
            <p className="mt-1 font-body text-sm font-semibold leading-relaxed text-paper sm:text-base">
              {avoid.description}
            </p>
          </div>
        </motion.div>

        <motion.p
          className="mt-10 border-t border-paper/10 pt-8 font-body text-sm italic leading-relaxed text-paper/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {note}
        </motion.p>
      </div>
    </section>
  );
}