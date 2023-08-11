import adapterStatic from "@sveltejs/adapter-static";
import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";
import { vitePreprocess } from '@sveltejs/kit/vite';

const preprocess = sveltePreprocess({
	postcss: {
		plugins: [autoprefixer]
	}
});

const config = {
	preprocess,
	kit: {
		adapter: adapterStatic(),
		// paths: {
		// 	base: process.env.NODE_ENV === 'production' ? '/fairmount-tester' : '',
		// }
	},
	preprocess: vitePreprocess(),
	vitePlugin: {
		// experimental: {
		// 	inspector: { holdMode: true },
		// }
	}
};

export default config;
