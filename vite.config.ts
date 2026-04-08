import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "figma-asset-resolver",
      resolveId(id) {
        if (id.startsWith("figma:asset/")) {
          return "\0figma-asset:" + id;
        }
      },
      load(id) {
        if (id.startsWith("\0figma-asset:")) {
          // Returns an empty string as the default export (no image)
          return `export default ""`;
        }
      },
    },
  ],
});
