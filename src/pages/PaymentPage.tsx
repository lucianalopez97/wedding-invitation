import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { weddingConfig } from '../config/weddingConfig';
import { Payment } from '../components/Payment/Payment';

/**
 * <PaymentPage />
 * ---------------
 * Standalone "Datos para Regalo" page, rendered at the "/regalo" route.
 * Same design system as the main invitation (fonts, colors, spacing) so
 * it feels like part of the same site — just its own URL, reached via
 * the link/button in <RSVPSection /> instead of being embedded in the
 * main scroll.
 *
 * Reuses the existing <Payment /> component for the actual card content
 * (title, description, copy-to-clipboard rows) — this page only adds the
 * page-level shell: a small header with the couple's names and a link
 * back to the invitation.
 *
 * CONFIGURATION
 * -------------
 * Content comes from `weddingConfig.payment` (see `Payment.tsx`) and
 * `weddingConfig.partnerOneName` / `partnerTwoName` for the header.
 */
export function PaymentPage() {
  return (
    <div className="min-h-screen bg-paper">
      <header className="mx-auto flex max-w-2xl items-center justify-between px-6 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-sm text-ink-soft transition-colors duration-300 hover:text-ink"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Volver a la invitación
        </Link>

        <p className="font-display text-lg text-ink">
          {weddingConfig.partnerOneName}
          <span className="mx-1.5 text-rose">&amp;</span>
          {weddingConfig.partnerTwoName}
        </p>
      </header>

      <Payment />
    </div>
  );
}