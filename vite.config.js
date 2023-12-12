import { readFileSync } from "fs";
import { sveltekit } from '@sveltejs/kit/vite';
import path from "path";
import svg from "vite-plugin-svgstring";
import dsv from "@rollup/plugin-dsv";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const { version } = JSON.parse(readFileSync("package.json", "utf8"));

const config = {
	define: {
		__VERSION__: JSON.stringify(version)
	},
	plugins: [sveltekit(), dsv(), svg(), nodeResolve()],
	resolve: {
		alias: {
			$actions: path.resolve("./src/actions"),
			$components: path.resolve("./src/components"),
			$data: path.resolve("./src/data"),
			$routes: path.resolve("./src/routes"),
			$stores: path.resolve("./src/stores"),
			$styles: path.resolve("./src/styles"),
			$svg: path.resolve("./src/svg")
		}
	},
	// build: {
		optimizeDeps: {
			exclude: ["mapbox-gl"]
		}
	// }
};

export default config;
