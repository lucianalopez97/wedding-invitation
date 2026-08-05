import { weddingConfig } from '../../config/weddingConfig';
import { BotanicalOrnament } from '../shared/BotanicalOrnament';

/**
 * Simple closing footer. Content comes from `weddingConfig.footer`.
 */
export function Footer() {
  const weddingYear = new Date(weddingConfig.weddingDateISO).getFullYear();

  return (
    <footer className="bg-ink px-6 py-16 text-center text-paper">
      <div className="mx-auto max-w-md">
        <div className="mx-auto text-gold">
          <BotanicalOrnament className="h-8 w-32" />
        </div>
        <p className="mt-6 text-balance font-body text-sm leading-relaxed text-paper/80">
          {weddingConfig.footer.message}
        </p>
        <p className="mt-4 font-display text-2xl italic text-paper">
          {weddingConfig.footer.signature}
        </p>
        <p className="mt-6 font-body text-xs uppercase tracking-widest2 text-paper/50">
          {weddingYear}
        </p>
      </div>
    </footer>
  );
}
