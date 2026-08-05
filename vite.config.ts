import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Standard Vite config for a React + TypeScript SPA.
// No special settings are required — everything editable for the
// invitation itself lives in `src/config/weddingConfig.ts`.
export default defineConfig({
  plugins: [react()],
});
