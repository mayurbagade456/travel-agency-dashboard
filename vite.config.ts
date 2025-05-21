import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import {sentryReactRouter, type SentryReactRouterBuildOptions} from "@sentry/react-router";

const sentryConfig: SentryReactRouterBuildOptions = {
  org: "js-mastery-efs",
  project: "travel-agency",
  // An auth token is required for uploading source maps.
  authToken: "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"
  // ...
};

export default defineConfig(config => {
  return {
    plugins: [tailwindcss(), tsconfigPaths(), reactRouter(), sentryReactRouter(sentryConfig, config)],
     build: {
      // Ignore TypeScript build errors
      target: "esnext",
      cssTarget: "chrome61", // Adjust this based on your needs
      outDir: "dist",
      rollupOptions: {},
    },
    esbuild: {
      // Suppress TypeScript build errors
      loader: "tsx",
      logOverride: {
        "this-is-undefined-in-esm": "silent",
      },
    },
    sentryConfig,
    ssr: {
      noExternal: [/@syncfusion/]
    }
  };
});