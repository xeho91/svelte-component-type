/// <reference types="vitest" />

import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
	plugins: [svelte()],
	test: {
		typecheck: {
			enabled: true,
		},
		dir: "./src/",
	},
});
