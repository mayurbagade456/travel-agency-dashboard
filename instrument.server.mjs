import * as Sentry from "@sentry/react-router";
import { nodeProfilingIntegration } from '@sentry/profiling-node';

Sentry.init({
  dsn: "https://2122350a13716b6bb2b39165556da159@o4509268535279616.ingest.de.sentry.io/4509268541833296",
  
  // Adds request headers and IP for users, for more info visit:
 // https://docs.sentry.io/platforms/javascript/guides/react-router/configuration/options/#sendDefaultPii
 sendDefaultPii: true,
 
 integrations: [nodeProfilingIntegration()],
 tracesSampleRate: 1.0, // Capture 100% of the transactions
 profilesSampleRate: 1.0, // profile every transaction
});

const container = document.getElementById(“app”);
const root = createRoot(container);
root.render(<App />);