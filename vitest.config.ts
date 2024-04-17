import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import tsconfigpaths from "vite-tsconfig-paths";

export default defineConfig({
    plugins: [react(), tsconfigpaths()],
    test: {
        environment: "jsdom",
        server: {
            deps: {
                inline: [
                    "@clerk/nextjs"
                ]
            }
        }
    }
})
