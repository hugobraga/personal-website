// Compatibility helper for environment variables across CRA (process.env)
// and Vite (import.meta.env). In the browser `process` is undefined so
// we must guard access to it. Vite exposes variables prefixed with `VITE_`.
const gaFromProcess = typeof process !== 'undefined' && process.env && process.env.REACT_APP_GA_MEASUREMENT_ID;
const gaFromVite = typeof import.meta !== 'undefined' && import.meta.env && (import.meta.env.VITE_REACT_APP_GA_MEASUREMENT_ID || import.meta.env.VITE_GA_MEASUREMENT_ID);

const config = {
  googleAnalytics: {
    // Priority: process.env (server/CRA) -> Vite's import.meta.env -> fallback
    measurementId: gaFromProcess || gaFromVite || 'G-BL9MS8M2N9',
  },
  // Add more configuration values here
};

export default config;