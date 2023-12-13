import { defineConfig } from "cypress";

export default defineConfig({
  baseUrl: 'https://demoqa.com',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
