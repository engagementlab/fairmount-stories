import adapterStatic from "@sveltejs/adapter-static";
import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";
import { vitePreprocess } from '@sveltejs/kit/vite';

const preprocess = sveltePreprocess({
	postcss: {
		plugins: [autoprefixer]
	}
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess,
	kit: {
		adapter: adapterStatic(),
	},
	preprocess: vitePreprocess(),
};

export default config;
