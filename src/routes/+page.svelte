<script>
	import { setContext } from "svelte";
	import Meta from "$components/Meta.svelte";
	import Index from "$components/Index.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";

	export let data;

	version();

	const preloadFont = [
		"https://fonts.gstatic.com/s/vollkorn/v22/0yb9GDoxxrvAnPhYGxkpaE0Urhg0.woff2",
		"https://fonts.gstatic.com/s/staatliches/v11/HI_OiY8KO6hCsQSoAPmtMYebvpCfOMPT.woff2",
		"https://fonts.gstatic.com/s/patrickhand/v20/LDI1apSQOAYtSuYWp8ZhfYe8XsLLubg58w.woff2",
		"https://fonts.gstatic.com/s/robotoslab/v25/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjoUoOmb2RjV9Su1cai.woff2",
		"https://fonts.gstatic.com/s/rubikbubbles/v3/JIA1UVdwbHFJtwA7Us1BPFbRBTYHfR5xVXM.woff2",
		"https://fonts.gstatic.com/s/opensans/v35/memSYaGs126MiZpBA-UvWbX2vVnXBbObj2OVZyOOSr4dVJWUgsgH1x4uaVQUwaEQbjB_mQ.woff"
	];

	const { title, description, url, keywords } = copy;
	setContext("copy", copy);
	setContext("data", data.data);
</script>

<Meta {title} {description} {url} {preloadFont} {keywords} />
<Index />
