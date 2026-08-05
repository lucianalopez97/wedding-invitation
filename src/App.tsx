import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InvitationPage } from './pages/InvitationPage';
import { PaymentPage } from './pages/PaymentPage';

/**
 * App — top-level router.
 *
 * The site is multi-page: the main invitation lives at "/", and the
 * "Datos para Regalo" payment details live on their own page at
 * "/regalo" (linked from <RSVPSection />). Both pages share the same
 * design system (colors, fonts, spacing) so they feel like one site.
 *
 * To add another standalone page later, add a new <Route> here and a
 * matching component under src/pages/.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InvitationPage />} />
        <Route path="/regalo" element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  );
}