import { readFileSync } from "fs";
import { sveltekit } from '@sveltejs/kit/vite';
import path from "path";
import svg from "vite-plugin-svgstring";
import dsv from "@rollup/plugin-dsv";

const { version } = JSON.parse(readFileSync("package.json", "utf8"));

const config = {
	define: {
		__VERSION__: JSON.stringify(version),
	},
	plugins: [
		sveltekit(),
		dsv(),
		svg()
	],
	resolve: {
		alias: {
			"$actions": path.resolve("./src/actions"),
			"$components": path.resolve("./src/components"),
			"$data": path.resolve("./src/data"),
			"$routes": path.resolve("./src/routes"),
			"$stores": path.resolve("./src/stores"),
			"$styles": path.resolve("./src/styles"),
			"$svg": path.resolve("./src/svg"),
			"$utils": path.resolve("./src/utils")
		}
	}
};

export default config;
