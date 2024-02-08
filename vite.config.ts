import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = { base: "/", plugins: [react()] };

  // This is counter-intuitive to me, but it is correct
  if (command !== "serve") {
    config.base = "/AnaCristinaCanana";
  }

  return config;
});
