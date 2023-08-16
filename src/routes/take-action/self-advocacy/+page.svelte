<script>
	import { setContext } from "svelte";
	import Meta from "$components/Meta.svelte";
	import CategoryPage from "$components/take-action/CategoryPage.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";
	import { Megaphone } from "lucide-svelte";

	export let data;

	version();

	const preloadFont = [
		"https://fonts.gstatic.com/s/vollkorn/v22/0yb9GDoxxrvAnPhYGxkpaE0Urhg0.woff2",
		"https://fonts.gstatic.com/s/staatliches/v11/HI_OiY8KO6hCsQSoAPmtMYebvpCfOMPT.woff2",
		"https://fonts.gstatic.com/s/robotoslab/v25/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmYWRjV9Su1caiTVo.woff2"
	];

	const { title, description, url, keywords } = copy;
	setContext("copy", copy);
	setContext("data", data.data);

	let info = {
		icon: Megaphone,
		title: "Self Advocacy",
		description:
			"By speaking up about issues that matter to you, you can contribute to the positive changes you wish to see – just like the residents who shared their stories on this website!",
		actionItems: [
			{
				title: "Action Item Title",
				description: "Brief Description of action item",
				linkUrl: "#"
			},
			{
				title: "Action Item Title",
				description: "Brief Description of action item",
				linkUrl: "#"
			},
			{
				title: "Action Item Title",
				description: "Brief Description of action item",
				linkUrl: "#"
			}
		]
	};
</script>

<Meta {title} {description} {url} {preloadFont} {keywords} />
<CategoryPage {...info} />
